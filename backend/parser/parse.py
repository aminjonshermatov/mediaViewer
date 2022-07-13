import json
import os
from datetime import datetime

from ..util import config, neo4j_driver
from ..models.FileNode import NodeType

root_folder = config['APP']['root_folder']

files: list[dict[str, str]] = []
relations: list[dict[str, str]] = []


def with_slash(path: str) -> str:
    return path + '/'


def file_factory(title: str,
                 type: str,
                 extension: str,
                 file_path,
                 updated_at: str = datetime.now()):
    return {
        'title': title,
        'type': type,
        'extension': extension,
        'file_path': file_path,
        'updated_at': updated_at
    }


def relation_factory(from_: str, to_: str):
    return {"from": from_, "to": to_}


def dfs(parent_path: str, file_name: str):
    cur_path = with_slash(parent_path) if parent_path != '' else ''
    cur_path += file_name
    file_info = os.path.splitext(cur_path)
    if file_info[1] == '' and os.path.isdir(cur_path):
        files.append(file_factory(file_name, NodeType.Folder, '', cur_path))
        for file in os.listdir(cur_path):
            dfs(cur_path, file)
    elif file_info[1] != '':
        files.append(file_factory(file_name, NodeType.File, file_info[1][1:], cur_path))
    if parent_path != '':
        relations.append(relation_factory(parent_path, cur_path), )


dfs('', root_folder)

print(json.dumps(files, indent=4, sort_keys=True, default=str))
print(json.dumps(relations[::-1], indent=4, sort_keys=True, default=str))


cql_dump = '''MATCH (n) DETACH DELETE n'''

cql_files = ['''CREATE (:FileNode {{ {0}, uuid: randomUUID() }})'''
                .format(','.join([f'{k}: "{v}"' for k, v in file.items()]))
                for file in files]

cql_relations = '''UNWIND $relations as rel
    MATCH
      (f1:FileNode {{ file_path: rel.from }}),
      (f2:FileNode {{ file_path: rel.to }})
    CREATE (f1)-[:INCLUDES]->(f2)
    '''.format(relations=relations)

cql_indexes = [
    '''CREATE INDEX uuid_ FOR (n:FileNode) on (n.uuid)''',
    '''CREATE INDEX file_path_ FOR (n:FileNode) on (n.file_path)''',
    '''CREATE INDEX extension_ FOR (n:FileNode) on (n.extension)''',
]


cql_dump_indexes = [
    '''DROP INDEX uuid_''',
    '''DROP INDEX file_path_''',
    '''DROP INDEX extension_''',
]

with neo4j_driver.session() as session:
    try:
        session.run(cql_dump)
        for cql__dump_index in cql_dump_indexes:
            session.run(cql__dump_index)

        session.run('\n'.join(cql_files))
        session.run(cql_relations, relations=relations)

        for cql_index in cql_indexes:
            session.run(cql_index)
    except Exception as ex:
        print(f'Exception while creating dummy data: {ex}')
