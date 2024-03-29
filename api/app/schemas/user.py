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
    admin: bool = False

    class Config:
        orm_mode = True


class UserOut(BaseModel):
    
    user_name: str
    first_name: str
    last_name: str
    email: str
    sid: Union[str, None] = None
    admin: bool


    class Config:
        orm_mode = True
        
        
class PasswordReset(BaseModel):
    
    username: str
    old_password: str
    new_password: str
    confirm_password: str


    class Config:
        orm_mode = True




class UserUpdate(BaseModel):

    user_name: str  # Can.t be changed
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
    first_name: str
    last_name: str
    #department: str
    user_name: str

    class Config:
        orm_mode = True


class SuperUserIn(BaseModel):
    name: str
    email: str
    first_name: str
    last_name: str
    department: str
    user_name: str
    password: str
    active: bool = True

    class Config:
        orm_mode = True
        
class SuperUserUpdate(BaseModel):
    name: str
    email: str
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
