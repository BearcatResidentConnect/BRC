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




