from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.analyze import router as analyze_router

app = FastAPI(
    title="TruthArchive API"
)

# =====================================
# CORS
# =====================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# =====================================
# ROUTES
# =====================================

app.include_router(
    analyze_router
)


@app.get("/")
async def root():

    return {

        "message":
        "TruthArchive Backend Running"
    }