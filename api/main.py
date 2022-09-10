from fastapi import FastAPI

app = FastAPI(
    title="The BRC Project",
    description="Bearcat Resident Connect",
    version="0.0.1",
    docs_url="/",
)


@app.get("/health-check")
async def health():
    """ Health Check API

    Returns:
        Dict: Info About the Server
    """
    return {
        "Status": "Healthy",
        "Info" : "Welcome to Bearcat Resident Connect"
    }