from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional
from .common import CommonAddressInOut


class MailBase(BaseModel):

    class Config:
        orm_mode = True


class MailIn(MailBase):

    #sender_email: str
    subject: str
    #
    rental_name: str
    rental_email: str
    #
    user_email: str
    user_name: str
    #
    body: Union[str, None] = "This is a sample Message"
    #sender_name: Union[bool, None] = None


class MailOut(MailIn):
    pass

