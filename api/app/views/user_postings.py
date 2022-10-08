import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user import UserPostingIn, UserPostingOut, UserPostingUpdate  
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import User as UserModel

from .auth import (
    UserPostingIn as SuperUserIn,
    UserPostingOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy

from .auth import get_password_hash, verify_password

from sqlalchemy.orm import selectinload

logger = logging.getLogger("PROJECT_A")

NOT_FOUND_USER_POSTING = "User Posting Not Found"
NOT_FOUND_USER_POSTINGS = "User Postings Not Found"

# __tablename__ = "user_postings"

# posting_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
# #
# user_id = Column(BigInteger, ForeignKey("user_postings.user_id"), nullable=False) # FK
# available_date = Column(DateTime, nullable=True, default=None)
# accomedation_type = Column(String(10), nullable=False, default="Temporary") #Temporary or Permanaent
# num_days = Column(Integer, nullable=False, default=7)

router = APIRouter(
    prefix="/api",
    tags=["USER POSTINGS"],
    responses={404: {"description": "Not found"}},
)


# GET API's
@router.get("/user_postings/{user_id}", response_model=UserPostingOut, status_code=status.HTTP_200_OK)
async def get_user_postings_by_sis_id(
    user_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Get Matched User by user_id
    """

    return await _get_user_postings(session, user_id)


@router.get("/user_postings", response_model=List[UserPostingOut], status_code=status.HTTP_200_OK)
async def get_all_users(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Get all Users
    """

    return await _get_all_user_postings(session)


# POST API's
@router.post("/user", response_model=UserPostingOut, status_code=status.HTTP_201_CREATED)
async def insert_user(
    user: UserPostingIn,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Create User if Not found
    """

    user_dict = user.dict()
    if "string" in user_dict.values():
        await HTTPException(400, "Invalid Data Provided")

    user_dict["password"] = get_password_hash(user_dict["password"])

    try:

        user = UserModel(**user_dict)
        session.add(user)
        await session.flush()
        # await session.refresh(user)

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        await HTTPException(400, "Invalid Data Provided")

    return user


@router.post(
    "/user_postings", response_model=List[UserPostingOut], status_code=status.HTTP_201_CREATED
)
async def insert_users(
    user_postings: List[UserPostingIn],
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Insert List of Users at a Time.
    """

    try:

        user_postings = [
            UserModel(**user.dict())
            for user in user_postings
            if "string" not in user.dict().values()
        ]
        # session.bulk_save_objects(user_postings)
        session.add_all(user_postings)
        await session.flush()

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        await HTTPException(400, "Invalid Data Provided")

    return user_postings


# PUT Methods for Update operations
@router.put("/user", response_model=UserPostingOut, status_code=status.HTTP_201_CREATED)
async def update_user(
    user: UserPostingUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user)
    # user: UserPostingUpdate = Body(embed=True), session: Session = Depends(get_db_session)
) -> UserPostingOut:

    """
    Update User data for given body parameters based on user_id \

        *** Only Include Modifiable Parameters ***
    """

    user_dict = user.dict()

    if "string" in user_dict.values():
        await HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user = await _get_user_postings(session, user_dict["user_id"])

    logger.debug("Fetched User ")
    for k, v in user_dict.items():
        if k == "user_id":
            continue
        if v:
            setattr(user, k, v)

    return user


# Delete API
@router.delete(
    "/user_postings/{user_id}", response_model=UserPostingOut, status_code=status.HTTP_200_OK
)
async def delete_user_by_sis_id(
    user_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Delete User by user_id
    """

    # Fetch User => Delete
    user = await _get_user_postings(session, user_id)

    await session.delete(user)

    return user


# Helper Methods
async def _get_user_postings(session: Session, user_id: int) -> UserPostingOut:

    """
    Query DB with given user_id
    """

    _data = await session.execute(select(UserModel).where(UserModel.user_id == user_id))

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User ")
        return _data

    await HTTPException(404, NOT_FOUND_USER_POSTING)


async def _get_all_user_postings(session: Session) -> List[UserPostingOut]:

    """
    Query DB for all User Postings
    """

    _data = await session.execute(select(UserModel).order_by(UserModel.user_id))

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched Users ")
        return _data

    await HTTPException(404, NOT_FOUND_USER_POSTINGS)
