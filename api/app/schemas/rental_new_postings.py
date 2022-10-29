from pydantic import BaseModel

from datetime import datetime
from typing import Union, List, Optional


class RentalNewPostingIn(BaseModel):

    posting_id = int

    class Config:
        orm_mode = True


