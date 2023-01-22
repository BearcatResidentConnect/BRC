import logging
import datetime

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.user_application import (
    MailIn,
    MailOut,
)
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..utils import send_email

from ..models.models import UserApplication as UserApplicationModel

from ..schemas.user_application import MailIn, MailOut, UserApplicationOut

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy


logger = logging.getLogger("PROJECT_A")


router = APIRouter(
    prefix="/api",
    tags=["MAIL SERVICE"],
    responses={404: {"description": "Not found"}},
)


@router.post(
    "/mail-service",
    # response_model=MailOut,
    status_code=status.HTTP_200_OK,
)
async def insert_mail(
    mail: MailIn,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> MailOut:

    """
    Send Application to Rental
    """

    mail_in = mail.dict()
    if "string" in mail_in.values():
        raise HTTPException(400, "Invalid Data Provided")

    resp = False

    try:
        resp = send_email(**mail_in)
    except Exception as exc:
        raise HTTPException(400, "Invalid Data Provided")

    if not resp:

        raise HTTPException(400, "Invalid Data Provided")

    resp = {"Msg": "Email Sent"}
    #
    try:

        del mail_in["subject"]
        del mail_in["body"]
        mail_in["applied_date"] = datetime.datetime.now().date()
        user_application = UserApplicationModel(**mail_in)
        session.add(user_application)
        await session.flush()
        # await session.refresh(user)

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return resp


@router.get(
    "/user_applications",
    response_model=List[UserApplicationOut],
    status_code=status.HTTP_200_OK,
)
async def get_all_applications(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserApplicationOut]:

    """
    Get all Users Submitted Applications
    """

    return await _get_user_appliactions(session)


@router.get(
    "/user_applications/{user_name}",
    response_model=List[UserApplicationOut],
    status_code=status.HTTP_200_OK,
)
async def get_all_applications(
    user_name: str,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserApplicationOut]:

    """
    Get all Users Submitted Applications
    """

    return await _get_user_appliactions(session, user_name)


async def _get_user_appliactions(
    session: Session, user_name: Union[str, None] = None
) -> List[UserApplicationOut]:

    """
    Query DB for all User's Submitted Applications
    """

    if user_name:
        print("**********************************", user_name)
        _data = await session.execute(
            select(UserApplicationModel).filter(
                UserApplicationModel.user_name == user_name
            )
        )

    else:
        _data = await session.execute(
            select(UserApplicationModel).order_by(UserApplicationModel.application_id)
        )

    _data = _data.scalars().all()

    if len(_data):
        logger.debug("Fetched User Applications ")
        return _data

    raise HTTPException(404, "No Applications found")
