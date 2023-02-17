from pydantic import BaseSettings


class AppConfig(BaseSettings):
    redis_url: str


config = AppConfig()
