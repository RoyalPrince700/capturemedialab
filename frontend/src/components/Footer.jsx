import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, Images, Info, MapPin, MessageCircle, Package, Phone } from "lucide-react";
import { brand } from "../data/content.js";
import { ease, fadeUp, stagger, viewport } from "../lib/motion.js";

const links = [
  ["/gallery", "Gallery", Images],
  ["/packages", "Packages", Package],
  ["/book", "Book a session", CalendarCheck],
  ["/about", "About the lab", Info],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <motion.p
          className="footer-word"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
        >
          <span>Capture</span>
          <span>Media Lab</span>
        </motion.p>
        <motion.div
          className="footer-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow" style={{ color: "var(--red)" }}>
              Studio
            </p>
            <h3 className="headline" style={{ fontSize: "2rem", margin: "0.4rem 0" }}>
              {brand.location}
            </h3>
            <p className="footer-line">
              <MapPin size={16} strokeWidth={2.1} />
              Unilorin convocation portraits, frames, and reels.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            {links.map(([to, label, Icon]) => (
              <p key={to}>
                <Link className="footer-link" to={to}>
                  <Icon size={16} strokeWidth={2.1} />
                  {label}
                </Link>
              </p>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <p>WhatsApp / Phone</p>
            <p>
              <a className="footer-link" href={`https://wa.me/${brand.whatsapp}`}>
                <MessageCircle size={16} strokeWidth={2.1} />
                0904 747 2624
              </a>
            </p>
            <p>
              <a className="footer-link" href="tel:08147353112">
                <Phone size={16} strokeWidth={2.1} />
                0814 735 3112
              </a>
            </p>
            <p className="footer-copy">© {new Date().getFullYear()} Capture Media Lab</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
