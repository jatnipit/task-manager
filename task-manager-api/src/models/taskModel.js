import pool from "../config/db.js";

export const createTask = async ({
  userId,
  title,
  description,
  status,
  priority,
  deadline,
}) => {
  const result = await pool.query(
    `INSERT INTO tasks (user_id, title, description, status, priority, deadline) 
     VALUES ($1, $2, $3, $4, $5, $6) 
     RETURNING *`,
    [userId, title, description, status, priority, deadline]
  );
  return result.rows[0];
};

export const getTasksByUserId = async (userId) => {
  const result = await pool.query(`SELECT * FROM tasks WHERE user_id = $1`, [
    userId,
  ]);
  return result.rows;
};

export const putTask = async (taskId, task) => {
  const result = await pool.query(
    `UPDATE tasks 
    SET title = $1, 
        description = $2, 
        status = $3, 
        priority = $4, 
        deadline = $5 
    WHERE id = $6 RETURNING *`,
    [
      task.title,
      task.description,
      task.status,
      task.priority,
      task.deadline,
      taskId,
    ]
  );
  return result.rows[0];
};

export const putTaskStatus = async (taskId, newStatus) => {
  const result = await pool.query(
    `UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *`,
    [newStatus, taskId]
  );
  return result.rows[0];
};

export const delTask = async (taskId) => {
  const result = await pool.query(
    `DELETE FROM tasks WHERE id = $1 RETURNING *`,
    [taskId]
  );
  return result.rowCount === 1;
};
