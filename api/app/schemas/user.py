from pydantic import BaseModel, create_model

from datetime import datetime
from typing import Union, List, Optional

from enum import Enum


class Gender(str, Enum):
    MALE = "male" # 1
    FEMALE = "female" # 2
    OTHERS = "NA" # 0

class UserInCheck(BaseModel):

    user_name: str
    password: str

    
class UserIn(BaseModel):
    
    sid: Union[str, None] = None
    user_name: str
    password: str
    created: Union[datetime, None] = None
    updated: Union[datetime, None] = None
    first_name: str
    last_name: str
    email: str
    active: bool = True
    avatar: Union[str, None] = "ABCDEFGHIJKLMNOPQRSTUVWXY"

    class Config:
        orm_mode = True





