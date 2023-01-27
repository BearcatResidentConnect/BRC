
from fastapi.testclient import TestClient

from ..main import app

client = TestClient(app)

def test_all_users():
    response = client.get("/api/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list) 
    

