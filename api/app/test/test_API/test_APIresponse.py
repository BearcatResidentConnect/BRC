import requests

def test_home_page():
    response = requests.get("http://3.224.253.213:5000/docs#/")
    assert response.status_code == 200

def test_successful_login():
    payload = {"username": "mani", "password": "mani1234"}
    response = requests.post("http://3.224.253.213:4200/auth/login", json=payload)
    assert response.status_code == 200
    assert "access_token" in response.json()
