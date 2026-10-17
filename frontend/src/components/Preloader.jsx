import { useEffect } from "react";
import { motion } from "framer-motion";
import { Aperture } from "lucide-react";

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-mark">
        <motion.div
          className="aperture"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Aperture size={28} strokeWidth={1.6} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 18, letterSpacing: "0.28em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.08em" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          CAPTURE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          MEDIA LAB
        </motion.p>
      </div>
    </motion.div>
  );
}
