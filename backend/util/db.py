from neo4j import GraphDatabase
from dotenv import load_dotenv, find_dotenv
import os

env_file = find_dotenv('.env')
load_dotenv(env_file)

uri = os.environ.get('NEO4J_URI')
username = os.environ.get('NEO4J_USERNAME')
password = os.environ.get('NEO4J_PASSWORD')

neo4j_driver = GraphDatabase.driver(uri, auth=(username, password))
