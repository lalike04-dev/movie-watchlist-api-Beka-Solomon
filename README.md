# Movie Watchlist API

A RESTful API for managing a personal movie watchlist, built with **Express.js**. This API allows users to perform CRUD operations on a movie collection, with filtering capabilities and API key authentication for protected routes.

---

## Description

The Movie Watchlist API provides a simple interface to manage your movie collection. It stores movie data in memory (with an initial dataset) and supports operations like retrieving movies (with optional filters by genre and watched status), adding new movies, updating existing ones, and deleting movies. The API includes request logging, input validation, and API key protection for write operations.

---

## Features

- **Get all movies** – Retrieve the full movie list.
- **Filter movies** – Filter by `genre` and/or `watched` status via query parameters.
- **Get a single movie** – Fetch a movie by its ID.
- **Add a new movie** – Create a new movie entry (requires API key).
- **Update a movie** – Modify an existing movie by ID (requires API key).
- **Delete a movie** – Remove a movie by ID (requires API key).
- **Request logging** – Logs every incoming request method and URL.
- **API key authentication** – Protects POST, PATCH, and DELETE endpoints.
- **Input validation** – Validates movie data for POST and PATCH requests.
- **JSON error handling** – Returns clear error messages for invalid JSON payloads.
- **404 handling** – Returns a friendly message for undefined routes.

---

## API Endpoints

All endpoints are prefixed with `/api/movies`.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/movies` | Get all movies (supports filtering) | No |
| GET | `/api/movies/:id` | Get a movie by ID | No |
| POST | `/api/movies` | Add a new movie | Yes (API key) |
| PATCH | `/api/movies/:id` | Update an existing movie | Yes (API key) |
| DELETE | `/api/movies/:id` | Delete a movie | Yes (API key) |

### Query Parameters (GET `/api/movies`)

| Parameter | Type | Description |
|-----------|------|-------------|
| `genre` | string | Filter movies by genre (e.g., `Action`, `Drama`) |
| `watched` | boolean | Filter by watched status (`true` or `false`) |

---

## Middleware Used

| Middleware | File | Purpose |
|------------|------|---------|
| `logger` | `middleware/request-logger.js` | Logs `method` and `url` for every request |
| `requrieapikey` | `middleware/requireApikey.js` | Validates `x-api-key` header; blocks requests without a valid key |
| `validatemovie` | `middleware/validatemovie.js` | Validates `name`, `genre`, `watched`, and `rating` fields for POST/PATCH requests |
| `notfound` | `middleware/notfound.js` | Handles 404 errors for undefined routes |
| JSON error handler | `server.js` | Catches invalid JSON syntax and returns a 400 error |

---

## Folder Structure

```
movie-watchlist-api/
├── src/
│   ├── data/
│   │   └── movies.js          # In-memory movie dataset
│   ├── middleware/
│   │   ├── notfound.js        # 404 handler
│   │   ├── request-logger.js  # Request logging
│   │   ├── requireApikey.js   # API key authentication
│   │   └── validatemovie.js   # Input validation
│   ├── routes/
│   │   └── movies.routes.js   # Movie route definitions
│   └── server.js              # Application entry point
├── package.json
├── package-lock.json
└── README.md
```

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lalike04-dev/movie-watchlist-api-Beka-Solomon.git
   cd movie-watchlist-api-Beka-Solomon
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   - **Development mode** (with auto-restart on changes):

     ```bash
     npm run dev
     ```

   - **Production mode**:

     ```bash
     npm start
     ```

4. The server will start on `http://localhost:3000`.

---

## Example Requests

### 1. Get all movies

```bash
curl http://localhost:3000/api/movies
```

### 2. Filter movies by genre

```bash
curl "http://localhost:3000/api/movies?genre=Action"
```

### 3. Filter movies by watched status

```bash
curl "http://localhost:3000/api/movies?watched=true"
```

### 4. Filter by both genre and watched status

