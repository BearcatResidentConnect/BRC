cd## Bearcat Resident Connect API

### Downloads

1. [Latest Version of Python](https://www.python.org/downloads/)
2. [Latest Version of Docker](https://docs.docker.com/get-docker/) # Optional

### Running FastAPI Api Server using UVICORN ASGI Server

uvicorn api.main:app --host {HOST_IP} --port {py -m pip --versionPORT}

### Checking API Documentation
#### *Swagger* is a set of open-source tools built around the *OpenAPI* Specification
http://{HOST_IP}:{PORT}/docs

# Pytest - API testing with Python `requests`

#### Pytest is a mature full-featured Python testing frame that helps you write and run tests in Python.

#### The `requests` module allows you to send HTTP requests using Python.

## Getting started

* To download and install `pytest`, run this command from the terminal : `pip install pytest`
* To download and install `requests`, run this command from the terminal : `pip install requests`

To ensure all dependencies are resolved in a CI environment, in one go, add them to a `requirements.txt` file.
* Then run the following command : `pip install -r requirements.txt`

By default pytest only identifies the file names starting with `test_` or ending with `_test` as the test files.
