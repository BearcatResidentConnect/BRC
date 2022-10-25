import pytest

from httpx import AsyncClient

from ..app.main import app


@pytest.mark.asyncio
async def test_get_user_postings_by_sis_id():
    data = {
        "user_id":"userId",
         
    }
    
    async with AsyncClient(app=app, base_url="/user-postings/{user_id}") as ac:
        response = await ac.post("/api/users/user_postings", json=data)

    assert response.status_code == 200
    assert response.json() == {"user_id":"userId"}