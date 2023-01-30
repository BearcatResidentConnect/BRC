# import pytest

# from httpx import AsyncClient

# from ..app.main import app


# @pytest.mark.asyncio
# async def test_get_user_posting_by_posting_id():
#     data = {
        
#         "posting_id": "posting id" 
#     }
    
#     async with AsyncClient(app=app, base_url="/user-posting/postings/{posting_id}") as ac:
#         response = await ac.post("/api/user-posting/postings/", json=data)

#     assert response.status_code == 200
#     assert response.json() == {"posting_id":"postingId"}

import pytest

from httpx import AsyncClient

from ..app.main import app


@pytest.mark.asyncio
async def test_get_user_posting_by_posting_id():
    data = {
        
        "posting_id": "posting id" 
    }
    
    async with AsyncClient(app=app, base_url="//postings/{posting_id}") as ac:
        response = await ac.post("/api/user-posting/postings/", json=data)

    assert response.status_code == 200
   
