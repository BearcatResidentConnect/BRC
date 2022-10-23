"""
User Auth View, Issues Login JWT Tokens
"""


import logging
from typing import List, Union

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user import (
    UserIn,
    UserOut,
    UserInCheck,
    AccessRefreshTokenOut,
    AccessTokenOut,
    RefreshAccessTokenIn,
    TokenData,
)

from ..database import get_db_session

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
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/users/auth/token")
# ===============================================================================

router = APIRouter(
    prefix="/api",
    tags=["USERS"],
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
        user_id: int = payload.get("sub")
        logging.debug("Token Sub is ", user_id)
        if user_id is None:
            raise credentials_exception
        #token_data = TokenData(username=username)
    except JWTError as e:
        logging.error("Exception %s", e)
        raise credentials_exception

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = create_access_token(
        data={"sub": user_id}, expires_delta=access_token_expires
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
        user_id: int = payload.get("sub")
        logging.debug("Token Sub is ", user_id)
        if user_id is None:
            raise credentials_exception
        #token_data = TokenData(username=username)
    except JWTError as e:
        logging.error("Exception %s", e)
        raise credentials_exception
    user = await _get_user(session, user_id)
    if user is None:
        raise credentials_exception
    return user


if settings.DEV:

    async def get_current_active_user() -> bool:
        #
        return True

else:

    async def get_current_active_user(
        current_user: UserIn = Depends(_get_current_user),
    ) -> UserOut:
        if not current_user.active:
            raise HTTPException(status_code=400, detail="Inactive user")

        return current_user


# ========================================= APIs =====================================

@router.post("/users/auth")
async def basic_login(
    user: UserInCheck,
    #form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_db_session),
):
    """ """
    user_dict = user.dict()
    user = await _get_user(session, user_dict["user_name"])
    if not verify_password(user_dict["password"], user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    else:
        return {"username": user_dict["user_name"]}


@router.post("/users/auth/token", response_model=AccessRefreshTokenOut)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_db_session),
):
    """ """
    #
    #print(form_data.username)
    try:
        user = await _get_user(session, form_data.username)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect User Name",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    #
    if not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Password",
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


@router.post("/users/auth/refresh-token", response_model=AccessTokenOut)
async def validate_refresh_token_get_access_token(refresh_token : RefreshAccessTokenIn

):
    return await generate_new_access_token(refresh_token)


# ====================================================================================

    
# Helper Methods
async def _get_user(session: Session, user_name: str) -> UserOut:

    """
    Query DB with given user_id
    """

    _data = await session.execute(select(UserModel).where(UserModel.user_name == user_name))

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User ")
        return _data

    raise HTTPException( 404, NOT_FOUND_USER)

