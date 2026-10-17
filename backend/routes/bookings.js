import { Router } from "express";
import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import { createLocalBooking, listLocalBookings } from "../data/store.js";

const router = Router();
const usesMongo = () => mongoose.connection.readyState === 1;

function validate(body) {
  const required = ["name", "phone", "packageName", "date"];
  const missing = required.filter((key) => !String(body[key] || "").trim());
  if (missing.length) {
    return `Missing ${missing.join(", ")}`;
  }
  return null;
}

router.post("/", async (req, res) => {
  const error = validate(req.body || {});
  if (error) return res.status(400).json({ ok: false, error });

  const payload = {
    name: String(req.body.name).trim(),
    phone: String(req.body.phone).trim(),
    email: String(req.body.email || "").trim(),
    packageName: String(req.body.packageName).trim(),
    date: String(req.body.date).trim(),
    faculty: String(req.body.faculty || "").trim(),
    outfits: Number(req.body.outfits) || 1,
    notes: String(req.body.notes || "").trim(),
  };

  try {
    const booking = usesMongo()
      ? await Booking.create(payload)
      : await createLocalBooking(payload);
    res.status(201).json({ ok: true, booking });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const bookings = usesMongo()
      ? await Booking.find().sort({ createdAt: -1 }).lean()
      : await listLocalBookings();
    res.json({ ok: true, bookings });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
