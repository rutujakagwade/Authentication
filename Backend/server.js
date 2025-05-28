import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js"; // adjust path

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use("/api", authRoutes);

let isConnected = false;

// Vercel serverless handler
const server = async (req, res) => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      isConnected = true;
    } catch (err) {
      console.error("DB connection error:", err);
      return res.status(500).send("DB connection failed");
    }
  }

  app(req, res);
};

export default server;
