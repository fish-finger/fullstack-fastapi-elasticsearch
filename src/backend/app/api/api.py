from fastapi import APIRouter
from .endpoints import initial, host

api_router = APIRouter()

api_router.include_router(initial.router, prefix='', tags=['initial'])
api_router.include_router(host.router, prefix='/host', tags=['address'])
