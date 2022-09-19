cd## Bearcat Resident Connect API

### Downloads

1. [Latest Version of Python](https://www.python.org/downloads/)
2. [Latest Version of Docker](https://docs.docker.com/get-docker/) # Optional

### Running FastAPI Api Server using UVICORN ASGI Server

#### `uvicorn api.main:app --host {HOST_IP} --port {PORT}`

### Checking API Documentation
#### *Swagger* is a set of open-source tools built around the *OpenAPI* Specification
http://{HOST_IP}:{PORT}/docs

# Pytest - API testing using FastAPI *testclient* backed by `requests` 

#### 1. Navigate to test folder cd !/BRC/api/test
#### 2. pytest
