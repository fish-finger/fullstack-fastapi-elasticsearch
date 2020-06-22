from fastapi import FastAPI
from os import environ

class Settings:
    API_V1_STR = '/api/v1'
    PROJECT_NAME = 'fullstack-fastapi-elasticsearch'
    ORIGINS = 'http://localhost:4000', 'http://localhost:4000/**'
    ELASTICSEARCH_HOST = environ.get('ELASTICSEARCH_HOST') if environ.get('ELASTICSEARCH_HOST') != None else 'localhost'

settings = Settings()