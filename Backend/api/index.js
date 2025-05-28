import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js"; // adjust relative path as needed

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.use("/api", authRoutes);

let isConnected = false;

async function handler(req, res) {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
    } catch (err) {
      console.error("DB connection error:", err);
      return res.status(500).send("Database connection failed");
    }
  }
  app(req, res);
}

export default handler;
