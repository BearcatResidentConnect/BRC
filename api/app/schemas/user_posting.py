from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional


class UserPostingBase(BaseModel):

    # posting_id = int
    user_id: int

    class Config:
        orm_mode = True


class UserPostingIn(UserPostingBase):

    accomedation_type: str = "Temporary"  # Temporary or Permanaent
    available_date: datetime = datetime.now()
    num_days: int = 7
    accomedated_date: Union[datetime, None] = None
    num_people: int = 1
    num_people_living: int = 0
    num_bedrooms: int = 1
    num_bathrooms: int = 1
    approx_rent: float = 200.0
    approx_distance: float = 1.0
    is_pet_friendly: bool = False
    parking_available: bool = False


class UserPostingOut(UserPostingBase):
    posting_id = int


class UserPostingUpdate(UserPostingBase):
    posting_id = int












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