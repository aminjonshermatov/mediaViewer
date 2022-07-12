from fastapi import FastAPI
from datetime import datetime

from backend.util import neo4j_driver
from backend.models.FileNode import NodeType

import backend.routes.v1 as v1

app = FastAPI()


@app.on_event('startup')
async def startup_event():
    def file_factory(title: str, type: str, extension: str, file_path, updated_at: str = datetime.now()):
        return {
            'title': title,
            'type': type,
            'extension': extension,
            'file_path': file_path,
            'updated_at': updated_at
        }

    """
        [root]
      |       |
    [A1]    [A2]
      |       |
    [B1  B2] [B3]
      |
    [C1 C2]
    """

    files = [
        file_factory('root', NodeType.Folder, '', 'C://root'),
        file_factory('A1', NodeType.Folder, '', 'C://root/A1'),
        file_factory('A2', NodeType.File, 'jpg', 'C://root/A2.jpg'),
        file_factory('B1', NodeType.Folder, '', 'C://root/A1/B1'),
        file_factory('B2', NodeType.File, 'mp4', 'C://root/A1/B2.mp4'),
        file_factory('B3', NodeType.File, 'mp3', 'C://root/A2/B3.mp3'),
        file_factory('C1', NodeType.File, 'bmp', 'C://root/A1/B1/C1.bmp'),
        file_factory('C2', NodeType.File, 'png', 'C://root/A1/B1/C2.png'),
    ]

    cypher_nodes = ['''CREATE (:FileNode {{ {0}, uuid: randomUUID() }})'''
                    .format(','.join([f'{k}: "{v}"' for k, v in file.items()]))
                    for file in files]

    def relation_factory(from_: str, to_: str):
        return {"from": from_, "to": to_}

    relations = [
        relation_factory('root', 'A1'),
        relation_factory('root', 'A2'),
        relation_factory('A1', 'B1'),
        relation_factory('A1', 'B2'),
        relation_factory('A2', 'B3'),
        relation_factory('B1', 'C1'),
        relation_factory('B1', 'C2'),
    ]

    cypher_relations = '''UNWIND $relations as rel
    MATCH
      (f1:FileNode {{ title: rel.from }}),
      (f2:FileNode {{ title: rel.to }})
    CREATE (f1)-[:INCLUDES]->(f2)
    '''.format(relations=relations)

    cypher_constraint = '''CREATE CONSTRAINT ON (f:FileNode) ASSERT f.uuid IS UNIQUE'''

    with neo4j_driver.session() as session:
        try:
            session.run('\n'.join(cypher_nodes))
            session.run(cypher_relations, relations=relations)
            session.run(cypher_constraint)
        except Exception as ex:
            print(f'Exception while creating dummy data: {ex}')


@app.on_event('shutdown')
async def shutdown_event():
    cypher_nodes = '''MATCH (n) DETACH DELETE n'''
    cypher_constraint = '''DROP CONSTRAINT ON (f:FileNode)
    ASSERT f.uuid IS UNIQUE'''

    with neo4j_driver.session() as session:
        try:
            session.run(cypher_nodes)
            session.run(cypher_constraint)
        except Exception as ex:
            print(f'Exception while dumping db: {ex}')


app.include_router(
    router=v1.router,
    prefix='/v1',
    tags=['V1']
)


@app.get('/ping')
async def ping():
    return 'ping'
