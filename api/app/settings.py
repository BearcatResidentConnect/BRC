"""
Base Settings lOad from Env
"""

import os
from pydantic import BaseSettings
from dotenv import load_dotenv

load_dotenv()


class SettingsBase(BaseSettings):

    DATABASE_URL: str = os.getenv("DATABASE_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM: str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))
    REFRESH_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("REFRESH_TOKEN_EXPIRE_MINUTES"))
    LOG_LEVEL: str = os.getenv("LOG_LEVEL")
    DEV: bool = bool(os.getenv("DEV"))
    QUERY_DEBUG: bool = bool(os.getenv("QUERY_DEBUG"))
    EMAIL_SERVER_API_KEY: str = os.getenv("EMAIL_SERVER_API_KEY")
    SENDER_EMAIL: str = os.getenv("SENDER_EMAIL")


class DevSettings(SettingsBase):

    DEV: bool = True
    QUERY_DEBUG: bool = True


class ProdSettings(SettingsBase):

    DEV: bool = False
    QUERY_DEBUG: bool = False


class StageSettings(SettingsBase):

    DEV: bool = False
    QUERY_DEBUG: bool = False
