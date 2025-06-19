import pool from './db.js';

async function createUser(username, hashedPassword) {
  const result = await pool.query(
    'INSERT INTO users (username, password, created_at) VALUES ($1, $2, NOW()) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
}

async function findUserByUsername(username) {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0];
}

export default {
  createUser,
  findUserByUsername,
}; 