
# Cloud Infrastructure & Backend DevOps Tasks (VCT Training)

This repository contains a comprehensive collection of practical cloud computing, DevOps, containerization, caching, rate-limiting, and orchestration tasks implemented as part of the VCT training curriculum.

---

## 📂 Repository Architecture & Directory Structure

cloud-infrastructure-tasks/
├── 01-ec2-deployment/             # AWS EC2 & Nginx reverse proxy setup
├── 02-docker-file-image/          # Containerized Python HTTP server & Dockerfile
├── 03-mongodb-system-diagram/     # NoSQL database schema & system architecture design
├── 06-redis-server-timestamp/     # FastAPI application integrated with Redis caching
├── 07-api-rate-limiting/          # Request throttling and security middleware
└── 08-kubernetes-pod-task/        # Kubernetes Pod & deployment manifests

---

## 🛠️ Detailed Task Breakdown & Implementation Guide

### 1. EC2 Deployment (01-ec2-deployment/)
* **Objective:** Provisioning and configuring an AWS EC2 Ubuntu instance.
* **Key Steps:** 
  * Configured inbound security groups (Ports 22 for SSH, 80 for HTTP).
  * Set up Nginx as a reverse proxy to route external traffic to internal application ports.

### 2. Dockerfile & Image (02-docker-file-image/)
* **Objective:** Containerizing a lightweight Python HTTP service.
* **Files:** app.py, Dockerfile
* **Execution:**

3. MongoDB System Design Diagram (03-mongodb-system-diagram/)
Objective: Designing scalable NoSQL document schemas and system architecture workflows.


4. Redis Server Timestamp (06-redis-server-timestamp/)
Objective: Real-time access tracking using an in-memory data store.

Tech Stack: FastAPI, Redis, Uvicorn

5. API Rate Limiting (07-api-rate-limiting/)
Objective: Protecting backend APIs from abuse, scraping, and brute-force attacks.

6. Kubernetes Pod Task (08-kubernetes-pod-task/)
Objective: Container orchestration and deployment management using Kubernetes.

Author: Pranav Sharma

Program: B.Tech Computer Science (AI & ML)
"@ | Out-File -Encoding utf8 README.md


  ```bash
  docker build -t vct-docker-task:v1 .
  docker run -d -p 5000:5000 --name docker-container vct-docker-task:v1
