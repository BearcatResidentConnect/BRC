from pydantic import BaseModel

from datetime import datetime, date
from typing import Union, List, Optional
from .common import CommonAddressInOut, CommonAddressUpdate


class UserPostingBase(BaseModel):

    # posting_id = int
    user_name: str

    class Config:
        orm_mode = True


class UserPostingIn(UserPostingBase):

    accomedation_type: str = "Temporary"  # Temporary or Permanaent
    name: str
    available_date: date = datetime.now().date()
    num_days: int = 7
    accomedated_date: Union[date, None] = None
    num_people: int = 1
    num_people_living: int = 0
    num_bedrooms: int = 1
    num_bathrooms: int = 1
    approx_rent: float = 200.0
    # approx_distance: float = 1.0
    is_pet_friendly: bool = False
    parking_available: bool = False
    #
    address: CommonAddressInOut
    description: str = "NA"


class UserPostingOut(BaseModel):
    
    #user
    user_name: str
    first_name: str
    last_name: str
    email: str

    #Posting
    posting_id: int
    name: str
    accomedation_type: str
    available_date: date
    num_days: int
    accomedated_date: Union[date, None] = None
    num_people: int
    num_people_living: int
    num_bedrooms: int
    num_bathrooms: int
    approx_rent: float
    # approx_distance: float
    is_pet_friendly: bool
    parking_available: bool
    
    # Address
    address1: str
    address2: str
    address3: str
    city: str
    state: str
    country: str
    zipcode: int

    class Config:
        orm_mode = True


# class UserPostingUpdate(UserPostingIn):
#     posting_id = int


class UserPostingUpdate(BaseModel):
    posting_id: int

    class Config:
        orm_mode = True


class UserPostingUpdate(BaseModel):

    # user_name: Union[str, None] = None
    posting_id: int  # Required
    accomedation_type: Union[str, None] = None
    available_date: Union[datetime, None]
    num_days: Union[int, None] = None
    accomedated_date: Union[datetime, None] = None
    num_people: Union[int, None] = None
    num_people_living: Union[int, None] = None
    num_bedrooms: Union[int, None] = None
    num_bathrooms: Union[int, None] = None
    approx_rent: Union[float, None] = None
    # approx_distance: float = 1.0
    is_pet_friendly: Union[bool, None] = None
    parking_available: Union[bool, None] = None
    #
    address: CommonAddressUpdate
