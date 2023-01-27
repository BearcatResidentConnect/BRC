
from fastapi.testclient import TestClient

from ..main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Running 😊",
    }
    
def test_read_main1():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {
        "message": "Go Bearcats!! Welcome to Bearcat Resident Connect",
        "Status": "Server Runnin",
    }
