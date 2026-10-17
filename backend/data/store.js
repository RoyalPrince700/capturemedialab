import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "bookings.json");

async function readAll() {
  try {
    const raw = await readFile(file, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeAll(rows) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(rows, null, 2));
}

export async function createLocalBooking(payload) {
  const rows = await readAll();
  const booking = {
    id: `cml-${Date.now()}`,
    ...payload,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  rows.unshift(booking);
  await writeAll(rows);
  return booking;
}

export async function listLocalBookings() {
  return readAll();
}
