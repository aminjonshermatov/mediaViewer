import os
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse
from typing import BinaryIO

from backend.util import db, mime_types

app = FastAPI(docs_url=None, redoc_url=None)

origins = ["http://localhost:4200"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_directories():
    cur_dir = os.getcwd()
    connection = db.create_connection(cur_dir + "/backend/parser/data.db")
    sql = "select DISTINCT directory_name from mediaFiles WHERE is_visible=1"
    db_directories = db.execute_read_query(connection, sql)

    if not db_directories:
        raise HTTPException(status_code=404, detail="Directories not found.")

    return db_directories


@app.get('/{directory_name}')
def read_files(directory_name: str):
    cur_dir = os.getcwd()
    connection = db.create_connection(cur_dir + "/backend/parser/data.db")
    sql = "select id, file_name, mime_type from mediaFiles where directory_name='" + directory_name + "' and is_visible=1;"
    db_files = db.execute_read_query(connection, sql)

    if not db_files:
        raise HTTPException(status_code=404, detail="Files not found.")

    return db_files


def send_bytes_range_requests(file_bin: BinaryIO,
                              start: int,
                              end: int,
                              chunk_size: int = 10_000):
    with file_bin as f:
        f.seek(start)
        while (pos := f.tell()) <= end:
            read_size = min(chunk_size, end + 1 - pos)
            yield f.read(read_size)


def _get_range_header(range_header: str, file_size: int) -> tuple[int, int]:
    def _invalid_range():
        return HTTPException(status.HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE,
                             detail=f"Invalid request range (Range:{range_header!r})")

    try:
        h = range_header.replace("bytes=", "").split("-")
        start = int(h[0]) if h[0] != "" else 0
        end = int(h[1]) if h[1] != "" else file_size - 1
    except ValueError:
        raise _invalid_range()

    if start > end or start < 0 or end > file_size - 1:
        raise _invalid_range()
    return start, end


def range_requests_response(request: Request,
                            file_path: str,
                            content_type: str):
    file_size = os.stat(file_path).st_size
    range_header = request.headers.get("range")

    headers = {
        "content-type": content_type,
        "accept-ranges": "bytes",
        "content-encoding": "identity",
        "content-length": str(file_size),
        "access-control-expose-headers": (
            "content-type, accept-ranges, content-length, "
            "content-range, content-encoding"
        )
    }
    start = 0
    end = file_size - 1
    status_code = status.HTTP_200_OK

    if range_header is not None:
        start, end = _get_range_header(range_header, file_size)
        size = end - start + 1
        headers["content-length"] = str(size)
        headers["content-range"] = f"bytes {start}-{end}/{file_size}"
        status_code = status.HTTP_206_PARTIAL_CONTENT

    return StreamingResponse(
        send_bytes_range_requests(open(file_path, mode="rb"), start, end),
        headers=headers,
        status_code=status_code,
    )


@app.get('/{directory_name}/{file_id}')
def read_file(request: Request, file_id: int):
    cur_dir = os.getcwd()
    connection = db.create_connection(cur_dir + "/backend/parser/data.db")
    sql = "select path from mediaFiles where id='" + str(file_id) + "' and is_visible=1;"
    db_file = db.execute_read_query(connection, sql)

    if len(db_file[0]) != 1:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"File with id: {file_id} not found.")
    content_type = db_file[0][0].split('.')
    return range_requests_response(request=request,
                                         file_path=db_file[0][0],
                                         content_type=mime_types.MEDIA_TYPES[content_type[-1]])
