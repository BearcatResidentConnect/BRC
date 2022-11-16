from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional
from .common import CommonAddressInOut


class RentalPostingBase(BaseModel):

    # posting_id = int

    class Config:
        orm_mode = True


class RentalPostingIn(RentalPostingBase):

    name: str
    phone: int
    email: str
    #
    website: Union[str, None] = None
    #
    address1: str
    address2: Union[str, None] = None
    address3: Union[str, None] = None
    city: str
    state: str
    country: str
    zipcode: int


class RentalPostingOut(RentalPostingIn):
    rental_id: int


class RentalPostingUpdate(RentalPostingBase):
    rental_id: int
