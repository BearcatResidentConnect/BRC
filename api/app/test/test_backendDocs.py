

import requests
import pytest
import asyncio

BASE_URL = "http://3.224.253.213:5000/docs#/"

@pytest.mark.asyncio
async def test_health():
    response = requests.get(f"{BASE_URL}")
    assert response.status_code == 200
   