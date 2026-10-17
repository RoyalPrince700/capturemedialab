import { motion } from "framer-motion";
import { ease, fadeUp, stagger, viewport } from "../lib/motion.js";

export default function Reveal({ children, className, delay = 0, y = 32, as = "div", style }) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Comp>
  );
}

export function RevealGroup({ children, className, as = "div" }) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp className={className} variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </Comp>
  );
}

export function RevealItem({ children, className, as = "div" }) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>
  );
}
