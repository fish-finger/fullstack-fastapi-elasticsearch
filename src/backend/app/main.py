from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['http://localhost:8099', 'http://localhost:8099/**']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get('/')
def init():
    return { 
        'project': 'FULLSTACK-FASTAPI-ELASTICSEARCH',
        'version': '0.0.0' 
    }