import { motion } from "framer-motion";
import { Aperture, CalendarCheck, Frame, MapPin, Shirt } from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";
import PageMotion from "../components/PageMotion.jsx";
import Reveal from "../components/Reveal.jsx";
import { portraits } from "../data/content.js";

const facts = [
  [Aperture, "Directed light, not a waiting-room flash"],
  [Shirt, "One look or two — gown and your clothes"],
  [Frame, "Prints, frames, and reels when you want them"],
];

export default function About() {
  return (
    <PageMotion>
      <section className="section page-hero">
        <div className="wrap about-layout">
          <Reveal>
            <p className="eyebrow">The lab</p>
            <h1 className="display">A CAMERA THAT BEHAVES LIKE A STAGE.</h1>
            <p>
              Capture Media Lab is an Ilorin portrait studio built around Unilorin convocation. The work is clean,
              directed, and a little theatrical — gown on the stand, diploma in the hand, a second outfit if the day
              deserves two versions.
            </p>
            <p className="muted">
              We shoot at MFM Junction, University Road. The pictures you see here are from previous convocation years:
              warm brown seamless, navy and gold, hijab and hood, group frames, and a cinematic black-suit series for
              people who want the look to feel like a film still.
            </p>
            <ul className="icon-list">
              {facts.map(([Icon, text]) => (
                <li key={text}>
                  <Icon size={16} strokeWidth={2.2} />
                  {text}
                </li>
              ))}
            </ul>
            <p className="info-row muted" style={{ margin: "1rem 0 1.4rem" }}>
              <MapPin size={16} strokeWidth={2.1} />
              MFM Junction, University Road, Ilorin
            </p>
            <MagneticButton to="/book" className="btn btn-red" icon={CalendarCheck}>
              Book the lab
            </MagneticButton>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.figure className="look-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.45 }}>
              <img src={portraits.stack[3].src} alt={portraits.stack[3].alt} />
            </motion.figure>
          </Reveal>
        </div>
      </section>
    </PageMotion>
  );
}
