import logging

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from sqlalchemy import select, func

from ..schemas.dashboard import DashBoardOut
from typing import List, Union

from fastapi import APIRouter, status, Depends, HTTPException

from ..database import get_db_session

from ..models.models import (
    User as UserModel,
    UserPosting as UserPostingModel,
    RentalPosting as RentalPostingModel,
    BrcAnalytics as BrcAnalyticsModel
)

from .auth import (
    UserIn as SuperUserIn,
    UserOut as SuperUserOut,
    get_current_active_user,
)  # Dependamcy

logger = logging.getLogger("PROJECT_A")


router = APIRouter(
    prefix="/api",
    tags=["DASHBOARD"],
    responses={404: {"description": "Not found"}},
)


# GET API's
@router.get(
    "/dashboard/analytics", response_model=DashBoardOut, status_code=status.HTTP_200_OK
)
async def get_user_by_user_name(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> DashBoardOut:
    """
    Get Matched User by user_name
    """

    return await _get_dashboard_analytics(session)


async def _get_dashboard_analytics(session: Session) -> DashBoardOut:
    """
    Query DB for all Dashboard Analytics
    """

    try:
        user_count = await session.execute(select(func.count()).select_from(UserModel))
        user_count = user_count.scalar()
        
        vistor_count = await session.execute(select(BrcAnalyticsModel))
        vistor_count = vistor_count.scalar()
        vistor_count = vistor_count.visted_users_count

        user_postings_count = await session.execute(
            select(func.count()).select_from(UserPostingModel)
        )
        user_postings_count = user_postings_count.scalar()

        rental_postings_count = await session.execute(
            select(func.count()).select_from(RentalPostingModel)
        )
        rental_postings_count = rental_postings_count.scalar()

        if user_count or user_postings_count or rental_postings_count:
            logger.debug("Fetched Analytics data ")

            data = {
                "num_users": user_count,
                "num_rental_postings": user_postings_count,
                "num_user_postings": rental_postings_count,
                "num_visitors" : vistor_count
            }

    except Exception as e:
        print(e)
        raise HTTPException(404, "Error fetching analytics data")

    return data

async def update_dashboard(val: str):
    
    print("val is val")
