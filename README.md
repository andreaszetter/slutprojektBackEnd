# Slutprojekt BackEnd

A simple note-taking REST API built with Node.js, Express, and PostgreSQL.

## Features
- User authentication (JWT)
- Create, read, update, search, delete notes
- Notes have UUID string IDs
- Swagger API documentation at `/api-docs`

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/<your-username>/slutprojektBackEnd.git
   cd slutprojektBackEnd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your PostgreSQL database and run `db_init.sql` to create tables.
4. Create a `.env` file with your environment variables (e.g., `PORT`, `DATABASE_URL`, `JWT_SECRET`).
5. Start the server:
   ```sh
   npm start
   ```
6. Access Swagger docs at [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## API Endpoints
- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - Login and receive a JWT
- `GET /api/notes` - Get all notes for the logged-in user
- `POST /api/notes` - Create a new note
- `PUT /api/notes` - Update a note
- `DELETE /api/notes` - Delete a note
- `GET /api/notes/search?q=...` - Search notes by title

## License
MIT 
