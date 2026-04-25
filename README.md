# 🕒 Wizdaa - Time Off Microservice

A lightweight **Time Off management API** built with **Node.js + Express**, containerized with **Docker**.

The system simulates employee leave management, including balance synchronization, request creation, approval, and rejection.

---

 Purpose

This project demonstrates:

- REST API development
- Backend architecture with separation of concerns
- Business logic implementation
- Dockerized environment
- Simple microservice design

---

 Architecture

The project follows a simple layered structure:

```text
server.js   → application entry point
app.js      → Express configuration
routes/     → API routes
controllers → business logic

HCM sync → balance stored → request created → validated → approved/rejected

Tech Stack
Node.js 22
Express.js
Docker
Docker Compose

How to Run
Using Docker (recommended)
docker-compose up --build

http://localhost:3000

Stop :
CTRL + C
docker-compose down

API Endpoints
HTTP

POST /hcm/sync
POST /timeoff/request
POST /timeoff/:id/approve
POST /timeoff/:id/reject


Quick test

curl -X POST http://localhost:3000/hcm/sync
curl -X POST http://localhost:3000/timeoff/request
curl -X POST http://localhost:3000/timeoff/1/approve

Author

Obenson Maurice
Backend Developer Candidate
