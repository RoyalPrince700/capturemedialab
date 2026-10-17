import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Check, Frame, MapPin, Shirt } from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";
import PageMotion from "../components/PageMotion.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import StackScroll from "../components/StackScroll.jsx";
import UnveilHero from "../components/UnveilHero.jsx";
import { naira, packages, portraits } from "../data/content.js";
import { ease } from "../lib/motion.js";

export default function Home({ isReady }) {
  const strip = [...portraits.gallery, ...portraits.gallery].slice(0, 24);

  return (
    <PageMotion>
      <UnveilHero isReady={isReady} />

      <section className="section">
        <Reveal className="wrap section-head">
          <div>
            <p className="eyebrow">The lab</p>
            <h2 className="display">
              Not a
              <br />
              waiting-room
              <br />
              portrait.
            </h2>
          </div>
          <p className="muted" style={{ maxWidth: 380 }}>
            Unilorin gown, your own clothes, friends in frame, paper you can hang. The shoot feels like a reveal — you
            walk in, the lights lock, and the year becomes a still.
          </p>
        </Reveal>
      </section>

      <StackScroll />

      <div className="marquee">
        <div className="marquee-track">
          {strip.map((img, i) => (
            <img key={`${img.src}-${i}`} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>

      <section className="section">
        <Reveal className="wrap section-head">
          <div>
            <p className="eyebrow">
              <Shirt size={14} strokeWidth={2.2} />
              Two outfits
            </p>
            <h2 className="display">
              Change
              <br />
              the look.
            </h2>
          </div>
          <p className="muted" style={{ maxWidth: 340 }}>
            Premium includes two outfits. Same graduate. Two stories. Color first, gown second — or the other way
            around.
          </p>
        </Reveal>
        <RevealGroup className="wrap two-looks">
          {portraits.twoLooks.map((look) => (
            <RevealItem key={look.src} as="figure" className="look-card">
              <motion.img src={look.src} alt={look.label} whileHover={{ scale: 1.06 }} transition={{ duration: 0.7, ease }} />
              <span>{look.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="section">
        <Reveal className="wrap section-head">
          <div>
            <p className="eyebrow">Packages</p>
            <h2 className="display">Pick a lane.</h2>
          </div>
          <Link to="/packages" className="btn btn-ghost">
            See every detail
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link>
        </Reveal>
        <RevealGroup className="wrap packages">
          {packages.map((item) => (
            <RevealItem key={item.id}>
              <motion.article
                className={`package ${item.featured ? "featured" : ""}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <img src={item.image} alt={item.name} />
                <div className="package-top">
                  <p className="eyebrow">{item.tag}</p>
                  <h3 className="display">{item.name}</h3>
                  <p className="package-price">{naira(item.price)}</p>
                </div>
                <div className="package-bottom">
                  <ul>
                    {item.items.map((line) => (
                      <li key={line}>
                        <Check size={15} strokeWidth={2.4} />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton to={`/book?package=${item.id}`} className="btn btn-red" icon={CalendarCheck}>
                    Book {item.name}
                  </MagneticButton>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="section">
        <div className="wrap frame-grid">
          <Reveal>
            <figure className="frame-card">
              <img src={portraits.frames.src} alt={portraits.frames.alt} />
              <span>
                <Frame size={13} strokeWidth={2.2} />
                Frames available
              </span>
            </figure>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">Off-screen</p>
            <h2 className="headline" style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)" }}>
              Perfect for memories beyond your screen.
            </h2>
            <p className="muted" style={{ fontSize: "1.1rem" }}>
              The portrait is not done when it hits your phone. Ask for a frame at the studio — MFM Junction, University
              Road, Ilorin.
            </p>
            <div style={{ marginTop: "1.6rem" }}>
              <MagneticButton to="/contact" className="btn btn-ghost" icon={MapPin}>
                Find the studio
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <Reveal>
          <p className="eyebrow">Convocation window is short</p>
          <h2 className="display">BOOK YOUR SLOT NOW</h2>
          <p className="muted" style={{ margin: "1rem auto 1.8rem", maxWidth: 420 }}>
            WhatsApp 0904 747 2624 or lock a date on the form. Bring the gown. Bring the people.
          </p>
          <MagneticButton to="/book" className="btn btn-red" icon={CalendarCheck}>
            Lock my session
          </MagneticButton>
        </Reveal>
      </section>
    </PageMotion>
  );
}
