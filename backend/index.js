import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookingsRouter from "./routes/bookings.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    brand: "Capture Media Lab",
    storage: mongoose.connection.readyState === 1 ? "mongo" : "local",
  });
});

app.use("/api/bookings", bookingsRouter);

async function start() {
  const uri = process.env.MONGO_URI;
  if (uri) {
    try {
      await mongoose.connect(uri);
      console.log("Mongo connected");
    } catch (err) {
      console.warn("Mongo unavailable, using local booking store:", err.message);
    }
  } else {
    console.log("No MONGO_URI set. Bookings will save to backend/data/bookings.json");
  }

  app.listen(port, () => {
    console.log(`Capture Media Lab API on http://localhost:${port}`);
  });
}

start();
