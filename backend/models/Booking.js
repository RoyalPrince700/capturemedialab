import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: "" },
    packageName: { type: String, required: true },
    date: { type: String, required: true },
    faculty: { type: String, default: "" },
    outfits: { type: Number, default: 1 },
    notes: { type: String, default: "" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
