# learning_angular

services:

  frontend:
    build: ./frontend
    ports:
      - "4200:4200"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    stdin_open: true
    tty: true

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    volumes:
      - ./backend:/app

  database:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:






  Do NOT jump immediately into:

Kubernetes
Microservices
Cloud orchestration

First master:

Angular container ✅
Compose basics ✅
Spring Boot container
PostgreSQL container
API communication
Environment variables