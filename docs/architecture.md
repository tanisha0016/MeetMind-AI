# MeetMind Architecture

## Overview

MeetMind is an AI-powered meeting intelligence platform that enables users to upload meeting recordings, securely manage meetings, and generate AI-powered insights such as transcripts, summaries, and action items.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- Database: MongoDB Atlas
- Authentication: JWT
- File Uploads: Multer
- AI (Planned): Faster Whisper + Local LLM

## Architecture

Client
↓
Express API
↓
Authentication Middleware
↓
Meeting Services
↓
MongoDB Atlas

Audio Upload
↓
Uploads Folder
↓
AI Service (Planned)
↓
Transcript
↓
Summary & Action Items