```bash
curl "http://localhost:3000/api/movies?genre=Drama&watched=false"
```

### 5. Get a single movie by ID

```bash
curl http://localhost:3000/api/movies/1
```

### 6. Add a new movie (requires API key)

```bash
curl -X POST http://localhost:3000/api/movies \
  -H "Content-Type: application/json" \
  -H "x-api-key: movie-class-2026" \
  -d '{"id": 10, "name": "Inception", "genre": "Sci-Fi", "watched": true, "rating": 5}'
```

### 7. Update a movie (requires API key)

```bash
curl -X PATCH http://localhost:3000/api/movies/1 \
  -H "Content-Type: application/json" \
  -H "x-api-key: movie-class-2026" \
  -d '{"name": "The Dark Knight", "genre": "Action", "watched": true, "rating": 5}'
```

### 8. Delete a movie (requires API key)

```bash
curl -X DELETE http://localhost:3000/api/movies/1 \
  -H "x-api-key: movie-class-2026"
```

---

## API Key

The API key for protected endpoints is: **`movie-class-2026`**.

Include it in the `x-api-key` header for all `POST`, `PATCH`, and `DELETE` requests.

---

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **ES Modules** – Modern JavaScript module syntax

---

## Database Design

The Movie Watchlist API is designed to be easily extended with a persistent database. Below is the proposed database schema that reflects the current application's data model.

### Tables

| Table | Purpose |
|-------|---------|
| **movies** | Stores all movie entries in the watchlist |
| **users** | Manages user accounts for authentication and personal watchlists (future extension) |

### Movies Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique movie identifier |
| `name` | VARCHAR(255) | NOT NULL | Movie title |
| `genre` | VARCHAR(100) | NOT NULL | Movie genre (e.g., Action, Drama) |
| `watched` | BOOLEAN | DEFAULT FALSE | Whether the movie has been watched |
| `rating` | DECIMAL(3,1) | NULL | User rating (0.0–10.0) |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE | Last update timestamp |

### Users Table (Future Extension)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique user identifier |
| `username` | VARCHAR(100) | UNIQUE, NOT NULL | User's unique username |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | User's email address |
| `api_key` | VARCHAR(64) | UNIQUE, NOT NULL | API key for authenticated requests |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |

### Relationships

- **One-to-Many**: One user can have many movies in their watchlist (`users.id` → `movies.user_id`).
- **Many-to-Many**: Movies can be associated with multiple genres, and genres can belong to multiple movies (via a junction table `movie_genres`).

### Entity Relationship Diagram

```
┌─────────────┐          ┌─────────────┐
│    users    │          │   movies    │
├─────────────┤          ├─────────────┤
│ id (PK)     │◄─────────│ user_id (FK)│
│ username    │          │ id (PK)     │
│ email       │          │ name        │
│ api_key     │          │ genre       │
│ created_at  │          │ watched     │
└─────────────┘          │ rating      │
                         │ created_at  │
                         │ updated_at  │
                         └─────────────┘
                              │
                              │  (Many-to-Many)
                              ▼
                         ┌─────────────┐
                         │movie_genres │
                         ├─────────────┤
                         │ movie_id(FK)│
                         │ genre_id(FK)│
                         └─────────────┘
                              │
                              ▼
                         ┌─────────────┐
                         │   genres    │
                         ├─────────────┤
                         │ id (PK)     │
                         │ name        │
                         └─────────────┘
```

### Key Constraints

- **Primary Keys**: `id` in each table uniquely identifies each record.
- **Foreign Keys**: `movies.user_id` references `users.id`; `movie_genres.movie_id` references `movies.id`; `movie_genres.genre_id` references `genres.id`.
- **One-to-One**: Not applicable in the current schema.
- **One-to-Many**: A user can have multiple movies (if user authentication is added).
- **Many-to-Many**: Movies and genres (via `movie_genres` junction table).
