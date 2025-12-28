import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import fileRoutes from "./routes/file.routes.js";
import logRoutes from "./routes/log.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/logs", logRoutes);

export default app;
