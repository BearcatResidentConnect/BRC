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
class Address(BaseDb):

    __tablename__ = "addresses"

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

    def __init__(self, **kwargs):
        self.user_id = kwargs["user_id"]
        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.default = kwargs["default"]


class UserAddresses(BaseDb):

    __tablename__ = "user_addresses"

    user_address_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    address_id = Column(BigInteger, ForeignKey("addresses.address_id"), nullable=False)
    
class UserPosting(BaseDb):
    
    __tablename__ = "user_postings"

    posting_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    available_date = Column(DateTime, nullable=True, default=None)
    accomedation_type = Column(String(10), nullable=False, default="Temporary") #Temporary or Permanaent
    num_days = Column(Integer, nullable=False, default=7)
    
class UserAccomedation(BaseDb):
    
    __tablename__ = "user_accomedations"

    accomedatiom_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    accomedated_user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    confirmed_date = Column(DateTime, nullable=True, default=None)
    accomedated_date = Column(DateTime, nullable=True, default=None)
    accomedation_type = Column(String(10), nullable=False, default="Temporary") #Temporary or Permanaent
    rating = Column(Integer, nullable=False, default=0)
    num_days = Column(Integer, nullable=False, default=7)
    
    