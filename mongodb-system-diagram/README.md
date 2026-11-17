# 1. Navigate to the folder or create file directly via PowerShell
@"
# Task: MongoDB Database Design & System Diagram (`03-mongodb-system-diagram`)

This folder contains the system architecture, schema design, and data modeling strategy for MongoDB collections used across the backend infrastructure.

---

## 📐 System Architecture & Database Schema Design

### 1. Core Collections Overview
* **`Users` Collection:** Stores user authentication credentials, profiles, roles, and timestamps.
* **`Tasks` / `Resources` Collection:** Tracks infrastructure tasks, deployment logs, and resource states.
* **`Logs` Collection:** Records real-time system events, audit trails, and timestamps (optimized with TTL indexes).

---

## 🗄️ MongoDB Document Schema Models (JSON / BSON Structure)

### `Users` Schema
```json
{
  "_id": "ObjectId('65a1b2c3d4e5f6a7b8c9d0e1')",
  "username": "Pranav Sharma",
  "email": "ps9654175@gmail.com",
  "role": "Admin",
  "created_at": "2026-11-17T18:00:00Z"
}