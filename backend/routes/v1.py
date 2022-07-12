from fastapi import APIRouter, HTTPException, status

from backend.util import neo4j_driver

router = APIRouter()


@router.get('/')
async def get_root():
    cql = '''MATCH (:FileNode{title: $title})-[:INCLUDES*1]->(found:FileNode)
    return found'''

    with neo4j_driver.session() as session:
        try:
            data = [node['found'] for node in session.run(cql, title='root').data()]
        except Exception as ex:
            print(f'Exception while returning root: {ex}')
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


@router.get('/video/{node_uuid}')
async def load_file(node_uuid: str):
    with neo4j_driver.session() as session:
        try:
            cql = '''match (f_node:FileNode { uuid: $node_uuid }) return f_node'''
            found_file = session.run(cql, node_uuid=node_uuid).data()

            if len(found_file) != 1:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                    detail=f'File with id: {node_uuid} not found.')

            found_file = found_file[0]['f_node']
        except HTTPException as http_ex:
            raise http_ex
        except Exception as ex:
            print(f'Exception while streaming file: {ex}')

    return f'file {found_file["file_path"]}'
