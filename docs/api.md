# API Documentation

## Authentication

POST /api/auth/register
- Register a new user

POST /api/auth/login
- Authenticate user and return JWT

---

## Meetings

POST /api/meetings
- Create a meeting

GET /api/meetings
- Fetch all meetings for authenticated user

GET /api/meetings/:id
- Fetch a single meeting

PATCH /api/meetings/:id
- Update meeting details

DELETE /api/meetings/:id
- Delete a meeting

POST /api/meetings/upload
- Upload meeting audio (Authenticated)