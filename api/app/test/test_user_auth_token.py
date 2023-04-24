import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"
# Need to work on this file

 

#access the token by giving correct inputs
@pytest.mark.asyncio
async def test_user_auth_token():
    data = {
  "user_name": "mani",
  "password": "mani@123"
}
    response = requests.post(f"{BASE_URL}/api/users/auth/token", json=data)
    assert response.status_code == 200



#access the token by wrong inputs
@pytest.mark.asyncio
async def test_user_auth_token_wrong_data():
    data = {
  "user_name": "m",
  "password": "mani@12"
}
    response = requests.post(f"{BASE_URL}/api/users/auth/token", json=data)
    assert response.status_code == 422
    assert isinstance(response.json(), dict)

