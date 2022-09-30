from pydantic import BaseModel, create_model

from datetime import datetime
from typing import Union, List, Optional

from enum import Enum


class Gender(str, Enum):
    MALE = "male" # 1
    FEMALE = "female" # 2
    OTHERS = "NA" # 0


class UserIn(BaseModel):
    
    sid: Union[int, None] = None
    user_name: str
    password: str
    created: Union[datetime, None] = None
    updated: Union[datetime, None] = None
    first_name: str
    last_name: str
    email: str
    active: bool = True
    avatar: Union[bytes, None] = None
    # new fields
    # gender: int = 0
    # mobile: int = 0000000000

    class Config:
        orm_mode = True


class UserOut(BaseModel):
    
    user_name: str
    first_name: str
    last_name: str
    email: str

    class Config:
        orm_mode = True



class UserUpdate(BaseModel):

    user_id: int  # Can.t be changed
    email: Union[str, None] = None
    first_name: Union[str, None] = None
    last_name: Union[str, None] = None
    updated: Union[datetime, None] = None
    active: bool = True
    avatar: Union[bytes, None] = None

    class Config:
        orm_mode = True


class SuperUserOut(BaseModel):
    name: str
    email: str
    user_id: int
    first_name: str
    last_name: str
    #department: str
    user_name: str

    class Config:
        orm_mode = True


class SuperUserIn(BaseModel):
    name: str
    email: str
    user_id: int
    first_name: str
    last_name: str
    department: str
    user_name: str
    password: str
    active: bool = True

    class Config:
        orm_mode = True


class AccessTokenOut(BaseModel):
    access_token: str
    token_type: str


class AccessRefreshTokenOut(AccessTokenOut):
    refresh_token: str

class RefreshAccessTokenIn(BaseModel):
    grant_type: str = "refresh_token"
    refresh_token: str


class TokenData(BaseModel):
    user_name: Union[str, None] = None
