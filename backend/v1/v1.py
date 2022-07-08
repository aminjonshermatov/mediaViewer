from fastapi import APIRouter

from backend.v1.util import neo4j_driver

router = APIRouter()


@router.get('/')
async def get_root():
    cql = '''MATCH (:FileNode{title: 'root'})-[:INCLUDES*1]->(found:FileNode)
    return found'''

    with neo4j_driver.session() as session:
        try:
            data = [node['found'] for node in session.run(cql).data()]
        except Exception as ex:
            print(f'Exception while returning root: {ex}')
    return data


@router.get('/{node_uuid}')
async def get_node(node_uuid: str):
    cql = '''MATCH (:FileNode{uuid: $uuid})-[:INCLUDES*1]->(found:FileNode)
    return found'''

    with neo4j_driver.session() as session:
        try:
            data = [node['found'] for node in session.run(cql, uuid=node_uuid).data()]
        except Exception as ex:
            print(f'Exception while returning node `{node_uuid}`: {ex}')
    return data


@router.get('/file/${node_id}')
async def load_file(node_id: str):
    return f'file ${node_id}'
