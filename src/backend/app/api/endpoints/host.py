from fastapi import APIRouter, status
from models.url import Url
from db.db import db

router = APIRouter()

@router.post('/url')
def save_url(url: Url):
    return db.index('host', url.__dict__)

@router.get('/url', status_code=status.HTTP_200_OK)
def get_all_urls():
    return db.search('host')