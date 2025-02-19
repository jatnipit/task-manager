import {
  createTask,
  getTasksByUserId,
  putTask,
  putTaskStatus,
  delTask,
} from "../models/taskModel.js";

export const addTask = async (req, res) => {
  console.log(`addTask id: ${req.user.userId} called`);
  const { title, description, status, priority, deadline } = req.body;
  const userId = req.user.userId;

  try {
    const task = await createTask({
      userId,
      title,
      description,
      status,
      priority,
      deadline,
    });
    res.status(201).json({ message: "Task added!", task });
  } catch (err) {
    res.status(500).json({ error: "Failed to add task" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await getTasksByUserId(req.user.userId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to get tasks" });
  }
};

export const updateTask = async (req, res) => {
  console.log(`Update task id: ${req.params.id} called`);
  const taskId = req.params.id;
  const task = req.body;

  try {
    const updatedTask = await putTask(taskId, task);
    res.status(201).json({ message: "Task updated!", updatedTask });
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
    // res.status(500).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  console.log(`Delete task id: ${req.params.id} called`);
  const taskId = req.params.id;

  try {
    const deleted = await delTask(taskId);
    if (!deleted) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
