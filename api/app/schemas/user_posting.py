from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional
from .common import CommonAddressInOut


class UserPostingBase(BaseModel):

    # posting_id = int
    user_name: str

    class Config:
        orm_mode = True


class UserPostingIn(UserPostingBase):

    accomedation_type: str = "Temporary"  # Temporary or Permanaent
    available_date: datetime = datetime.now()
    num_days: int = 7
    accomedated_date: Union[datetime, None] = None
    num_people: int = 1
    num_people_living: int = 0
    num_bedrooms: int = 1
    num_bathrooms: int = 1
    approx_rent: float = 200.0
    #approx_distance: float = 1.0
    is_pet_friendly: bool = False
    parking_available: bool = False
    #
    address: CommonAddressInOut


class UserPostingOut(BaseModel):

    posting_id: int
    accomedation_type: str
    available_date: datetime
    num_days: int
    accomedated_date: Union[datetime, None]
    num_people: int
    num_people_living: int
    num_bedrooms: int
    num_bathrooms: int
    approx_rent: float
    #approx_distance: float
    is_pet_friendly: bool
    parking_available: bool

    class Config:
        orm_mode = True


class UserPostingUpdate(UserPostingIn):
    posting_id = int
