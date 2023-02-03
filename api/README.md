# Bearcat Resident Connect(BRC) API

## Required Dependencies

1. [Latest Version of Python](https://www.python.org/downloads/)
2. [Latest Version of Docker](https://docs.docker.com/get-docker/) # Optional

After downloading and setting up your Python environment run below commands to set your virtual environment.

1. *`python -m venv {your_venv_name}`* # Creates Virtual Python Environment
2. *`./{your_venv_name}/Scripts/activate`*  # Activating Virtual environment in Windows
3. *`source ./{your_venv_name}/bin/activate`* # Activating Virtual environment in Linux or MAC
4. *`python -m pip install -r ~/BRC/api/requirements.txt`* # To install all Python dependencies for the project

## Setting Up your local Database Environment

### DB creation
1. drop database <db_name>; # if you have already or skip this step
2. create database <db_name>;
3. DATABASE_URL = "mysql+aiomysql://root:1234@localhost/<db_name>"  add your db path in .env
4. delete files from ~BRC/api/app/migrations/versions
### python db migration manager commands
5. alembic upgrade head             
6. alembic revision --autogenerate
7. alembic upgrade head

## Running `FastAPI`'s API Server using `Uvicorn` *ASGI* Server

- _cd ~/api_
- *`uvicorn app.main:app --host {HOST_IP} --port {PORT}`*

## Checking API Documentation
#### *Swagger* is a set of open-source tools built around the *OpenAPI* Specification
- *`http://{HOST_IP}:{PORT}/docs`*

## Pytest - API testing using FastAPI *testclient* backed by `requests` 

Navigate to test folder `cd ~/BRC/api/test` and run below command
- *`pytest`*
