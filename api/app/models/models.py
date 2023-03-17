import enum

from sqlalchemy import (
    Column,
    ForeignKey,
    Boolean,
    Integer,
    BigInteger,
    Float,
    String,
    DateTime,
    LargeBinary,
    Enum,
    func,
)

from sqlalchemy.orm import relationship

from ..database import BaseDb


class User(BaseDb):

    __tablename__ = "users"

    user_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    sid = Column(String(10), unique=True, nullable=True)
    #
    user_name = Column(String(255), nullable=False, unique=True, index=True)
    password = Column(String(255), nullable=False)  # Hashed Password
    #
    created = Column(DateTime, nullable=False, default=func.now())
    updated = Column(DateTime, nullable=False, default=func.now())
    #
    # name = Column(String(80), nullable=False)
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    active = Column(Boolean, default=True)
    # avatar = Column(LargeBinary(length=2048), nullable=True)  # MAx of 2 MB
    avatar = Column(String(255), nullable=True)  # MAx of 2 MB

    def __init__(self, **kwargs):
        self.sid = kwargs["sid"]
        self.user_name = kwargs["user_name"]
        self.password = kwargs["password"]
        self.created = kwargs["created"]
        self.updated = kwargs["updated"]
        self.first_name = kwargs["first_name"]
        self.last_name = kwargs["last_name"]
        self.email = kwargs["email"]
        self.active = kwargs["active"]
        self.avatar = kwargs["avatar"]





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





 


       


