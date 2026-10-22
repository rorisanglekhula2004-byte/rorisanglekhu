# User Manager: React + Express + MongoDB

A small full-stack app to create, list, and delete users.

```
fullstack-app/
├── client/   # React frontend (Vite, Axios)
└── server/   # Express backend (Mongoose)
```

## Prerequisites

- Node.js 18+
- MongoDB running locally (`mongod`) or a MongoDB Atlas connection string

## Setup and run

### 1. Backend

```bash
cd server
npm install
# edit .env if needed (PORT, MONGO_URI)
npm start
```

Runs on http://localhost:5000.

### 2. Frontend

```bash
cd client
npm install
npm start
```

Open http://localhost:3000.

## API

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/api/users`      | List all users |
| POST   | `/api/users`      | Create a user (`{ name, email }`) |
| DELETE | `/api/users/:id`  | Delete a user  |
| GET    | `/api/health`     | Health check   |

## Configuration

- `server/.env`: `PORT`, `MONGO_URI` (use an Atlas URI for a cloud database)
- `client/.env` (optional): `VITE_API_URL` if the backend is not on `http://localhost:5000/api`

## Notes

The client uses Vite instead of Create React App, which is no longer maintained.
The code is otherwise the same React components from the guide.
