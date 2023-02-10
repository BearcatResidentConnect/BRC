
import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"

#headers= {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYW5pIiwiZXhwIjoxNjc1NDQzNjMzfQ.vyFeEHhxI1JAqAK_xVat-cFRFxBG_Ge2YlX_aAur4IQ"}

@pytest.mark.asyncio
async def test_users():
    #headers = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYW5pIiwiZXhwIjoxNjc1NDQzNjMzfQ.vyFeEHhxI1JAqAK_xVat-cFRFxBG_Ge2YlX_aAur4IQ"}
    #response = requests.get(f"{BASE_URL}/api/users", headers = headers)
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
<<<<<<< Updated upstream
async def test_users404_neg():
    response = requests.get(f"{BASE_URL}/api/user")
=======
async def test_users_with_user_neg():
    user_name = "Ravi"
    response = requests.get(f"{BASE_URL}/api/users/{user_name}")
>>>>>>> Stashed changes
    assert response.status_code == 404