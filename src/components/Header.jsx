import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header({
  menuItems,
  onAnchorClick,
  isDarkMode,
  onToggleDarkMode,
  onToggleMenu,
  isMenuOpen,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
  };

  return (
    <header className={`plantel-header${isScrolled ? " solid" : ""}`}>
      <div className="header-inner">
      {/* Logo principal */}
      <a className="header-brand" href="#" aria-label="Plantel — início" onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }}>
      <img
        src="/images/plantel-nova.png"
        alt="Plantel"
        className="logo"
      />
      </a>
      {/*
        Como colocar a imagem do logo:
        1) Coloque o arquivo em public/images/
        2) Troque src="#" por src="/images/plantel-nova.png"
        Ou importe:
        import logo from "../assets/plantel-nova.png"; src={logo}
      */}

      <nav className="menu">
        {menuItems.map((item) => item.to ? (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ) : (
          <a
            key={item.id}
            href={item.id}
            onClick={(event) => handleMenuClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="dark-mode-container">
        <button
          id="dark-mode-toggle"
          type="button"
          title="Alternar tema"
          onClick={onToggleDarkMode}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <a
        id="link"
        target="_blank"
        href="https://chat.whatsapp.com/KMwYVUctbqh1sPtlhcs3ip"
        rel="noopener noreferrer"
      >
        <img src="/images/LogoZap.png" id="logo-header-zap" alt="Logo WhatsApp" />
        {/*
          Como colocar a imagem do WhatsApp:
          1) public/images/LogoZap.png
          2) src="/images/LogoZap.png"
        */}
        <span>Entrar no Plantel</span>
      </a>

      <button
        id="hamburger"
        className={`hamburger${isMenuOpen ? " open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={onToggleMenu}
      >
        <span className="menu-toggle-icon" aria-hidden="true"><span /><span /></span>
      </button>
      </div>
    </header>
  );
}
