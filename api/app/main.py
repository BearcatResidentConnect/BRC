"""
Main File 
"""
# create logger
from .utils import create_application_logger

logger = create_application_logger()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .views import auth
from .views import user


from .database import engine, BaseDb

app = FastAPI(
    title="Fresh BearCats Accomedation Helper",
    description="'Northwest Missouri State University' Intl Students Accomedation Helper",
    version="0.0.1",
    docs_url="/docs",
)

# *************** Register CORS ***************
origins = [
    
    "*"  # Allow All Origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ***********************************************


# *************** Register Routes ***************
app.include_router(user.router)
app.include_router(auth.router)
# ***********************************************


@app.get("/server-status", tags=["Heart Beat"])
async def health():
    """
    Health Check API
    """
    return {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Running 😊",
    }


# @app.on_event("startup") # We use Alembic Migration Manager
# async def startup():

#     """
#     Event Loop Start on Application Start Up. Which creates DB Tables
#     """

#     logger.debug("Creating Database Tables")
#     try:
#         async with engine.begin() as conn:
#             # await conn.run_sync(BaseDb.metadata.drop_all)
#             await conn.run_sync(BaseDb.metadata.create_all)
#     except Exception as e:
#         logger.critical("Database Exception %s ", e)
#         await engine.dispose()  # *
#     logger.debug("Done")


@app.on_event("shutdown")
async def shutdown():

    """
    Event Loop Stop on Application Stop.
    """

    logger.info("Shutting Down Application")
    await engine.dispose()  # *
