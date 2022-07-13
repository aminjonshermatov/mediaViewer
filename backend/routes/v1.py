import os
from typing import BinaryIO

from fastapi import APIRouter, Request, HTTPException, status
from fastapi.responses import StreamingResponse

from backend.util import neo4j_driver, MEDIA_TYPES, config
from backend.models.FileNode import NodeType

router = APIRouter()


@router.get('/')
async def get_root():
    cql = '''MATCH (:FileNode{title: $title})-[:INCLUDES*1]->(found:FileNode)
    return found'''

    with neo4j_driver.session() as session:
        try:
            data = [node['found'] for node in session.run(cql, title=config['APP']['root_folder']).data()]
        except Exception as ex:
            print(f'Exception while returning root: {ex}')
            raise ex
    return data


@router.get('/{node_uuid}')
async def get_node(node_uuid: str):
    cql = '''MATCH (:FileNode{uuid: $node_uuid})-[:INCLUDES*1]->(found:FileNode)
    return found'''

    with neo4j_driver.session() as session:
        try:
            data = [node['found'] for node in session.run(cql, node_uuid=node_uuid).data()]
        except Exception as ex:
            print(f'Exception while returning node `{node_uuid}`: {ex}')
    return data


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


@router.get('/file/{node_uuid}')
async def stream_file(request: Request, node_uuid: str):
    with neo4j_driver.session() as session:
        try:
            cql = '''match (f_node:FileNode { uuid: $node_uuid }) return f_node'''
            found_file = session.run(cql, node_uuid=node_uuid).data()

            if len(found_file) != 1:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                    detail=f'File with id: {node_uuid} not found.')

            found_file = found_file[0]['f_node']

            if found_file['extension'] not in MEDIA_TYPES or found_file['type'] != NodeType.File:
                raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                                    detail=f'Provided node isn\'t valid media type')
        except HTTPException as http_ex:
            raise http_ex
        except Exception as ex:
            print(f'Exception while streaming file: {ex}')

    return range_requests_response(request=request,
                                   file_path=found_file['file_path'],
                                   content_type=MEDIA_TYPES[found_file['extension']])
