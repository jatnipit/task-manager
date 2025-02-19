import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";
import dotenv from "dotenv";

import authRoutes from "../src/routes/authRoutes.js";
import taskRoutes from "../src/routes/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
