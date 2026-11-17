# Task: Dockerfile & Image (`02-docker-file-image`)

This folder contains the implementation for containerizing a lightweight Python HTTP server using Docker.

## 📂 Files Included
* `app.py` - A simple Python HTTP server responding to GET requests.
* `Dockerfile` - Instructions to build the container image.

## 🚀 How to Build and Run
1. Open your terminal inside this folder.
2. Build the Docker image:
   ```bash
   docker build -t vct-docker-task:v1 .

   Run the container locally: docker run -p 5000:5000 vct-docker-task:v1

   Test in browser or curl: http://localhost:5000
