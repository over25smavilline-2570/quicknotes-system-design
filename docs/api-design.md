# QuickNotes API Design

## Overview
The QuickNotes API provides endpoints for client applications to manage user notes. It uses RESTful principles and exchanges data in JSON format.

## Endpoints

### 1. Get Notes Feed
- **Endpoint:** `GET /api/notes`
- **Description:** Retrieves a paginated list of notes.
- **Query Parameters:**
  - `limit` (optional): Number of notes to return (default: 10, max: 50).
  - `offset` (optional): Pagination offset (default: 0).
- **Response Status:** `200 OK`
- **Response Body:**
  ```json
  [
    {
      "id": "note_12345",
      "user_id": "usr_98765",
      "title": "Project Meeting",
      "body": "Discuss architecture and system design requirements.",
      "created_at": "2026-10-27T00:00:00Z"
    }
  ]