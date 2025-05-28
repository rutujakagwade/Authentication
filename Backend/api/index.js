import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";

const app = express();

app.use(cors({
  origin: "https://your-frontend.vercel.app", // adjust if needed
  credentials: true,
}));
app.use(express.json());
app.use("/api", authRoutes);

// Avoid multiple DB connections
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
    } catch (err) {
      console.error("DB connection error:", err);
      return res.status(500).send("DB error");
    }
  }

  return app(req, res);
}
