from fastapi.testclient import TestClient

from ..main import app


client = TestClient(app)


def test_health_api():
    response = client.get("/health-check")
    # Add Your Test Conditions here