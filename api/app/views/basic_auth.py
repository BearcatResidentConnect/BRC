"""
Super User View, Issues Login JWT Tokens
"""


import logging

from sqlalchemy.orm import Session

from fastapi import Depends, FastAPI, APIRouter, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials

from .user import _get_user
from ..database import get_db_session
from .auth import verify_password

security = HTTPBasic()

router = APIRouter(
    prefix="/api",
    tags=["Basic Authentication"],
    responses={404: {"description": "Not found"}},
)


def get_current_username(
    credentials: HTTPBasicCredentials = Depends(security),
    session: Session = Depends(get_db_session),
):
    current_username = credentials.username
    try:
        user = _get_user(session, current_username)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect User Name",
            headers={"WWW-Authenticate": "Basic"},
        )
    current_password = credentials.password
    if not verify_password(current_password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect Password",
            headers={"WWW-Authenticate": "Basic"},
        )

    resp = {"Status": "Login Succesfull", "Username": user.user_name}
    return resp

@router.get("/users/me")
def read_current_user(username: str = Depends(get_current_username)):
    resp = {"Status": "Login Succesfull", "Username": username}
