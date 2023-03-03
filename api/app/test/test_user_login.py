import requests
import pytest
import asyncio

BASE_URL = "http://localhost:5000"


def test_user_post():
    # data = {"name": "Item 1", "description": "Description for item 1"}
    # response = requests.post(f"{BASE_URL}/items", json=data)
    response = requests.post(f"{BASE_URL}/api/users")
    assert response.status_code == 422

def test_login_user():
    data = {
  "user_name": "mani",
  "password": "mani@123"
}
    response = requests.post(f"{BASE_URL}/api/users/auth", json=data)

    assert response.status_code == 200
    assert response.json()["username"] == "mani"
    assert isinstance(response.json(),dict)  

def test_login_response_neg():
    data = {
  "user_name": "mani",
  "password": "mani@123"
}
    response = requests.post(f"{BASE_URL}/api/users/auth", json=data)

    assert response.status_code == 200
    assert response.json()["username"] == "mani"
    assert isinstance(response.json(),dict) 

def test_user_response_put():
    data = {
  "user_name": "mani",
  "password": "mani@123"
}
    response = requests.put(f"{BASE_URL}/api/user", json=data)

    assert response.status_code == 201
    assert response.status_code != 404
    
    assert isinstance(response.json(),dict)

def test_login_response_neg_neg():
    data = {
  "user_name": "mani123",
  "password": "mani@123"
}
    response = requests.post(f"{BASE_URL}/api/users/auth", json=data)

    assert response.status_code == 404 


 
