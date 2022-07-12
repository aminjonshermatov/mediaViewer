from neo4j import GraphDatabase
from backend.util.config import config

uri = config['NEO4J']['URI']
username = config['NEO4J']['USERNAME']
password = config['NEO4J']['PASSWORD']

neo4j_driver = GraphDatabase.driver(uri, auth=(username, password))
