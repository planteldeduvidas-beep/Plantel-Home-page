import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

export default function MobileMenu({ menuItems, isOpen, onClose, onAnchorClick }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (event) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(document.querySelectorAll('.header-brand, #dark-mode-toggle, #hamburger, #mobile-menu a'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => {
      document.removeEventListener("keydown", handleTab);
      document.getElementById("hamburger")?.focus({ preventScroll: true });
    };
  }, [isOpen]);
  const handleClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
    onClose();
  };

  return (
    <nav
      id="mobile-menu"
      className={`mobile-menu${isOpen ? " open" : ""}`}
      aria-hidden={!isOpen}
      inert={!isOpen}
      aria-label="Navegação mobile"
    >
      <div className="inner">
        {menuItems.map((item, index) => item.to ? (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ) : (
          <a
            key={item.id}
            href={item.id}
            className="mobile-link"
            style={{ "--menu-item-index": index }}
            onClick={(event) => handleClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
