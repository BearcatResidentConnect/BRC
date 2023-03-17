import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"

@pytest.mark.asyncio
async def test_users_postings():
    response = requests.get(f"{BASE_URL}/api/addresses")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

# address id
@pytest.mark.asyncio
async def test_users_addres_id():
    address_id = 1
    response = requests.get(f"{BASE_URL}/api/addresses/{address_id}")
    assert response.status_code == 200
    assert response.status_code != 404
    assert isinstance(response.json(), dict)

@pytest.mark.asyncio
async def test_users_addres_id_neg():
    address_id = 2
    response = requests.get(f"{BASE_URL}/api/addresses/{address_id}")
   
    assert response.status_code != 404
    assert isinstance(response.json(), dict)
