import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck, House, Images, Info, Mail, Menu, Package, X } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  ["/", "Home", House],
  ["/gallery", "Gallery", Images],
  ["/packages", "Packages", Package],
  ["/about", "About", Info],
  ["/contact", "Contact", Mail],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={`nav ${open ? "open" : ""}`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <NavLink to="/" aria-label="Capture Media Lab" onClick={() => setOpen(false)}>
          <img className="nav-logo nav-logo-dark" src="/images/logos/logo-white.png" alt="" />
          <img className="nav-logo nav-logo-light" src="/images/logos/logo-black.png" alt="" />
        </NavLink>
        <nav className="nav-links">
          {links.map(([to, label, Icon], i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
            >
              <NavLink to={to} end={to === "/"} onClick={() => setOpen(false)}>
                <Icon size={15} strokeWidth={2.1} aria-hidden="true" />
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <div className="nav-tools">
          <ThemeToggle />
          <div className="nav-book">
            <MagneticButton to="/book" className="btn btn-red" icon={CalendarCheck}>
              Book your slot
            </MagneticButton>
          </div>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? <X size={16} strokeWidth={2.2} /> : <Menu size={16} strokeWidth={2.2} />}
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
