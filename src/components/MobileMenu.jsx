import { Link } from "react-router-dom";

export default function MobileMenu({ menuItems, isOpen, onClose, onAnchorClick }) {
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
    >
      <div className="inner">
        {menuItems.map((item) => item.to ? (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ) : (
          <a
            key={item.id}
            href={item.id}
            className="mobile-link"
            onClick={(event) => handleClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
