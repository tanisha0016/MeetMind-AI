# MeetMind Architecture

## Overview

MeetMind is an AI-powered meeting intelligence platform that enables users to upload meeting recordings, securely manage meetings, and generate AI-powered insights such as transcripts, summaries, and action items.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + TypeScript
- Database: MongoDB Atlas
- Authentication: JWT
- File Uploads: Multer
- AI Processing: Speech-to-Text + LLM-based summarization

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
AI Service
↓
Transcript Generation
↓
Summary + Key Decisions + Action Items
