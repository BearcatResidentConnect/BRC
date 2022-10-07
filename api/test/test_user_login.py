import pytest

from httpx import AsyncClient

from ..app.main import app


@pytest.mark.asyncio
async def test_login():
    data = {
        "user_name": "test",
        "password": "test@123"
    }
    
    async with AsyncClient(app=app, base_url="http://login") as ac:
        response = await ac.post("/api/users/auth", json=data)

    assert response.status_code == 200
    assert response.json() == {"username":"test"}
    
