from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional
from .common import CommonAddressInOut


class RentalPostingBase(BaseModel):

    # posting_id = int

    class Config:
        orm_mode = True


class RentalPostingIn(RentalPostingBase):

    name: str
    phone: int
    email: str
    #
    website: Union[str, None] = None
    #
    address1: str
    address2: Union[str, None] = None
    address3: Union[str, None] = None
    city: str
    state: str
    country: str
    zipcode: int

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



        class RentalPostingOut(RentalPostingIn):
    rental_id: int


class RentalPostingUpdate(RentalPostingBase):
    rental_id: int








