import pytest

from httpx import AsyncClient

from ..app.main import app
from fastapi.testclient import TestClient


client = TestClient(app)

@pytest.mark.asyncio
async def test_health_api():
   
    response = client.get("/health")
    assert response.status_code == 400
   
  

