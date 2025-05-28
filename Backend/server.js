import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_URI } from "./config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

app.use("/api", authRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("DB Connection Error:", err));
