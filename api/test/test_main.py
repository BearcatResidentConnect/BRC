from fastapi.testclient import TestClient

from ..main import app


client = TestClient(app)


def test_health_api():
    response = client.get("/health-check")
    
    assert response.status_code == 200
    assert response.json() == {"Status": "Healthy",
        "Info" : "Welcome to Bearcat Resident Connect"}