
# Cloud Infrastructure & Backend DevOps Tasks (VCT Training)

This repository contains a comprehensive, production-grade collection of practical cloud computing, DevOps infrastructure, containerization, caching, API rate-limiting, and orchestration tasks implemented as part of the VCT training curriculum.

---

## 📂 Repository Architecture & Directory Structure

```text
cloud-infrastructure-tasks/
│
├── 01-ec2-deployment/             # AWS EC2 instance provisioning & Nginx reverse proxy config
├── 02-docker-file-image/          # Containerized Python HTTP server & multi-stage Dockerfile
├── 03-mongodb-system-diagram/     # NoSQL database schema design & system architecture workflows
├── 06-redis-server-timestamp/     # FastAPI backend application integrated with Redis caching
├── 07-api-rate-limiting/          # Request throttling, security middleware, and traffic control
└── 08-kubernetes-pod-task/        # Kubernetes Pod manifests and container orchestration


🛠️ Detailed Task Breakdown & Implementation Guide
1. EC2 Deployment (01-ec2-deployment/)
Objective: Provisioning, securing, and configuring an AWS EC2 Ubuntu cloud instance.

Key Configuration Steps:

Configured security groups with strict inbound rules (Port 22 for SSH, Port 80 for HTTP).

Deployed and configured Nginx as a high-performance reverse proxy to route public incoming traffic to internal backend application ports.



2. Dockerfile & Image (02-docker-file-image/)
Objective: Containerizing a lightweight Python-based HTTP server application.

Core Files: app.py, Dockerfile

Execution & Verification:

Bash
docker build -t vct-docker-task:v1 .
docker run -d -p 5000:5000 --name docker-container vct-docker-task:v1


3. MongoDB System Design Diagram (03-mongodb-system-diagram/)
Objective: Architecting scalable NoSQL document data models and system workflows.

Details: Outlines collection schemas, data normalization rules, referencing vs embedding strategies, and indexing pipelines for optimal CRUD operations.


4. Redis Server Timestamp (06-redis-server-timestamp/)
Objective: Implementing high-speed real-time access tracking using an in-memory data store.

Core Files: app.py, requirements.txt

Tech Stack: FastAPI, Redis, Uvicorn

Execution & Verification:

Bash
pip install -r requirements.txt
uvicorn app:app --reload


5. API Rate Limiting (07-api-rate-limiting/)
Objective: Securing backend endpoints against brute-force attacks, web scraping, and DDoS traffic.

Implementation: Custom middleware tracking request frequency per client IP address using sliding windows or TTL-based memory counters.


6. Kubernetes Pod Task (08-kubernetes-pod-task/)
Objective: Managing containerized workloads and cluster orchestration through Kubernetes manifests.

Core Files: pod.yaml, deployment.yaml

Execution & Verification:

Bash
kubectl apply -f pod.yaml
kubectl get pods



⚙️ Author & Submission DetailsAuthor: Pranav Sharma   Program: B.Tech Computer Science (AI & ML)   Institution: Career Point University, Kota[cite: 1]Repository Link: cloud-infrastructure-tasks
