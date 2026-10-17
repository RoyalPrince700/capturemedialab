import { motion } from "framer-motion";
import { ease } from "../lib/motion.js";

export default function PageMotion({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.main>
  );
}
