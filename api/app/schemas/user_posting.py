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


class UserPostingOut(UserPostingIn):

    pass


class UserPostingUpdate(UserPostingIn):

    pass
