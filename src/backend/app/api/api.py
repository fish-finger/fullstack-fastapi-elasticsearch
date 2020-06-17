from fastapi import APIRouter
from .endpoints import initial

api_router = APIRouter()

api_router.include_router(initial.router, prefix='', tags=['initial'])
