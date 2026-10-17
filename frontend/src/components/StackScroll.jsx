import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { portraits } from "../data/content.js";
import { ease, viewport } from "../lib/motion.js";

export default function StackScroll() {
  const fan = useRef(null);

  useEffect(() => {
    const el = fan.current;
    if (!el) return;
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="fan-section">
      <div className="fan-stage" ref={fan}>
        {portraits.heroFan.map((card, i) => (
          <motion.figure
            key={card.src}
            className="hero-card"
            initial={{ opacity: 0, scale: 0.7, x: "-50%", y: "-50%", rotate: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: `calc(-50% + ${card.x}vw)`,
              y: `calc(-50% + ${card.y}vh)`,
              rotate: card.rotate,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08 + i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ zIndex: card.z }}
          >
            <img src={card.src} alt={card.alt} />
          </motion.figure>
        ))}
      </div>
      <motion.div
        className="fan-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease }}
      >
        <p className="eyebrow">
          <Images size={14} strokeWidth={2.2} />
          The roll
        </p>
        <h2 className="display">
          Frames
          <br />
          fan out.
        </h2>
        <p className="muted">The same tight stack, opened — a showroom of last year’s close-ups.</p>
      </motion.div>
    </section>
  );
}
