export const brand = {
  name: "Capture Media Lab",
  wordmark: "CAPTURE",
  sub: "MEDIA LAB",
  phones: ["09047472624", "08147353112"],
  whatsapp: "2349047472624",
  location: "MFM Junction, University Road, Ilorin",
  focus: "Unilorin Convocation Portrait Package",
};

export const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 15000,
    image: "/images/e1.jpg",
    tag: "One look. Three keepers.",
    items: ["3 retouched pictures", "One outfit"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 30000,
    image: "/images/h7.jpg",
    tag: "Bring the squad.",
    items: ["5 retouched pictures", "Group combo", "One outfit"],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 55000,
    image: "/images/iyanu-2.jpg",
    tag: "Two outfits. Reels. Full close-up.",
    items: ["8 retouched pictures", "Group combo", "Shoot reels", "Two outfits"],
  },
];

export const portraits = {
  heroFan: [
    { src: "/images/iyanu-2.jpg", alt: "Graduate holding roses in Unilorin gown", rotate: -8, x: -28, y: 6, z: 5 },
    { src: "/images/r1.jpg", alt: "Graduate in full Unilorin gown and hood", rotate: 7, x: 26, y: 2, z: 4 },
    { src: "/images/z1.jpg", alt: "Graduate in beige dress holding a scroll", rotate: -3, x: -6, y: 12, z: 3 },
    { src: "/images/h5.jpg", alt: "Graduate in hijab holding congratulations scroll", rotate: 10, x: 18, y: 18, z: 2 },
    { src: "/images/cinematic-close.jpg", alt: "Cinematic black suit portrait", rotate: -12, x: -18, y: 20, z: 1 },
  ],
  stack: [
    { src: "/images/cinematic-close.jpg", alt: "Cinematic close-up portrait in a black suit" },
    { src: "/images/cinematic-cuff.jpg", alt: "Cinematic portrait adjusting a shirt cuff" },
    { src: "/images/cinematic-folder.jpg", alt: "Cinematic portrait holding a graduation folder" },
    { src: "/images/cinematic-full.jpg", alt: "Full-body cinematic portrait in a black suit" },
  ],
  gallery: [
    { src: "/images/iyanu-2.jpg", alt: "Roses look", tag: "Gown", name: "Roses" },
    { src: "/images/iyanu-3.jpg", alt: "Pink dress holding cap", tag: "Second outfit", name: "Cap lift" },
    { src: "/images/r1.jpg", alt: "Classic gown", tag: "Gown", name: "Classic" },
    { src: "/images/z1.jpg", alt: "Beige dress scroll", tag: "Portrait", name: "Scroll" },
    { src: "/images/h5.jpg", alt: "Hijab diploma", tag: "Portrait", name: "Diploma" },
    { src: "/images/h6.jpg", alt: "Scroll raised", tag: "Portrait", name: "Lift" },
    { src: "/images/h7.jpg", alt: "Two graduates", tag: "Group", name: "Combo" },
    { src: "/images/h2.jpg", alt: "Gown and stand", tag: "Gown", name: "Stand" },
    { src: "/images/dav1.jpg", alt: "Suit and hanging gown", tag: "Suit", name: "Set" },
    { src: "/images/n2.jpg", alt: "White shirt graduate", tag: "Portrait", name: "Soft" },
    { src: "/images/a9.jpg", alt: "Seated with yellow hood", tag: "Portrait", name: "Hood" },
    { src: "/images/a2.jpg", alt: "Seated in gown", tag: "Gown", name: "Seat" },
    { src: "/images/e1.jpg", alt: "Grey suit and gown", tag: "Suit", name: "Folded arms" },
    { src: "/images/d1.jpg", alt: "Navy suit diploma", tag: "Suit", name: "Navy" },
    { src: "/images/di3.jpg", alt: "Coat and cap", tag: "Portrait", name: "Coat" },
    { src: "/images/m2.jpg", alt: "Yellow look", tag: "Color", name: "Gold" },
    { src: "/images/cinematic-close.jpg", alt: "Cinematic close", tag: "Cinematic", name: "Close-up" },
    { src: "/images/cinematic-cuff.jpg", alt: "Adjusting cuff", tag: "Cinematic", name: "Cuff" },
    { src: "/images/cinematic-folder.jpg", alt: "Folder in hand", tag: "Cinematic", name: "Folder" },
    { src: "/images/cinematic-full.jpg", alt: "Full body cinematic", tag: "Cinematic", name: "Full" },
  ],
  twoLooks: [
    { src: "/images/iyanu-3.jpg", label: "Look 01 — Color" },
    { src: "/images/iyanu-2.jpg", label: "Look 02 — Gown" },
  ],
  group: { src: "/images/h7.jpg", alt: "Group combo portrait" },
  frames: { src: "/images/z1.jpg", alt: "Frame-ready portrait" },
};

export const naira = (n) => `₦${n.toLocaleString("en-NG")}`;

export const waLink = (text) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;
