import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_URI } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://authentication-two-phi.vercel.app"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", authRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("DB Connection Error:", err));
