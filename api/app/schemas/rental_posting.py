from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional
from .common import CommonAddressInOut


class RentalPostingBase(BaseModel):

    # posting_id = int

    class Config:
        orm_mode = True


class RentalPostingIn(RentalPostingBase):

    phone: int
    email: str
    #
    address: CommonAddressInOut


class RentalPostingOut(RentalPostingBase):
    posting_id = int


class RentalPostingUpdate(RentalPostingBase):
    posting_id = int
