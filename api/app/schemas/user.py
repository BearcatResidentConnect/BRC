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


