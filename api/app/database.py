import logging
from typing import AsyncIterator
from sqlalchemy import MetaData
# ORM
from sqlalchemy.orm import sessionmaker, Session, scoped_session
# EXT
from sqlalchemy.ext.declarative import declarative_base as async_declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
# EXC
from sqlalchemy.exc import SQLAlchemyError
# FastAPI
from fastapi import HTTPException
#
from .settings import SettingsBase as Settings


settings = Settings()

DATABASE_URL = settings.DATABASE_URL

logger = logging.getLogger("PROJECT_A")

metadata_obj = MetaData()


# Asynchronus
logger.debug("Using Asynchronus MySQL Database Driver (aiomysql) ")

# Base Model Class need to be Inherited with Db Models
BaseDb = async_declarative_base()

# engine = create_db_engine(DATABASE_URL, echo=settings.QUERY_DEBUG)
engine = create_async_engine(
    DATABASE_URL,
    echo=settings.QUERY_DEBUG,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=0,
    echo_pool=True,
    pool_recycle=60*5,  # (5 min) This parameter prevents the pool from using a particular connection that has passed a certain age, and is appropriate for database backends such as MySQL that automatically close connections that have been stale after a particular period of time:
)  # recycle every hour
session_factory = scoped_session(
    sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
)


async def get_db_session() -> AsyncIterator:
    """Async Db Session

    Yields:
        AsyncIterator: DB Session Iterator

    Get Async Db Session everytime when IO operation to DB is requested.
    Inject it as Dependency to View / Path functions
    """

    # TODO check this in future

    try:
        async with session_factory() as session:
            #
            async with session.begin():
                logger.debug("Getting Database Session ")
                yield session
                # Auto Commit Will Happen in this Context
                logger.debug("Closed Database Session ")

    except HTTPException as e:
        logger.error("Error : %s ", e.detail)
        await session.rollback()
        logger.debug("Closing Database Session ")
        await session.close()
        logger.debug("Closed Database Session ")
