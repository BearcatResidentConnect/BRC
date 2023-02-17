from pydantic import BaseModel, create_model

from datetime import datetime
from typing import Union, List, Optional

from enum import Enum

class DashboardBase(BaseModel):

    class Config:
        orm_mode = True
        
class DashBoardOut(DashboardBase):
    
    num_users: int
    num_rental_postings: int
    num_user_postings: int
    num_visitors: int

