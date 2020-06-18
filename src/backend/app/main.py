from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import api_router
from core.config import settings

app = FastAPI()

origins = [
    'http://localhost:8099', 'http://localhost:8099/**',
    'http://localhost:4000', 'http://localhost:4000/**'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(api_router, prefix=settings.API_V1_STR)