

import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"

@pytest.mark.asyncio
async def test_health():
    response = requests.get(f"{BASE_URL}/health")
    assert response.status_code == 200
    assert response.json() ==  {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Running 😊"
        }
@pytest.mark.asyncio
async def test_health_neg():
    response = requests.get(f"{BASE_URL}/health")
    assert response.status_code != 404
    assert response.json() ==  {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Running 😊"
        }

# @pytest.mark.asyncio
# async def test_users404():
#     response = requests.get(f"{BASE_URL}/api/users")
#     assert response.status_code != 404
