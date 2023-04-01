@router.get(
    "/user-posting/{user_id}/postings/{posting_id}",
    response_model=UserPostingOut,
    status_code=status.HTTP_200_OK,
)
async def get_user_posting_by_sis_id_and_posting_id(
    user_id: int,
    posting_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserPostingOut:

    """
    Get Matched Postings by user_id and Posting Id
    """

    return await _get_user_posting(session, user_id, posting_id)

 
 @router.get("/users/{user_id}", response_model=UserOut, status_code=status.HTTP_200_OK)
async def get_user_by_sis_id(
    user_id: int,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserOut:

    """
    Get Matched User by user_id
    """

    return await _get_user(session, user_id)
 @router.get("/users", response_model=List[UserOut], status_code=status.HTTP_200_OK)
async def get_all_users(
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserOut]:

    """
    Get all Users
    """

    return await _get_all_users(session)

# POST API's
@router.post("/user", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def insert_user(
    user: UserIn,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> UserOut:

    """
    Create User if Not found
    """

    user_dict = user.dict()
    if "string" in user_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    user_dict["password"] = get_password_hash(user_dict["password"])

    try:

        user = UserModel(**user_dict)
        session.add(user)
        await session.flush()
        # await session.refresh(user)

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return user




