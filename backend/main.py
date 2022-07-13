from fastapi import FastAPI

import backend.routes.v1 as v1

app = FastAPI()

app.include_router(
    router=v1.router,
    prefix='/v1',
    tags=['V1']
)


@app.get('/ping')
async def ping():
    return 'ping'
