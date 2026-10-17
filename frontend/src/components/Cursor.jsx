import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    const over = (e) => {
      const hit = e.target.closest("a, button, .gallery-item, .package");
      el.classList.toggle("hot", Boolean(hit));
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  return <div className="cursor" ref={ref} />;
}
