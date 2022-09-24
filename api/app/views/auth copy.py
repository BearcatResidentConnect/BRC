"""
Super User View, Issues Login JWT Tokens
"""


import logging
from typing import List, Union

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user import (
    SuperUserIn,
    SuperUserOut,
    AccessRefreshTokenOut,
    AccessTokenOut,
    RefreshAccessTokenIn,
    TokenData,
)

from ..database import get_db_session, close_session_raise_exception

from ..models.models import User as UserModel

from datetime import datetime, timedelta
from typing import Union

from fastapi import APIRouter, status, Depends
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from jose import JWTError, jwt  # For JWT Tokens
from passlib.context import CryptContext  # For Hashing Password

from ..utils import (
    settings,
)

logger = logging.getLogger("ADFM")

# ===============================================================================
NOT_FOUND_USER = "User Not Found"
NOT_FOUND_USERS = "User's Not Found"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/super_user/auth/token")
# ===============================================================================

router = APIRouter(
    prefix="/api",
    tags=["USER AUTH"],
    responses={404: {"description": "Not found"}},
)

# ================================= DEPENDENCIES ==================================


def create_access_token(
    data: dict, expires_delta: Union[timedelta, None] = None
) -> str:

    """Create JWT Token

    Args:
        data (dict): Identity Dict
        expires_delta (Union[timedelta, None], optional): Time Delta. Defaults to None.

    Returns:
        str: Encoded JWT Token
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM
    )
    return encoded_jwt


# Helper Methods
def verify_password(plain_password: str, hashed_password: str) -> bool:

    """Match Passwords

    Args:
        plain_password (str): User Password
        hashed_password (str): Hashed User Password

    Returns:
        bool: Match
    """
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:

    """Hashify the given password

    Args:
        password (str): User Plain Password

    Returns:
        str: Hashed Password
    """
    return pwd_context.hash(password)


async def generate_new_access_token(token_data : RefreshAccessTokenIn):

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token_data.refresh_token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        # print("User Name is ", username)
        if username is None:
            raise credentials_exception
        #token_data = TokenData(username=username)
    except JWTError as e:
        raise credentials_exception

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = create_access_token(
        data={"sub": str(username)}, expires_delta=access_token_expires
    )

    return {"token_type": "bearer", "access_token": access_token}


async def _get_current_user(
    token: str = Depends(oauth2_scheme), session: Session = Depends(get_db_session)
):

    """ """

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        # print("User Name is ", username)
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError as e:
        # print("ERROR ", e)
        raise credentials_exception
    user = await _get_super_user(session, token_data.user_name)
    if user is None:
        raise credentials_exception
    return user


if settings.DEV:

    async def get_current_active_user() -> bool:
        #
        return True

else:

    async def get_current_active_user(
        current_super_user: SuperUserIn = Depends(_get_current_user),
    ) -> SuperUserOut:
        if current_super_user.disabled:
            raise HTTPException(status_code=400, detail="Inactive user")

        return current_super_user


# ========================================= APIs =====================================


# @router.get(
#     "/super_users/{user_id}", response_model=SuperUserOut, status_code=status.HTTP_200_OK
# )
# async def get_user_by_sis_id(
#     user_id: int,
#     session: Session = Depends(get_db_session),
#     current_user: SuperUserIn = Depends(get_current_active_user),
# ) -> SuperUserOut:

#     """
#     Get Matched User by user_id
#     """

#     return await _get_super_user(session, user_id)


# @router.get(
#     "/super_users", response_model=List[SuperUserOut], status_code=status.HTTP_200_OK
# )
# async def get_all_users(
#     session: Session = Depends(get_db_session),
#     current_user: SuperUserIn = Depends(get_current_active_user),
# ) -> List[SuperUserOut]:

#     """
#     Get all Users
#     """

#     return await _get_all_super_users(session)


# # POST API's
# @router.post(
#     "/super_user", response_model=SuperUserOut, status_code=status.HTTP_201_CREATED
# )
# async def insert_user(
#     user: SuperUserIn,
#     session: Session = Depends(get_db_session),
#     current_user: SuperUserIn = Depends(get_current_active_user),
# ) -> SuperUserOut:

#     """
#     Create User if Not found
#     """

#     if "string" in user.dict().values():
#         await close_session_raise_exception(session, 400, "Invalid Data Provided")

#     try:

#         user = UserModel(**user.dict())
#         user.password = get_password_hash(user.password)
#         session.add(user)
#         await session.flush()
#         # await session.refresh(user)

#     except SQLAlchemyError as exc:

#         logger.error("Exception happend %s ", exc)
#         await close_session_raise_exception(session, 400, "Invalid Data Provided")

#     return user


@router.post("/super_user/auth/token", response_model=AccessRefreshTokenOut)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_db_session),
):
    """ """
    #
    user = await _get_super_user(session, form_data.username)
    #
    if not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    #
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": str(user.user_id)}, expires_delta=access_token_expires
    )
    #
    refresh_token_expires = timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
    refresh_token = create_access_token(
        data={"sub": str(user.user_id)}, expires_delta=refresh_token_expires
    )
    return {
        "token_type": "bearer",
        "access_token": access_token,
        "refresh_token": refresh_token,
    }


@router.post("/super_user/auth/refresh_token", response_model=AccessTokenOut)
async def validate_refresh_token_get_access_token(refresh_token : RefreshAccessTokenIn

):
    return await generate_new_access_token(refresh_token)


# ====================================================================================


async def _get_super_user(session: Session, user_id: int) -> SuperUserOut:

    """
    Query DB with given user_id
    """

    _data = await session.execute(select(UserModel).where(UserModel.user_id == user_id))

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User ")
        return _data

    await close_session_raise_exception(session, 404, NOT_FOUND_USER)


async def _get_all_super_users(session: Session) -> List[SuperUserOut]:

    """
    Query DB for all User's
    """

    _data = await session.execute(select(UserModel).order_by(UserModel.id))

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched Users ")
        return _data

    await close_session_raise_exception(session, 404, NOT_FOUND_USERS)
