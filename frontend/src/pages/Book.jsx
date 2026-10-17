import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  CircleAlert,
  CircleCheck,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  Shirt,
  StickyNote,
  User,
} from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";
import PageMotion from "../components/PageMotion.jsx";
import Reveal from "../components/Reveal.jsx";
import { brand, packages, waLink } from "../data/content.js";

const empty = {
  name: "",
  phone: "",
  email: "",
  packageName: "Standard",
  date: "",
  faculty: "",
  outfits: 1,
  notes: "",
};

export default function Book() {
  const [params] = useSearchParams();
  const preset = packages.find((p) => p.id === params.get("package"));
  const [form, setForm] = useState({
    ...empty,
    packageName: preset?.name || "Standard",
    outfits: preset?.id === "premium" ? 2 : 1,
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const message = useMemo(() => {
    return `Hi Capture Media Lab, I want to book the ${form.packageName} package for Unilorin convocation on ${form.date || "a date we will confirm"}. Name: ${form.name || "—"}. Phone: ${form.phone || "—"}. Faculty: ${form.faculty || "—"}. ${form.notes}`.trim();
  }, [form]);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Could not book");
      setStatus({ type: "ok", text: "Slot request is in. We will confirm on WhatsApp or a call." });
      setForm((prev) => ({ ...empty, packageName: prev.packageName }));
    } catch (err) {
      setStatus({
        type: "err",
        text: `${err.message}. You can still send the same request on WhatsApp.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <PageMotion>
      <section className="section page-hero">
        <div className="wrap book-layout">
          <Reveal>
            <p className="eyebrow">Book your slot now</p>
            <h1 className="display">LOCK THE LIGHT.</h1>
            <p className="muted" style={{ maxWidth: 420 }}>
              {brand.location}. Bring gown, outfit, and anyone in the group combo. We confirm on WhatsApp:{" "}
              {brand.phones.join(" / ")}.
            </p>
            <p className="info-row muted" style={{ marginTop: "1rem" }}>
              <MapPin size={16} strokeWidth={2.1} />
              {brand.location}
            </p>
            <div style={{ marginTop: "1.4rem" }}>
              <MagneticButton href={waLink(message)} className="btn btn-ghost" icon={MessageCircle}>
                Or book on WhatsApp
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={submit}>
              <AnimatePresence>
                {status.text && (
                  <motion.div
                    className={status.type === "ok" ? "success" : "error"}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {status.type === "ok" ? <CircleCheck size={18} /> : <CircleAlert size={18} />}
                    {status.text}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="form-row">
                <label>
                  <span className="field-label">
                    <User size={14} />
                    Name
                  </span>
                  <input required value={form.name} onChange={set("name")} placeholder="Your name" />
                </label>
                <label>
                  <span className="field-label">
                    <Phone size={14} />
                    Phone
                  </span>
                  <input required value={form.phone} onChange={set("phone")} placeholder="080..." />
                </label>
              </div>
              <label>
                <span className="field-label">
                  <Mail size={14} />
                  Email
                </span>
                <input type="email" value={form.email} onChange={set("email")} placeholder="optional" />
              </label>
              <div className="form-row">
                <label>
                  <span className="field-label">
                    <Package size={14} />
                    Package
                  </span>
                  <select value={form.packageName} onChange={set("packageName")}>
                    {packages.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} — ₦{item.price.toLocaleString("en-NG")}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span className="field-label">
                    <Calendar size={14} />
                    Preferred date
                  </span>
                  <input required type="date" value={form.date} onChange={set("date")} />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="field-label">
                    <GraduationCap size={14} />
                    Faculty / department
                  </span>
                  <input value={form.faculty} onChange={set("faculty")} placeholder="e.g. Engineering" />
                </label>
                <label>
                  <span className="field-label">
                    <Shirt size={14} />
                    Outfits
                  </span>
                  <select value={form.outfits} onChange={set("outfits")}>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                  </select>
                </label>
              </div>
              <label>
                <span className="field-label">
                  <StickyNote size={14} />
                  Notes
                </span>
                <textarea
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="Group size, frame request, reel request..."
                />
              </label>
              <motion.button className="btn btn-red" type="submit" disabled={sending} whileTap={{ scale: 0.98 }}>
                {sending ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
                {sending ? "Sending..." : "Send booking request"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageMotion>
  );
}
