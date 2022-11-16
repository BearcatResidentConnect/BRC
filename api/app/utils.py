"""

"""


import logging

from datetime import datetime, timedelta
from typing import Union, List

from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from .settings import SettingsBase as Settings

#
from pydantic import parse_obj_as, BaseModel

#
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

logger = logging.getLogger("PROJECT_A")

# ===============================================================================
settings = Settings()
# ===============================================================================


def create_application_logger() -> logger:

    """PROJECT_A Application Logger"""

    level = settings.LOG_LEVEL

    if not level:
        level = logging.DEBUG

    logger = logging.getLogger("PROJECT_A")

    logger.setLevel(level.upper())

    ch = logging.StreamHandler()
    ch.setLevel(level.upper())

    formatter = logging.Formatter(
        "%(levelname)s - %(name)s - %(filename)s - %(funcName)s - %(asctime)s - %(message)s",
        datefmt="%d-%b-%y %H:%M:%S",
    )

    ch.setFormatter(formatter)

    logger.addHandler(ch)

    return logger


def get_normalized_value(min, max, val):
    if max == min:
        if min == 0:
            return 0
        return round((val / max) * 100, 2)
    return round((val - min) / (max - min) * 100, 2)


def dump_to_pydantic_model_dict(pydantic_model: BaseModel, db_model, many=False):

    if many:
        # Parse List of Models
        dump_data = parse_obj_as(List[pydantic_model], db_model)
        resp = [data.dict() for data in dump_data]

    else:
        dump_data = parse_obj_as(pydantic_model, db_model)
        resp = dump_data.dict()

    return resp


def send_email(

    subject: Union[str, None] = None,
    rental_name: Union[str, None] = None,
    rental_email: Union[str, None] = None,
    user_email: Union[str, None] = None,
    user_name: Union[str, None] = None,
    body: Union[bool, None] = None,
    sender_name: Union[bool, None] = None,
) -> bool:

    if not body:
        body = f"<strong>{user_name} is Looking for a Apartment/strong>"

    print("settings.SENDER_EMAIL ", settings.SENDER_EMAIL)
    message = Mail(
        from_email=settings.SENDER_EMAIL,
        to_emails=rental_email,
        subject=subject,
        html_content=body,
    )
    

    print("user_email ", user_email)
    # if user_email:
    #     message.add_cc(user_email)

    try:
        sg = SendGridAPIClient(settings.EMAIL_SERVER_API_KEY)
        # (os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        # print(response.body)
        # print(response.headers)
        # print("Done")
        return True
    except Exception as e:
        #print("EXCEPTIONnnnnnnnnnnnnnnnn ", e)
        return False
