import pytest

from httpx import AsyncClient

from ..app.main import app



# client = TestClient(app)

@pytest.mark.asyncio
async def test_health_api():
    #response = client.get("/server-status")
    
    async with AsyncClient(app=app, base_url="http://server-status") as ac:
        response = await ac.get("/server-status")

    assert response.status_code == 200
    assert response.json() == {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Running 😊",
    }
