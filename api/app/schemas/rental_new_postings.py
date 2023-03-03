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


@router.post(
    "/users", response_model=List[UserOut], status_code=status.HTTP_201_CREATED
)
async def insert_users(
    users: List[UserIn],
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user),
) -> List[UserOut]:

    """
    Insert List of Users at a Time.
    """

    try:

        users = [
            UserModel(**user.dict())
            for user in users
            if "string" not in user.dict().values()
        ]
        # session.bulk_save_objects(users)
        session.add_all(users)
        await session.flush()

    except SQLAlchemyError as exc:

        logger.error("Exception happend %s ", exc)
        raise HTTPException(400, "Invalid Data Provided")

    return users

@router.put("/user", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def update_user(
    user: UserUpdate,
    session: Session = Depends(get_db_session),
    super_user_in: SuperUserIn = Depends(get_current_active_user)
    # user: UserUpdate = Body(embed=True), session: Session = Depends(get_db_session)
) -> UserOut:

    """
    Update User data for given body parameters based on user_id \

        *** Only Include Modifiable Parameters ***
    """

    user_dict = user.dict()

    if "string" in user_dict.values():
        raise HTTPException(400, "Invalid Data Provided")

    # Fetch User => Update
    user = await _get_user(session, user_dict["user_id"])

    logger.debug("Fetched User ")
    for k, v in user_dict.items():
        if k == "user_id":
            continue
        if v:
            setattr(user, k, v)

    return user




