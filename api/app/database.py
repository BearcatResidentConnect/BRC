import logging
from typing import AsyncIterator
from sqlalchemy import MetaData
# ORM
from sqlalchemy.orm import sessionmaker, Session
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
create_db_engine = create_async_engine
session_maker_cls = AsyncSession
#
session_maker_kwargs = {"expire_on_commit": False}

# Base Model Class need to be Inherited with Db Models
BaseDb = async_declarative_base()

engine = create_db_engine(DATABASE_URL, echo=settings.QUERY_DEBUG)


session_local = sessionmaker(
    **session_maker_kwargs, bind=engine, class_=session_maker_cls
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
        async with session_local() as session:
            #
            async with session.begin():
                logger.debug("Getting Database Session ")
                yield session
            # Auto Commit Will Happen in this Context
            
    except HTTPException as e:
        logger.error("Error : %s ", e.detail)
        await session.rollback()
        
    finally:
        logger.debug("Closing Database Session ")
        await session.close()
        logger.debug("Closed Database Session ")