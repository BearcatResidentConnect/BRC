
import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"



@pytest.mark.asyncio
async def test_user_signup():
    data =  [
    {
        "sid": "S12345",
        "user_name": "ravi123",
        "password": "string",
        "created": "2023-02-05T17:08:45.544Z",
        "updated": "2023-02-05T17:08:45.544Z",
        "first_name": "ravi",
        "last_name": "koppa",
        "email": "string",
        "active": True,
        "avatar": "ABCDEFGHIJKLMNOPQRSTUVWXY",
        "admin": False
    }
    ]
    response = requests.post(f"{BASE_URL}/api/users", json=data)
    assert response.status_code == 201

@pytest.mark.asyncio
async def test_user_signup_neg_missing_field():
    data =  [
    {
        "sid": "S12345",
        "password": "string",
        "created": "2023-02-05T17:08:45.544Z",
        "updated": "2023-02-05T17:08:45.544Z",
        "first_name": "ravi",
        "last_name": "koppa",
        "email": "string",
        "active": True,
        "avatar": "ABCDEFGHIJKLMNOPQRSTUVWXY",
        "admin": False
    }
    ]
    response = requests.post(f"{BASE_URL}/api/users", json=data)
    assert response.status_code == 422

@pytest.mark.asyncio
async def test_user_signup_neg_data_missing():
    data =  [
    {
        
    }
    ]
    response = requests.post(f"{BASE_URL}/api/users", json=data)
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_user_signup_mis_neg2():
    data = ""
    response = requests.post(f"{BASE_URL}/api/users", json=data)
    assert response.status_code == 422
