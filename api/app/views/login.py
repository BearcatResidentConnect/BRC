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

from ..models.models import User as UserModel, BrcAnalytics as BrcAnalyticsModel

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
        user_name: str = payload.get("sub")
        logging.debug("Token Sub is ", user_name)
        if user_name is None:
            raise credentials_exception
        #token_data = TokenData(username=username)
    except JWTError as e:
        logging.error("Exception %s", e)
        raise credentials_exception

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = create_access_token(
        data={"sub": user_name}, expires_delta=access_token_expires
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
        user_name: str = payload.get("sub")
        logging.debug("Token Sub is ", user_name)
        if user_name is None:
            raise credentials_exception
        #token_data = TokenData(username=username)
    except JWTError as e:
        logging.error("Exception %s", e)
        raise credentials_exception
    user = await _get_user(session, user_name)
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
    
async def _verify_admin( token: str = Depends(oauth2_scheme), session: Session = Depends(get_db_session) ):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    insufficient_permissions_exception = HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail="Not Enough Permissions",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError as e:
        raise credentials_exception
    user = await _get_user(session, username)
    #
    if user is None:
        raise credentials_exception
    if not user.admin:
        raise insufficient_permissions_exception
    else:
        return user


