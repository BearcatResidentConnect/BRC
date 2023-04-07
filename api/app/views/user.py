import os
import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user import UserIn, UserOut, UserUpdate, PasswordReset  # , UserCourses
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

from ..database import get_db_session

from ..models.models import User as UserModel

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy

from .auth import get_password_hash, verify_password

from ..utils import send_email

logger = logging.getLogger("PROJECT_A")

NOT_FOUND_USER = "User Not Found"
NOT_FOUND_USERS = "User's Not Found"

router = APIRouter(
    prefix="/api",
    tags=["USERS"],
    responses={404: {"description": "Not found"}},
)


templates = Jinja2Templates(directory=os.path.join(os.getcwd(), "app", "templates"))


# GET API's
@router.get(
    "/users/{user_name}", response_model=UserOut, status_code=status.HTTP_200_OK
)
async def get_user_by_user_name(
    user_name: str,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserOut:
    """
    Get Matched User by user_name
    """

    return await _get_user(session, user_name)


@router.get("/users", response_model=List[UserOut], status_code=status.HTTP_200_OK)
async def get_all_users(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserOut]:
    """
    Get all Users
    """

    return await _get_all_users(session)


# POST API's
@router.post("/user", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def insert_user(
    user: UserIn,
    session: Session = Depends(get_db_session),
    # super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserOut:
    """
    Create User if Not found
    """

    user_dict = user.dict()
    if "string" in user_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    user_dict["password"] = get_password_hash(user_dict["password"])

    try:
        user = UserModel(**user_dict)
        session.add(user)
        await session.flush()
        # await session.refresh(user)

    except SQLAlchemyError as exc:
        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user


@router.post(
    "/users", response_model=List[UserOut], status_code=status.HTTP_201_CREATED
)
async def insert_users(
    users: List[UserIn],
    session: Session = Depends(get_db_session),
    # super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserOut]:
    """
    Insert List of Users at a Time.
    """

    try:
        users = [
            UserModel(**user.dict())
            for user in users
            if "string" not in user.dict().values()
        ]
        # session.bulk_save_objects(users)
        session.add_all(users)
        await session.flush()

    except SQLAlchemyError as exc:
        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return users


# PUT Methods for Update operations
@router.put("/user", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def update_user(
    user: UserUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user)
    # user: UserUpdate = Body(embed=True), session: Session = Depends(get_db_session)
) -> UserOut:
    """
    Update User data for given body parameters based on user_name \

        *** Only Include Modifiable Parameters ***
    """

    user_dict = user.dict()

    if "string" in user_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user = await _get_user(session, user_dict["user_name"])

    logger.debug("Fetched User ")
    for k, v in user_dict.items():
        if k == "user_name":
            continue
        if v:
            setattr(user, k, v)

    return user


# Delete API
@router.delete("/users/{user_name}", status_code=status.HTTP_200_OK)
async def delete_user_by_sis_id(
    user_name: str,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> str:
    """
    Delete User by user_name
    """

    # Fetch User => Delete
    user = await _get_user(session, user_name)

    await session.delete(user)

    return "User Deleted"


# Helper Methods
async def _get_user(session: Session, user_name: str) -> UserOut:
    """
    Query DB with given user_name
    """

    _data = await session.execute(
        select(UserModel).where(UserModel.user_name == user_name)
    )

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User ")
        return _data

    raise HTTPException(404, NOT_FOUND_USER)


async def _get_all_users(session: Session) -> List[UserOut]:
    """
    Query DB for all User's
    """

    _data = await session.execute(select(UserModel).order_by(UserModel.user_name))

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched Users ")
        return _data

    raise HTTPException(404, NOT_FOUND_USERS)


async def _get_all_users_by_name(session: Session) -> List[UserOut]:
    """
    Query DB for all User's
    """

    _data = await session.execute(select(UserModel).order_by(UserModel.user_name))

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched Users ")
        return _data

    raise HTTPException(404, NOT_FOUND_USERS)


# Password Reset


def send_password_reset_email(user_name: str, token: str):
    pass


@router.get("/user/reset_password")
async def reset_password_get(request: Request):
    return templates.TemplateResponse("password_reset.html", {"request": request})


@router.post("/user/reset_password_ui")
async def reset_password_get_post(
    
    request: Request,
    username: str = Form(...),
    old_password: str = Form(...),
    new_password: str = Form(...),
    confirm_password: str = Form(...),
    session: Session = Depends(get_db_session),
) -> dict:
    #print(username, old_password, new_password, confirm_password)
    
    
    user = await _get_user(session, username)
    
    if not verify_password(old_password, user.password):
        return {"Msg": "Error Wrong Password!"}
     
    if new_password != confirm_password:
        return {"Msg": "Error New and Confirm Password Did not Match!"}

    new_hashed_password = get_password_hash(new_password)
    setattr(user, "password", new_hashed_password)

    return {"Msg": "Success Password Updated!"}


@router.post("/user/reset_password")
async def reset_password_get_post(

    data: PasswordReset,
    session: Session = Depends(get_db_session),
) -> dict:
    #print(username, old_password, new_password, confirm_password)
    
    
    user = await _get_user(session, data.username)
    
    if not verify_password(data.old_password, user.password):
        return {"Msg": "Error Wrong Password!"}
     
    if data.new_password != data.confirm_password:
        return {"Msg": "Error New and Confirm Password Did not Match!"}

    new_hashed_password = get_password_hash(data.new_password)
    setattr(user, "password", new_hashed_password)

    return {"Msg": "Success Password Updated!"}