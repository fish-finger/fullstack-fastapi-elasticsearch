from fastapi import APIRouter, status
from core.config import settings

router = APIRouter()

@router.get('/', status_code=status.HTTP_200_OK)
def initial():
    return { 'api': settings.API_V1_STR, 'porject': settings.PROJECT_NAME }
