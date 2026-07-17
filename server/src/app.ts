import express from "express";
import cors from "cors";

import routes from "./routes";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";
import meetingRoutes from "./modules/meetings/meeting.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

import path from "path";
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads")),
);

// Routes
app.use("/api", routes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/meetings", meetingRoutes);

export default app;