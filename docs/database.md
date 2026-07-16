# Database Design

MeetMind uses MongoDB Atlas for storing user information and meeting data.

---

# Users Collection

Stores registered user accounts.

Fields:

- _id
- name
- email
- password (hashed using bcrypt)
- createdAt
- updatedAt


---

# Meetings Collection

Stores uploaded meetings and AI-generated insights.

Fields:

- _id
- owner
- title
- description
- audioUrl
- transcript
- summary
- keyDecisions
- actionItems
- status
- createdAt
- updatedAt


## Meeting Status

Possible values:

- processing
- completed
- failed


## AI Generated Data

After audio processing, the meeting document is updated with:

### Transcript

Complete speech-to-text output generated from the uploaded audio.

### Summary

AI-generated overview of the meeting discussion.

### Key Decisions

Important decisions extracted from the meeting.

Example:

```json
[
  {
    "task": "Complete backend APIs",
    "owner": "Nisha"
  }
]