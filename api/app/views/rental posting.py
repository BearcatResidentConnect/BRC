import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user_posting import UserPostingIn, UserPostingOut, UserPostingUpdate
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import UserPosting as UserPostingModel

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy


from sqlalchemy.orm import selectinload

logger = logging.getLogger("PROJECT_A")

NOT_FOUND_USER_POSTING = "User Posting Not Found"
NOT_FOUND_USER_POSTINGS = "User Postings Not Found"

router = APIRouter(
    prefix="/api",
    tags=["USER POSTINGS"],
    responses={404: {"description": "Not found"}},
)

# GET API's
@router.get(
    "/user-postings/{user_id}",
    response_model=List[UserPostingOut],
    status_code=status.HTTP_200_OK,
)
async def get_user_postings_by_sis_id(
    user_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Get Matched Postings by user_id
    """
    @router.get(
    "/user-posting/{user_id}/postings/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_200_OK,
)
async def get_user_posting_by_sis_id_and_posting_id(
    user_id: int,
    posting_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Get Matched Postings by user_id and Posting Id
    """

    return await _get_user_posting(session, user_id, posting_id)


@router.get(
    "/user-posting/postings/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_200_OK,
)
async def get_user_posting_by_posting_id(
    posting_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Get Matched Posting by Posting Id ALone
    """

    return await _get_posting_by_id_alone(session, posting_id)






