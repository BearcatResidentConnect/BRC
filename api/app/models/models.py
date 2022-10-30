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

    sid = Column(String(10), unique=True, nullable=True)
    #
    user_name = Column(String(255), nullable=False, unique=True, index=True, primary_key=True)
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


class Address(BaseDb):

    __tablename__ = "addresses"

    address_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    #
    address1 = Column(String(255), nullable=False)
    address2 = Column(String(255), nullable=True)
    address3 = Column(String(255), nullable=True)
    city = Column(String(50), nullable=False)
    state = Column(String(50), nullable=False)
    country = Column(String(50), nullable=False)
    zipcode = Column(Integer, nullable=False)
    #default = Column(Boolean, default=False)

    def __init__(self, **kwargs):

        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.zipcode = kwargs["zipcode"]
        #self.default = kwargs["default"]


class PostingAddress(BaseDb):
    
    # Each Posting has 1 Address

    __tablename__ = "posting_address"

    user_address_id = Column(
        BigInteger, primary_key=True, autoincrement=True, index=True
    )
    #
    user_name = Column(String(255), ForeignKey("users.user_name"), nullable=False)
    address_id = Column(BigInteger, ForeignKey("addresses.address_id"), nullable=False)

    def __init__(self, **kwargs):
        self.user_address_id = kwargs["user_address_id"]
        self.address_id = kwargs["address_id"]


class UserPosting(BaseDb):

    __tablename__ = "user_postings"

    posting_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    address_id = Column(BigInteger, ForeignKey("addresses.address_id"), nullable=False)
    #
    user_name = Column(String(255), ForeignKey("users.user_name"), nullable=False)  # FK
    available_date = Column(DateTime, nullable=False)
    accomedated_date = Column(DateTime, nullable=True, default=None)
    accomedation_type = Column(
        String(10), nullable=False, default="Temporary"
    )  # Temporary or Permanaent
    num_days = Column(Integer, nullable=False, default=7)
    num_people = Column(Integer, nullable=False, default=0)
    num_people_living = Column(Integer, nullable=False, default=1)
    num_bedrooms = Column(Integer, nullable=False, default=1)
    num_bathrooms = Column(Integer, nullable=False, default=1)
    approx_rent = Column(Float, nullable=False, default=200.0)
    approx_distance = Column(Float, nullable=False, default=1.0)
    is_pet_friendly = Column(Boolean, default=False)
    parking_available = Column(Boolean, default=False)

    def __init__(self, **kwargs):
        # self.posting_id = kwargs["posting_id"]
        self.address_id = kwargs["address_id"]
        self.user_name = kwargs["user_name"]
        self.available_date = kwargs["available_date"]
        self.accomedation_type = kwargs["accomedation_type"]
        self.accomedated_date = kwargs["accomedated_date"]
        self.num_days = kwargs["num_days"]
        self.num_people_living = kwargs["num_people_living"]
        self.num_bedrooms = kwargs["num_bedrooms"]
        self.num_bathrooms = kwargs["num_bathrooms"]
        self.approx_rent = kwargs["approx_rent"]
        self.approx_distance = kwargs["approx_distance"]
        self.is_pet_friendly = kwargs["is_pet_friendly"]
        self.parking_available = kwargs["parking_available"]


class RentalPosting(BaseDb):

    __tablename__ = "rental_postings"

    posting_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    # address_id = Column(BigInteger, ForeignKey("addresses.address_id"), nullable=False)
    #
    phone = Column(BigInteger, nullable=False)
    email = Column(BigInteger, nullable=False)
    #
    address1 = Column(String(255), nullable=False)
    address2 = Column(String(255), nullable=True)
    address3 = Column(String(255), nullable=True)
    city = Column(String(50), nullable=False)
    state = Column(String(50), nullable=False)
    country = Column(String(50), nullable=False)
    zipcode = Column(Integer, nullable=False)

    def __init__(self, **kwargs):

        self.phone = kwargs["phone"]
        self.email = kwargs["email"]
        #
        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.zipcode = kwargs["zipcode"]
        self.default = kwargs["default"]
