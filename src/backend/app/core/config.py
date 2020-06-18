from fastapi import FastAPI

class Settings:
    API_V1_STR = '/api/v1'
    PROJECT_NAME = 'fullstack-fastapi-elasticsearch'
    ORIGINS = 'http://localhost:4000', 'http://localhost:4000/**'

settings = Settings()