import requests

def test_home_page():
    response = requests.get("http://3.224.253.213:5000/docs#/")
    assert response.status_code == 200

def test_successful_login():
    payload = {"username": "mani", "password": "mani1234"}
    response = requests.post("http://3.224.253.213:4200/auth/login", json=payload)
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_failed_login():
    payload = {"username": "testuser", "password": "wrongpassword"}
    response = requests.post("https://example.com/api/login", json=payload)
    assert response.status_code == 401
    assert "detail" in response.json()
    
def test_authenticated_endpoint():
    access_token = "your_access_token_here"
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get("https://example.com/api/endpoint", headers=headers)
    assert response.status_code == 200
    assert "data" in response.json()



