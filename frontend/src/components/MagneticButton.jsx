import { useRef } from "react";
import { Link } from "react-router-dom";

export default function MagneticButton({ to, href, className, children, icon: Icon }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const x = e.clientX - (box.left + box.width / 2);
    const y = e.clientY - (box.top + box.height / 2);
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const inner = (
    <>
      {children}
      {Icon ? <Icon size={16} strokeWidth={2.2} aria-hidden="true" /> : null}
    </>
  );

  const props = {
    ref,
    className,
    onMouseMove: onMove,
    onMouseLeave: reset,
    "data-cursor": "hot",
  };

  if (href) {
    return (
      <a {...props} href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link {...props} to={to}>
      {inner}
    </Link>
  );
}
