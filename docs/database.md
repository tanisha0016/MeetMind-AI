# Database Design

## Users

- _id
- name
- email
- password
- createdAt
- updatedAt

---

## Meetings

- _id
- owner
- title
- description
- audioUrl
- transcript (planned)
- summary (planned)
- actionItems (planned)
- status
- createdAt
- updatedAt

Relationship:
One User → Many Meetings