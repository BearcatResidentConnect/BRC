"""

"""


import logging

from datetime import datetime, timedelta
from dateutil.tz import tzlocal
from dateutil import parser
from typing import Union, List

from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from .settings import SettingsBase as Settings

#
from pydantic import parse_obj_as, BaseModel

#
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, To, Cc, Bcc

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


#
html_body = """
<!DOCTYPE html>
<html lang="en">
    <h4> Hello {rental_name},</h4>
    <h4> Greeting of the Day!</h4>
    <br>
    <span>
        A candidate from <strong><i>Northwest Missouri State University</i></strong> is looking for a Apartment for rent.
        If you have any avialabilty please revert back to the candiate.
    </span>

    <br>
    <span>
        <h4>
            <strong>Candidate Details to Connect</strong><br>
            Name: <i>{user_name}</i> <br>
            Email: <i>{user_email}</i> <br>
            <strong><i>Candidate has been CC'ed into this email</i></strong>
            <br>
        </h4>
    </span>

    <br>
    <p>
        <strong><i> *this is an auto generated mail, please do not reply</i></strong>
    </p>
    
    <span>
        <h4>
            Best regards,<br>
            Bearcat Resident Connect (BRC)<br>
            To find more about our project Visit: https://github.com/BearcatResidentConnect/BRC/blob/main/README.md<br>
        </h4>
    </span>

</html>


"""


def send_email(
    subject: str = "Looking for Rentals",
    rental_name: Union[str, None] = None,
    rental_email: Union[str, None] = None,
    user_email: Union[str, None] = None,
    user_name: Union[str, None] = None,
    body: Union[bool, None] = None,
    sender_name: Union[bool, None] = None,
) -> bool:
    """Send an Email via SendGrid API

    Args:
        subject (Union[str, None], optional): _description_. Defaults to None.
        rental_name (Union[str, None], optional): _description_. Defaults to None.
        rental_email (Union[str, None], optional): _description_. Defaults to None.
        user_email (Union[str, None], optional): _description_. Defaults to None.
        user_name (Union[str, None], optional): _description_. Defaults to None.
        body (Union[bool, None], optional): _description_. Defaults to None.
        sender_name (Union[bool, None], optional): _description_. Defaults to None.

    Returns:
        bool: True/False
    """

    if not body:
        body = html_body.format(user_name=user_name, user_email=user_email, rental_name=rental_name)

    to_emails = [
        To(rental_email, rental_name),
        # Bcc('test+bcc@example.com', 'Example Bcc Name 1'),
        Cc(user_email, user_name),
    ]

    # print("settings.SENDER_EMAIL ", settings.SENDER_EMAIL)

    message = Mail(
        from_email=settings.SENDER_EMAIL,
        to_emails=to_emails,
        subject=subject,
        html_content=body,
    )

    try:
        sg = SendGridAPIClient(settings.EMAIL_SERVER_API_KEY)
        response = sg.send(message)
        print(response.status_code)
        # print(response.body)
        # print(response.headers)
        return True
    except Exception as e:
        # print("EXCEPTIONnnnnnnnnnnnnnnnn ", e)
        return False
    
def get_utc_to_local(utc_datetime: datetime):
    
    iso_datetime_utc = parser.isoparse(utc_datetime)
    utc_date = str(iso_datetime_utc.date())
    utc_time = str(iso_datetime_utc.time())
    
    local_time = str(iso_datetime_utc.astimezone(tzlocal()).time())
    local_date = str(iso_datetime_utc.astimezone(tzlocal()).date())
    
    return {
        "utc_date" : utc_date,
        "utc_time" : utc_time,
        "local_time" : local_time,
        "local_date" : local_date     
    }
