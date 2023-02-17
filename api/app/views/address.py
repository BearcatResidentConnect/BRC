import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.common import (
    CommonAddressInOut as AddressInOut,
    CommonAddressOut as AddressOut,
)
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import Address as AddressModel

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy

from .auth import get_password_hash, verify_password

from sqlalchemy.orm import selectinload

logger = logging.getLogger("PROJECT_A")

NOT_FOUND_ADDRESS = "Address Not Found"
NOT_FOUND_ADDRESSES = "Address's Not Found"

router = APIRouter(
    prefix="/api",
    tags=["ADDRESS"],
    responses={404: {"description": "Not found"}},
)


# GET API's
@router.get(
    "/addresses/{address_id}", response_model=AddressOut, status_code=status.HTTP_200_OK
)
async def get_address_by_sis_id(
    address_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> AddressInOut:

    """
    Get Matched Address by address_id
    """

    return await _get_address(session, address_id)


@router.get(
    "/addresses", response_model=List[AddressInOut], status_code=status.HTTP_200_OK
)
async def get_all_addresses(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[AddressInOut]:

    """
    Get all Addresses
    """

    return await _get_all_addresses(session)


# POST API's
@router.post("/address", response_model=AddressOut, status_code=status.HTTP_201_CREATED)
async def insert_address(
    address: AddressInOut,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> AddressInOut:

    """
    Create Address if Not found
    """

    address_dict = address.dict()
    return await _post_address(session, address_dict)


# @router.post(
#     "/addresses", response_model=List[AddressInOut], status_code=status.HTTP_201_CREATED
# )
# async def insert_addresses(
#     addresses: List[AddressInOut],
#     session: Session = Depends(get_db_session),
#     super_user_in: SuperUserIn = Depends(get_current_active_user),
# ) -> List[AddressInOut]:

#     """
#     Insert List of Addresses at a Time.
#     """

#     try:

#         addresses = [
#             AddressModel(**address.dict())
#             for address in addresses
#             if "string" not in address.dict().values()
#         ]
#         # session.bulk_save_objects(addresses)
#         session.add_all(addresses)
#         await session.flush()

#     except SQLAlchemyError as exc:

#         logger.error("Exception happend %s ", exc)
#         raise HTTPException(400, "Invalid Data Provided")

#     return addresses


# PUT Methods for Update operations
@router.put("/address", response_model=AddressOut, status_code=status.HTTP_201_CREATED)
async def update_address(
    address: AddressInOut,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user)
    # address: AddressInOut = Body(embed=True), session: Session = Depends(get_db_session)
) -> AddressInOut:

    """
    Update Address data for given body parameters based on address_id \

        *** Only Include Modifiable Parameters ***
    """

    address_dict = address.dict()

    return await _update_address(session, address_dict)


# Delete API
@router.delete(
    "/addresses/{address_id}", response_model=AddressOut, status_code=status.HTTP_200_OK
)
async def delete_address_by_sis_id(
    address_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> AddressInOut:

    """
    Delete Address by address_id
    """

    # Fetch Address => Delete
    address = await _get_address(session, address_id)

    await session.delete(address)

    return address


# Helper Methods
async def _get_address(session: Session, address_id: int) -> AddressInOut:

    """
    Query DB with given address_id
    """

    _data = await session.execute(
        select(AddressModel).where(AddressModel.address_id == address_id)
    )

    _data = _data.scalar()

    if _data:
        logger.debug("Fetched Address ")
        return _data

    raise HTTPException(404, NOT_FOUND_ADDRESS)


async def _get_all_addresses(session: Session) -> List[AddressInOut]:

    """
    Query DB for all Address's
    """

    _data = await session.execute(
        select(AddressModel).order_by(AddressModel.address_id)
    )

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched Addresses ")
        return _data

    raise HTTPException(404, NOT_FOUND_ADDRESSES)


async def _post_address(session: Session, address_dict: dict):

    if "string" in address_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    try:

        address = AddressModel(**address_dict)
        session.add(address)
        await session.flush()
        # await session.refresh(address)

    except SQLAlchemyError as exc:
        #print("EXCEPTIOMMMMMMMMMMMMMMM ADD ", exc)
        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return address


async def _update_address(session: Session, address_dict: dict):

    if "string" in address_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch Address => Update
    address = await _get_address(session, address_dict["address_id"])

    logger.debug("Fetched Address ")
    for k, v in address_dict.items():
        if k == "address_id":
            continue
        if v:
            setattr(address, k, v)

    return address
