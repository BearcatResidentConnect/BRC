import pytest

from httpx import AsyncClient

from ..app.main import app
from fastapi.testclient import TestClient


client = TestClient(app)

@pytest.mark.asyncio
async def test_get_all_users():
        response = client.get("/api/users/1")
        assert response.status_code == 200
        assert response.json() == {"user_name":"michael","first_name":"manikanta",
        "last_name":"gaddameda","email":"manikanta1@gmail.com"}

@pytest.mark.asyncio
async def test_get_all_users():
        response = client.get("/api/users/")
        assert response.status_code == 200
        
        
    
    
    

   