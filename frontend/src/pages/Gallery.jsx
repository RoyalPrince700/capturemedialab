import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clapperboard, LayoutGrid, Shirt, User, Users, GraduationCap, X } from "lucide-react";
import PageMotion from "../components/PageMotion.jsx";
import Reveal from "../components/Reveal.jsx";
import { portraits } from "../data/content.js";
import { ease } from "../lib/motion.js";

const filters = [
  ["All", LayoutGrid],
  ["Gown", GraduationCap],
  ["Portrait", User],
  ["Group", Users],
  ["Cinematic", Clapperboard],
  ["Suit", Shirt],
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const shots = portraits.gallery.filter((shot) => filter === "All" || shot.tag === filter);

  return (
    <PageMotion>
      <section className="section page-hero">
        <Reveal className="wrap">
          <p className="eyebrow">The roll</p>
          <h1 className="display">PREVIOUS YEARS, STILL SHARP.</h1>
          <p className="muted" style={{ maxWidth: 480 }}>
            Tap a frame to focus it. These are Unilorin convocation portraits from the lab — gown, second look, group,
            cinematic suit.
          </p>
          <div className="filter-row">
            {filters.map(([name, Icon]) => (
              <motion.button
                key={name}
                className={`btn ${filter === name ? "btn-red" : "btn-ghost"}`}
                onClick={() => setFilter(name)}
                whileTap={{ scale: 0.96 }}
              >
                <Icon size={15} strokeWidth={2.2} />
                {name}
              </motion.button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap gallery-grid">
          <AnimatePresence mode="popLayout">
            {shots.map((shot, i) => (
              <motion.button
                key={shot.src}
                className="gallery-item"
                onClick={() => setOpen(shot)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.03, ease }}
                whileHover={{ y: -4 }}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" />
                <b>
                  {shot.tag} · {shot.name}
                </b>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.button
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <span className="lightbox-close">
              <X size={18} strokeWidth={2.2} />
              Close
            </span>
            <motion.img
              src={open.src}
              alt={open.alt}
              initial={{ scale: 0.86, rotate: -4 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.45, ease }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </PageMotion>
  );
}
