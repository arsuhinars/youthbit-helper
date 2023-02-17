from fastapi import APIRouter
from fastapi.responses import PlainTextResponse

from app.redis import redis_client

router = APIRouter()


@router.get('/ping')
def status_check():
    return PlainTextResponse('pong')
