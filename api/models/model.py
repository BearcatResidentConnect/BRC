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

    _tablename_ = "users"

    user_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    sid = Column(Integer, unique=True, nullable=True)
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
    avatar = Column(LargeBinary(length=2048), nullable=True)  # MAx of 2 MB

    def _init_(self, **kwargs):
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

    # def to_json(self):
    #     return {"name": self.first_name + " " + self.last_name}


class Address(BaseDb):

    _tablename_ = "addresses"

    address_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    address1 = Column(String(255), nullable=False)
    address2 = Column(String(255), nullable=True)
    address3 = Column(String(255), nullable=True)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    country = Column(String(2), nullable=False)
    default = Column(Boolean, default=False)

    def _init_(self, **kwargs):
        self.user_id = kwargs["user_id"]
        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.default = kwargs["default"]