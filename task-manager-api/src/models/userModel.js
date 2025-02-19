import pool from "../config/db.js";

export const createUser = async ({ username, email, passwordHash }) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (username, email, password_hash)
          VALUES ($1, $2, $3)
          RETURNING *`,
      [username, email, passwordHash]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
