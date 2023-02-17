from contextlib import AbstractAsyncContextManager, asynccontextmanager
from typing import Callable

from redis.asyncio import ConnectionPool, Redis

from app.config import config

connection_pool = ConnectionPool.from_url(config.redis_url)


@asynccontextmanager
async def redis_client() -> Callable[..., AbstractAsyncContextManager[Redis]]:
    try:
        client = Redis(connection_pool=connection_pool)
        yield client
    finally:
        await client.close()
