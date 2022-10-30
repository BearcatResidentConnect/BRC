import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user_posting import UserPostingIn, UserPostingOut, UserPostingUpdate
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import UserPosting as UserPostingModel, PostingAddress as PostingAddressModel , Address as AddressModel

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

    return await _get_user_postings(session, user_id)

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


@router.get(
    "/user-postings",
    response_model=List[UserPostingOut],
    status_code=status.HTTP_200_OK,
)
async def get_all_users_postings(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Get all Users Postings
    """

    return await _get_all_user_postings(session)


# POST API's
@router.post(
    "/user-posting", response_model=UserPostingOut, status_code=status.HTTP_201_CREATED
    #"/user-posting", status_code=status.HTTP_201_CREATED
)
async def insert_user_posting(
    user_posting: UserPostingIn,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Create User Posting. if Not found
    """

    user_posting_dict = user_posting.dict()
    if "string" in user_posting_dict.values():
        raise HTTPException(400, "Invalid Data Provided")
    
    #print("*************** address_obj ***************", user_posting_dict)

    try:
        
        address = user_posting_dict["address"]
        address_obj = AddressModel(**address)
        session.add(address_obj)
        await session.flush()
        await session.refresh(address_obj)
        
        print("*************** address_obj ***************", address_obj)
        
        address_id = address_obj.address_id
        
        
        del user_posting_dict["address"]

        user_posting_obj = UserPostingModel(**user_posting_dict, address_id=address_id)
        session.add(user_posting_obj)
        await session.flush()
        await session.refresh(user_posting_obj)

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user_posting_obj
    
    #return user_posting_dict


@router.post(
    "/user-postings",
    response_model=List[UserPostingOut],
    status_code=status.HTTP_201_CREATED,
)
async def insert_user_postings(
    user_postings: List[UserPostingIn],
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Insert List of Users at a Time.
    """

    try:

        user_postings = [
            UserPostingModel(**user_posting.dict())
            for user_posting in user_postings
            if "string" not in user_posting.dict().values()
        ]
        # session.bulk_save_objects(user_postings)
        session.add_all(user_postings)
        await session.flush()

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user_postings


# PUT Methods for Update operations
@router.put(
    "/user-posting/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_201_CREATED,
)
async def update_user(
    user_posting: UserPostingUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user)
    # user: UserPostingUpdate = Body(embed=True), session: Session = Depends(get_db_session)
) -> UserPostingOut:

    """
    Update User data for given body parameters based on user_id \

        *** Only Include Modifiable Parameters ***
    """

    user_posting_dict = user_posting.dict()

    if "string" in user_posting_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user = await _get_user_postings(session, user_posting_dict["user_id"])

    logger.debug("Fetched User ")
    for k, v in user_posting_dict.items():
        if k == "user_id":
            continue
        if v:
            setattr(user, k, v)

    return user


# # Delete API
# @router.delete(
#     "/user-postings/{posting_id}",
#     response_model=UserPostingOut,
#     status_code=status.HTTP_200_OK,
# )
# async def delete_user_by_sis_id(
#     posting_id: int,
#     session: Session = Depends(get_db_session),
#     super_user_in: SuperUserIn = Depends(get_current_active_user),
# ) -> UserPostingOut:

#     """
#     Delete UserPosting by posting_id
#     """

#     # Fetch UserPosting => Delete
#     user_posting = await _get_user_postings(session, posting_id)

#     await session.delete(user_posting)

#     return user_posting


# Helper Methods
async def _get_posting_by_id_alone(session: Session, posting_id: int) -> UserPostingOut:

    """
    Query DB with given posting_id alone
    """

    _data = await session.execute(
        select(UserPostingModel).where(UserPostingModel.posting_id == posting_id)
    )

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User Posting ")
        return _data

    raise HTTPException(404, "Posting Not Found")


async def _get_user_posting(
    session: Session, user_id: int, posting_id: int
) -> UserPostingOut:

    """
    Query DB with given user_id and posting_id
    """

    _data = await session.execute(
        select(UserPostingModel).where(
            UserPostingModel.user_id == user_id,
            UserPostingModel.posting_id == posting_id,
        )
    )

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched User Posting ")
        return _data

    raise HTTPException(404, NOT_FOUND_USER_POSTING)


async def _get_user_postings(session: Session, user_id: int) -> UserPostingOut:

    """
    Query DB with given user_id
    """

    _data = await session.execute(
        select(UserPostingModel).where(UserPostingModel.user_id == user_id)
    )

    _data = _data.scalars().all()

    if _data:
        logger.debug("Fetched User Postings")
        return _data

    raise HTTPException(404, NOT_FOUND_USER_POSTINGS)


async def _get_all_user_postings(session: Session) -> List[UserPostingOut]:

    """
    Query DB for all User Postings
    """

    _data = await session.execute(
        select(UserPostingModel).order_by(UserPostingModel.user_id)
    )

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched All Users Postings")
        return _data

    raise HTTPException(404, NOT_FOUND_USER_POSTINGS)
