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



        




