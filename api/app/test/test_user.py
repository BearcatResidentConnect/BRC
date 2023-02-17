
import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"


@pytest.mark.asyncio
async def test_users():
   
    response = requests.get(f"{BASE_URL}/api/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
 

@pytest.mark.asyncio
async def test_users404():
    response = requests.get(f"{BASE_URL}/api/users")
    assert response.status_code != 404

@pytest.mark.asyncio
async def test_users401():
    response = requests.get(f"{BASE_URL}/api/users")
    assert response.status_code != 401

@pytest.mark.asyncio
async def test_users_with_user():
    user_name = "mani"
    response = requests.get(f"{BASE_URL}/api/users/{user_name}")
    assert response.status_code == 200

@pytest.mark.asyncio
async def test_users405_neg():
    response = requests.get(f"{BASE_URL}/api/user")
    assert response.status_code == 405