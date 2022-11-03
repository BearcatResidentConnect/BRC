from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional


class CommonBase(BaseModel):

    # posting_id = int

    class Config:
        orm_mode = True


class CommonAddressInOut(CommonBase):

    address1: str
    address2: Union[str, None] = None
    address3: Union[str, None] = None
    city: str
    state: str
    country: str
    zipcode: int
    
class CommonAddressOut(CommonAddressInOut):

    address_id: int
    
class CommonSuccess(CommonBase):
    
    msg: str = "Succes"
    
class CommonFail(CommonBase):
    
    msg: str = "Fail"
    
    
