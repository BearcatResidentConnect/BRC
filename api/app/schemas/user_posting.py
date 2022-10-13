from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional


class UserPostingIn(BaseModel):

    # posting_id = int
    user_id: int
    accomedation_type: str = "Temporary"
    available_date: datetime = datetime.now()
    num_days: int = 7

    class Config:
        orm_mode = True


class UserPostingOut(BaseModel):

    posting_id: int
    user_id: int
    accomedation_type: str
    available_date: datetime
    num_days: int
    
    class Config:
        orm_mode = True


class UserPostingUpdate(BaseModel):

    posting_id: int
    #user_id: int
    accomedation_type: str
    available_date: datetime
    num_days: int
