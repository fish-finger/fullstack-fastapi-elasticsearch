from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def init():
    return { 
        'project': 'FULLSTACK-FASTAPI-ELASTICSEARCH',
        'version': '0.0.0' 
    }