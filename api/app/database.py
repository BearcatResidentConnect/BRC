import logging

#
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base as async_declarative_base
from sqlalchemy.orm import sessionmaker
from typing import AsyncGenerator

#
from .settings import SettingsBase as Settings

#  Config Objects
settings = Settings()
DATABASE_URL = settings.DATABASE_URL
#
logger = logging.getLogger("PROJECT_A")

# metadata_obj = MetaData()
# # Asynchronus
# logger.debug("Using Asynchronus MySQL Database Driver (aiomysql) ")

# # Base Model Class need to be Inherited with Db Models
BaseDb = async_declarative_base()

engine = create_async_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
    pool_recycle=3600,
)

async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        try:
            async with session.begin():
                assert session.is_active
                logger.debug("Getting Database Session ")
                yield session
                await session.commit()
        except Exception as e:
            await session.rollback()
            raise e
        finally:
            logger.debug("Closing Database Session ")
            await session.close()
            logger.debug("Closed Database Session ")

async def get_db_session():
    """Async Db Session

    Yields:
        AsyncIterator: DB Session Iterator

    Get Async Db Session everytime when IO operation to DB is requested.
    Inject it as Dependency to View / Path functions
    """

    # TODO check this in future

    try:
        async with async_session() as session:
            #
            async with session.begin():
                logger.debug("Getting Database Session ")
                yield session
                # Auto Commit Will Happen in this Context
                logger.debug("Closed Database Session ")

    except Exception as e:
        logger.error("Error : %s ", e.detail)
        await session.rollback()
        logger.debug("Closing Database Session ")
        await session.close()
        logger.debug("Closed Database Session ")