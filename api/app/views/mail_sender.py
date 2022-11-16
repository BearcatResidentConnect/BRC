import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select

from ..schemas.mail_sender import (
    MailIn,
    MailOut,
)
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..utils import send_email

from ..models.models import RentalPosting as RentalPostingModel

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

# POST API's
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
    
    resp = {"Msg" : "Email Sent"}
    return resp