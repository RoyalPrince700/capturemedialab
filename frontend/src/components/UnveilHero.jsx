import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { portraits } from "../data/content.js";
import { ease } from "../lib/motion.js";

const stackEntrances = [
  { x: "-58vw", y: "-22vh", rotate: -24 },
  { x: "56vw", y: "-16vh", rotate: 22 },
  { x: "-52vw", y: "30vh", rotate: -18 },
  { x: "54vw", y: "26vh", rotate: 20 },
  { x: "0vw", y: "-48vh", rotate: -12 },
];

export default function UnveilHero({ isReady = true }) {
  const wrap = useRef(null);
  const [progress, setProgress] = useState(0);
  const images = portraits.stack;
  const peelCount = Math.max(1, images.length - 1);

  useEffect(() => {
    const update = () => {
      const el = wrap.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total));
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="hero-peel" ref={wrap} style={{ height: `${images.length * 80}vh` }}>
      <div className="hero-peel-sticky">
        {images.map((img, i) => {
          const isLast = i === images.length - 1;
          const start = i / peelCount;
          const end = (i + 1) / peelCount;
          const t = isLast ? 0 : Math.min(1, Math.max(0, (progress - start) / (end - start)));
          const dir = i % 2 === 0 ? -1 : 1;
          const entrance = stackEntrances[i % stackEntrances.length];
          return (
            <motion.div
              key={img.src}
              className="hero-peel-card-entry"
              initial={{ ...entrance, opacity: 0, scale: 0.82 }}
              animate={
                isReady
                  ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
                  : { ...entrance, opacity: 0, scale: 0.82 }
              }
              transition={{
                duration: 0.95,
                delay: 0.08 + i * 0.11,
                ease,
              }}
              style={{
                zIndex: images.length - i,
              }}
            >
              <figure
                className="stack-card hero-peel-card"
                style={{
                  transform: `translate(${t * dir * 118}vw, ${t * -18}vh) rotate(${(i - 2) * 4 + t * dir * 22}deg) scale(${1 - t * 0.12})`,
                  opacity: t > 0.96 ? 0 : 1,
                }}
              >
                <img src={img.src} alt={img.alt} />
              </figure>
            </motion.div>
          );
        })}
        <div className="veil" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <p className="eyebrow">Unilorin convocation · Ilorin</p>
          <h1 className="display">
            THIS IS
            <br />
            YOUR
            <br />
            CLOSE-UP.
          </h1>
          <div className="hero-row">
            <p>
              Scroll and the prints peel off. Gown, second look, group combo, frames, and reels — shot at Capture Media
              Lab.
            </p>
            <MagneticButton to="/book" className="btn btn-red" icon={CalendarCheck}>
              Book your slot now
            </MagneticButton>
          </div>
          <motion.p
            className="hero-scroll"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          >
            <ChevronDown size={18} strokeWidth={2.2} />
            Scroll to peel
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
