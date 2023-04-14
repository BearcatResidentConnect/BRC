import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"

#post api with correct inputs
@pytest.mark.asyncio
async def test_user_postings_post():
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

#post api with missing field
@pytest.mark.asyncio
async def test_user_postings_post_neg_missing():
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

#to get all the user postings
@pytest.mark.asyncio
async def test_users_postings():
    response = requests.get(f"{BASE_URL}/api/user-postings")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

#wrong api(url) response 
@pytest.mark.asyncio
async def test_users_postings_neg():
    response = requests.get(f"{BASE_URL}/api/user-posting")
    assert response.status_code == 405

#get the user postings by user_name
@pytest.mark.asyncio
async def test_users_postings():
    user_name = "mani"
    response = requests.get(f"{BASE_URL}/api/user-postings/{user_name}")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

#here checking the response type and correct id
@pytest.mark.asyncio
async def test_users_postings_posting_id():
    posting_id = 1
    response = requests.get(f"{BASE_URL}/api/user-posting/postings/{posting_id}")
    assert response.status_code == 200
    assert isinstance(response.json(), dict)

#giving posting_id which is not in db 
@pytest.mark.asyncio
async def test_users_postings_posting_id():
    posting_id = 2
    response = requests.get(f"{BASE_URL}/api/user-posting/postings/{posting_id}")
    assert response.status_code == 404
    assert isinstance(response.json(), dict)