from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional


class UserPostingBase(BaseModel):

    # posting_id = int
    user_id: int

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
    approx_distance: float = 1.0
    is_pet_friendly: bool = False
    parking_available: bool = False


class UserPostingOut(UserPostingBase):
    posting_id = int


class UserPostingUpdate(UserPostingBase):
    posting_id = int












