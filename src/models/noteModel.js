import pool from './db.js';
import { v4 as uuidv4 } from 'uuid';

async function createNote(userId, title, text) {
  const id = uuidv4();
  const result = await pool.query(
    'INSERT INTO notes (id, user_id, title, text, created_at, modified_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
    [id, userId, title, text]
  );
  return result.rows[0];
}

async function getNotesByUser(userId) {
  const result = await pool.query(
    'SELECT * FROM notes WHERE user_id = $1 ORDER BY created_at DESC',
    [userId]
  );
  return result.rows;
}

async function updateNote(noteId, userId, title, text) {
  const result = await pool.query(
    'UPDATE notes SET title = $1, text = $2, modified_at = NOW() WHERE id = $3 AND user_id = $4 RETURNING *',
    [title, text, noteId, userId]
  );
  return result.rows[0];
}

async function deleteNote(noteId, userId) {
  const result = await pool.query(
    'DELETE FROM notes WHERE id = $1 AND user_id = $2 RETURNING *',
    [noteId, userId]
  );
  return result.rows[0];
}

async function searchNotesByTitle(userId, search) {
  const result = await pool.query(
    `SELECT * FROM notes WHERE user_id = $1 AND title ILIKE $2 ORDER BY created_at DESC`,
    [userId, `%${search}%`]
  );
  return result.rows;
}

export default {
  createNote,
  getNotesByUser,
  updateNote,
  deleteNote,
  searchNotesByTitle,
}; 