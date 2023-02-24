import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.rental_posting import (
    RentalPostingIn,
    RentalPostingOut,
    RentalPostingUpdate,
)
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import RentalPosting as RentalPostingModel

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
    verify_admin,
)  # Dependamcy


logger = logging.getLogger("PROJECT_A")

NOT_FOUND_RENTAL_POSTING = "Rental Posting Not Found"
NOT_FOUND_RENTAL_POSTINGS = "Rental Postings Not Found"

router = APIRouter(
    prefix="/api",
    tags=["RENTAL_POSTINGs"],
    responses={404: {"description": "Not found"}},
)


# GET API's
@router.get(
    "/rental-postings/{rental_id}",
    response_model=RentalPostingOut,
    status_code=status.HTTP_200_OK,
)
async def get_rental_posting_by_id(
    rental_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
    #admin_in: SuperUserIn = Depends(verify_admin),
) -> RentalPostingOut:

    """
    Get Matched Postings by rental_id
    """

    return await _get_rental_postings(session, rental_id)


@router.get(
    "/rental-postings",
    response_model=List[RentalPostingOut],
    status_code=status.HTTP_200_OK,
)
async def get_all_rental_postings(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[RentalPostingOut]:

    """
    Get all rental Postings
    """

    return await _get_rental_postings(session)


# POST API's
@router.post(
    "/rental-posting",
    response_model=RentalPostingOut,
    status_code=status.HTTP_201_CREATED,
)
async def insert_rental_posting(
    rental_posting: RentalPostingIn,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
    admin_in: SuperUserIn = Depends(verify_admin),
) -> RentalPostingOut:

    """
    Create Rental Posting if Not found
    """

    rental_posting_dict = rental_posting.dict()
    if "string" in rental_posting_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    try:

        user_posting_obj = RentalPostingModel(**rental_posting_dict)
        session.add(user_posting_obj)
        await session.flush()
        # await session.refresh(user)

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user_posting_obj


# PUT Methods for Update operations
@router.put(
    "/rental-posting",
    response_model=RentalPostingOut,
    status_code=status.HTTP_201_CREATED,
)
async def update_rental(
    rental_posting: RentalPostingUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
    admin_in: SuperUserIn = Depends(verify_admin),
    # user: RentalPostingUpdate = Body(embed=True), session: Session = Depends(get_db_session)
) -> RentalPostingOut:

    """
    Update User data for given body parameters based on user_id \

        *** Only Include Modifiable Parameters ***
    """

    rental_posting_dict = rental_posting.dict()

    if "string" in rental_posting_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user = await _get_rental_postings(session, rental_posting_dict["rental_id"])

    logger.debug("Fetched Rental ")
    for k, v in rental_posting_dict.items():
        if k == "rental_id":
            continue
        if v:
            setattr(user, k, v)

    return user


# Delete API
@router.delete(
    "/rental-postings/{rental_id}",
    status_code=status.HTTP_200_OK,
)
async def delete_user_by_sis_id(
    rental_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
    admin_in: SuperUserIn = Depends(verify_admin),
) -> str:

    """
    Delete RentalPosting by posting_id
    """

    # Fetch RentalPosting => Delete
    rental_posting = await _get_rental_postings(session, rental_id)

    await session.delete(rental_posting)

    return "Deleted"


# Helper Methods


async def _get_rental_postings(
    session: Session, rental_id: int = None
) -> RentalPostingOut:

    """
    Query DB with given user_id
    """

    if rental_id:
        _data = await session.execute(
            select(RentalPostingModel).where(RentalPostingModel.rental_id == rental_id)
        )
        _data = _data.scalar()

    else:
        _data = await session.execute(
            select(RentalPostingModel).order_by(RentalPostingModel.rental_id)
        )
        _data = _data.scalars().all()

    if _data:
        logger.debug("Fetched Rental Postings")
        return _data

    raise HTTPException(404, NOT_FOUND_RENTAL_POSTINGS)
