import { motion } from "framer-motion";
import { CalendarCheck, Check, Clapperboard, Shirt, Users } from "lucide-react";
import MagneticButton from "../components/MagneticButton.jsx";
import PageMotion from "../components/PageMotion.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import { naira, packages, portraits } from "../data/content.js";
import { ease } from "../lib/motion.js";

const extras = [
  [Users, "Group combo on Standard and Premium"],
  [Shirt, "Two outfits on Premium"],
  [Clapperboard, "Shoot reels on Premium"],
];

export default function Packages() {
  return (
    <PageMotion>
      <section className="section page-hero">
        <Reveal className="wrap">
          <p className="eyebrow">Convocation portrait package</p>
          <h1 className="display">THREE WAYS TO LEAVE WITH THE YEAR.</h1>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
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
        <div className="wrap two-looks">
          <Reveal as="figure" className="look-card">
            <img src={portraits.group.src} alt={portraits.group.alt} />
            <span>Standard & Premium · Group combo</span>
          </Reveal>
          <Reveal delay={0.1} style={{ display: "grid", alignContent: "center", gap: "1rem" }}>
            <p className="eyebrow">What you walk out with</p>
            <h2 className="headline" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              Retouched stills. Friends in frame. Reels on Premium.
            </h2>
            <p className="muted">
              Basic is the tight solo set. Standard adds the group. Premium doubles the wardrobe and adds shoot reels —
              the motion version of the same day.
            </p>
            <ul className="icon-list">
              {extras.map(([Icon, text]) => (
                <li key={text}>
                  <Icon size={16} strokeWidth={2.2} />
                  {text}
                </li>
              ))}
            </ul>
            <p className="muted">Frames are available at the studio if you want the picture off the phone.</p>
          </Reveal>
        </div>
      </section>
    </PageMotion>
  );
}
