import pytest

from httpx import AsyncClient

from ..app.main import app


@pytest.mark.asyncio
async def test_():
    data = {
        "user_id":"userId",
        "posting_id": "posting id" 
    }
    
    async with AsyncClient(app=app, base_url="/user-posting/{user_id}/postings/{posting_id}") as ac:
        response = await ac.post("/api/users/user-postings", json=data)

    assert response.status_code == 200
    assert response.json() == {"user_id":"userId","posting_id":"postingId"}
