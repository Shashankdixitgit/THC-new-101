from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'thc_database')]

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ── Models ──────────────────────────────────────────────

class PartnerInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    organisation: str
    email: str
    interest: str
    message: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class PartnerInquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    organisation: str = Field(..., min_length=1, max_length=200)
    email: str = Field(..., min_length=3, max_length=200)
    interest: str = Field(..., min_length=1, max_length=200)
    message: str = Field(default="", max_length=2000)

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

class Event(BaseModel):
    id: str
    title: str
    format: str
    date: str
    location: str
    city: str
    audience: str
    description: str
    is_upcoming: bool = True

class NewsletterSubscribe(BaseModel):
    email: str = Field(..., min_length=3, max_length=200)

# ── Seeded Events Data ──────────────────────────────────

SEEDED_EVENTS = [
    {
        "id": str(uuid.uuid4()),
        "title": "HealthTech Innovation Summit 2025",
        "format": "Events & Meetups",
        "date": "August 2025",
        "location": "Bengaluru",
        "city": "Bengaluru",
        "audience": "Founders, Clinicians, Investors",
        "description": "A flagship gathering bringing together 200+ healthtech stakeholders for a day of demos, panels, and networking.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Clinical Feedback Sprint: Diagnostics",
        "format": "Clinical Feedback Sessions",
        "date": "September 2025",
        "location": "Mumbai",
        "city": "Mumbai",
        "audience": "Founders, Clinicians",
        "description": "Structured feedback sessions where 5 diagnostic startups present to practicing oncologists and pathologists.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Hospital Innovation Roundtable",
        "format": "Closed-Door Roundtables",
        "date": "September 2025",
        "location": "Delhi / NCR",
        "city": "Delhi / NCR",
        "audience": "Operators, Pharma",
        "description": "An intimate session with hospital CXOs exploring digital health adoption barriers and integration strategies.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "ASCENT Demo Day — Cohort 3",
        "format": "Demo Days & Showcases",
        "date": "October 2025",
        "location": "Bengaluru",
        "city": "Bengaluru",
        "audience": "Investors, Founders",
        "description": "8 ASCENT cohort founders showcase their validated solutions to a curated investor and enterprise audience.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Women in HealthTech Meetup",
        "format": "Events & Meetups",
        "date": "July 2025",
        "location": "Hyderabad",
        "city": "Hyderabad",
        "audience": "All Stakeholders",
        "description": "A community-driven meetup celebrating women leaders driving healthcare innovation across India.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "MedTech Buildathon",
        "format": "Bootcamps & Buildathons",
        "date": "November 2025",
        "location": "Chennai",
        "city": "Chennai",
        "audience": "Founders, Clinicians",
        "description": "A 48-hour intensive buildathon focused on maternal health challenges, bringing engineers and clinicians together.",
        "is_upcoming": True
    },
    {
        "id": str(uuid.uuid4()),
        "title": "THC Bengaluru Kickoff",
        "format": "Events & Meetups",
        "date": "January 2025",
        "location": "Bengaluru",
        "city": "Bengaluru",
        "audience": "All Stakeholders",
        "description": "The first THC community meetup of 2025, setting the agenda for the year ahead.",
        "is_upcoming": False
    },
    {
        "id": str(uuid.uuid4()),
        "title": "Pharma-Startup Roundtable",
        "format": "Closed-Door Roundtables",
        "date": "March 2025",
        "location": "Mumbai",
        "city": "Mumbai",
        "audience": "Pharma, Founders",
        "description": "A closed-door session exploring collaboration models between pharma companies and healthtech startups.",
        "is_upcoming": False
    },
    {
        "id": str(uuid.uuid4()),
        "title": "ASCENT Demo Day — Cohort 2",
        "format": "Demo Days & Showcases",
        "date": "April 2025",
        "location": "Bengaluru",
        "city": "Bengaluru",
        "audience": "Investors, Founders",
        "description": "6 founders from ASCENT Cohort 2 presented validated solutions to 30+ investors and enterprise buyers.",
        "is_upcoming": False
    },
]

# ── Routes ──────────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "The Healthtech Collective API"}

@api_router.get("/events", response_model=List[Event])
async def get_events(upcoming: Optional[bool] = None):
    events = SEEDED_EVENTS
    if upcoming is not None:
        events = [e for e in events if e["is_upcoming"] == upcoming]
    return events

@api_router.post("/partner-inquiry", response_model=PartnerInquiry)
async def create_partner_inquiry(data: PartnerInquiryCreate):
    inquiry = PartnerInquiry(**data.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.partner_inquiries.insert_one(doc)
    return inquiry

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(data: ContactMessageCreate):
    msg = ContactMessage(**data.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg

@api_router.post("/newsletter")
async def subscribe_newsletter(data: NewsletterSubscribe):
    doc = {
        "id": str(uuid.uuid4()),
        "email": data.email,
        "subscribed_at": datetime.now(timezone.utc).isoformat()
    }
    await db.newsletter_subscribers.insert_one(doc)
    return {"message": "Successfully subscribed!", "email": data.email}

# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
