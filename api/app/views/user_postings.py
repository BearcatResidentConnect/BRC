import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user_posting import UserPostingIn, UserPostingOut, UserPostingUpdate
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import (
    UserPosting as UserPostingModel,
    PostingAddress as PostingAddressModel,
    Address as AddressModel,
)


from .address import _post_address, _get_address, _update_address, AddressModel

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
    "/user-postings/{user_name}",
    # response_model=List[UserPostingOut],
    status_code=status.HTTP_200_OK,
)
async def get_user_postings_by_user_name(
    user_name: str,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserPostingOut]:

    """
    Get Matched Postings by user_name
    """

    return await _get_user_postings(session, user_name)


@router.get(
    "/user-posting/{user_name}/postings/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_200_OK,
)
async def get_user_posting_by_user_name_and_posting_id(
    user_name: str,
    posting_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Get Matched Postings by user_name and Posting Id
    """

    return await _get_user_posting(session, user_name, posting_id)


@router.get(
    "/user-posting/postings/{posting_id}",
    # response_model=UserPostingOut,
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
    # response_model=List[UserPostingOut],
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
    "/user-posting",
    # response_model=UserPostingOut,
    status_code=status.HTTP_201_CREATED,
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

    try:
        address = user_posting_dict["address"]
        address_obj = await _post_address(session, address)
        address_id = address_obj.address_id
        del user_posting_dict["address"]
        user_posting_dict["address_id"] = address_id
        user_posting_obj = UserPostingModel(**user_posting_dict)
        session.add(user_posting_obj)
        await session.flush()
        await session.refresh(user_posting_obj)

    except SQLAlchemyError as exc:
        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user_posting_obj


# @router.post(
#     "/user-postings",
#     response_model=List[UserPostingOut],
#     status_code=status.HTTP_201_CREATED,
# )
# async def insert_user_postings(
#     user_postings: List[UserPostingIn],
#     session: Session = Depends(get_db_session),
#     super_user_in: SuperUserIn = Depends(get_current_active_user),
# ) -> List[UserPostingOut]:

#     """
#     Insert List of Users at a Time.
#     """

#     try:

#         user_postings = [
#             UserPostingModel(**user_posting.dict())
#             for user_posting in user_postings
#             if "string" not in user_posting.dict().values()
#         ]
#         # session.bulk_save_objects(user_postings)
#         session.add_all(user_postings)
#         await session.flush()

#     except SQLAlchemyError as exc:

#         logger.error("Exception happend %s ", exc)
#         raise HTTPException(400, "Invalid Data Provided")

#     return user_postings


# # PUT Methods for Update operations
@router.put(
    "/user-posting",
    # response_model=UserPostingOut,
    status_code=status.HTTP_204_NO_CONTENT,
)
async def update_user(
    user_posting: UserPostingUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Update User data for given body parameters based on user_name \

        *** Only Include Modifiable Parameters ***
    """

    user_posting_dict = user_posting.dict()
    address_dict = user_posting_dict["address"]
    del user_posting_dict["address"]

    if "string" in user_posting_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user_posting = await _get_user_posting_obj(session, user_posting_dict["posting_id"])

    address_dict["address_id"] = user_posting.address_id

    logger.debug("Fetched User Posting ")
    for k, v in user_posting_dict.items():
        if k == "posting_id":
            continue
        if v:
            setattr(user_posting, k, v)

    await _update_address(session, address_dict)

    return


# Delete API
@router.delete(
    "/user-postings/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_200_OK,
)
async def delete_user_by_user_name(
    posting_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Delete UserPosting by posting_id
    """

    # Fetch UserPosting => Delete
    user_posting = await _get_user_postings(session, posting_id)

    await session.delete(user_posting)

    return user_posting


# Helper Methods
async def _get_posting_by_id_alone(session: Session, posting_id: int) -> UserPostingOut:

    """
    Query DB with given posting_id alone
    """

    try:
        _data = await session.execute(
            select(UserPostingModel, AddressModel)
            .select_from(UserPostingModel)
            .join(AddressModel)
            .filter(UserPostingModel.posting_id == posting_id)
        )

        _data = _data.one()

        if _data:
            logger.debug("Fetched User Posting ")
            return _data

    except Exception as e:
        logger.error("No Records Found")

    raise HTTPException(404, "Posting Not Found")


async def _get_user_posting(
    session: Session, user_name: str, posting_id: int
) -> UserPostingOut:

    """
    Query DB with given user_name and posting_id
    """
    try:
        _data = await session.execute(
            select(UserPostingModel, AddressModel)
            .select_from(UserPostingModel)
            .join(AddressModel)
            .filter(
                UserPostingModel.user_name == user_name,
                UserPostingModel.posting_id == posting_id,
            )
        )

        _data = _data.one()

        if _data:
            logger.debug("Fetched User Posting ")
            return _data

    except Exception as e:
        logger.error("No Records Found")

    raise HTTPException(404, NOT_FOUND_USER_POSTING)


async def _get_user_postings(session: Session, user_name: str) -> UserPostingOut:

    """
    Query DB with given user_name
    """

    try:
        _data = await session.execute(
            select(UserPostingModel, AddressModel)
            .select_from(UserPostingModel)
            .join(AddressModel)
            .filter(UserPostingModel.user_name == user_name)
        )

        _data = _data.all()

        if _data:
            logger.debug("Fetched User Postings")
            return _data

    except Exception as e:
        logger.error("No Records Found")

    raise HTTPException(404, NOT_FOUND_USER_POSTINGS)


async def _get_all_user_postings(session: Session) -> List[UserPostingOut]:

    """
    Query DB for all User Postings
    """
    try:
        _data = await session.execute(
            select(UserPostingModel, AddressModel)
            .select_from(UserPostingModel)
            .join(AddressModel)
        )

        _data = _data.all()

        if len(_data):
            logger.debug("Fetched All Users Postings")
            return _data
    except Exception as e:
        logger.error("No Records Found")

    raise HTTPException(404, NOT_FOUND_USER_POSTINGS)


async def _get_user_posting_obj(session: Session, posting_id: int):

    """
    Query DB with given address_id
    """

    _data = await session.execute(
        select(UserPostingModel).where(UserPostingModel.posting_id == posting_id)
    )

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched Posting ")
        return _data

    raise HTTPException(404, NOT_FOUND_USER_POSTING)
