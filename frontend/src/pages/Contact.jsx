import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";
import PageMotion from "../components/PageMotion.jsx";
import Reveal from "../components/Reveal.jsx";
import { brand, waLink } from "../data/content.js";
import { fadeUp, stagger, viewport } from "../lib/motion.js";

const rows = [
  [MapPin, brand.location],
  [MessageCircle, `WhatsApp ${brand.phones[0]}`],
  [Phone, `Call ${brand.phones[1]}`],
];

export default function Contact() {
  return (
    <PageMotion>
      <section className="section page-hero">
        <div className="wrap contact-layout">
          <Reveal>
            <p className="eyebrow">Find us</p>
            <h1 className="display">MFM JUNCTION. UNIVERSITY ROAD.</h1>
            <p className="muted">
              Ilorin. Walk in with the gown. Leave with the year on a card and, if you want it, in a frame.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
            >
              <p className="eyebrow">Studio</p>
              <h2 className="headline" style={{ fontSize: "2.2rem", margin: "0.5rem 0 1rem" }}>
                {brand.location}
              </h2>
              <motion.div className="contact-lines" variants={stagger} initial="hidden" animate="show">
                {rows.map(([Icon, text]) => (
                  <motion.p key={text} className="info-row" variants={fadeUp}>
                    <Icon size={18} strokeWidth={2.1} />
                    {text}
                  </motion.p>
                ))}
              </motion.div>
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
                <MagneticButton
                  href={waLink("Hi Capture Media Lab, I want to book a convocation session.")}
                  className="btn btn-red"
                  icon={MessageCircle}
                >
                  WhatsApp the lab
                </MagneticButton>
                <MagneticButton href={`tel:${brand.phones[1]}`} className="btn btn-ghost" icon={Phone}>
                  Call 0814 735 3112
                </MagneticButton>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </PageMotion>
  );
}
