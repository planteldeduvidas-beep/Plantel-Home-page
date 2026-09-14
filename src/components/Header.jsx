import { Moon, Sun } from "lucide-react";
import "./Header.css";
import { headerPanels } from "../data/headerPanels";
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
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1081px)');
    const close = () => setActivePanel(null);
    desktop.addEventListener('change', close);
    return () => desktop.removeEventListener('change', close);
  }, []);

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
    <header className={`plantel-header${isScrolled ? " solid" : ""}${activePanel ? " labs-expanded" : ""}`} onMouseLeave={() => setActivePanel(null)}>
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

      <nav className="menu" aria-label="Navegação principal">
        {menuItems.map((item) => {
          const isOpen = activePanel === item.id;
          const panelId = `nav-panel-${item.id.slice(1)}`;
          return <div className="labs-nav-item" key={item.id}
            onMouseEnter={() => setActivePanel(item.id)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActivePanel(null); }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setActivePanel(null);
                event.currentTarget.querySelector('button').focus();
              }
            }}>
            <button className="labs-nav-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId}
              onClick={() => setActivePanel(value => value === item.id ? null : item.id)}>{item.label}</button>
            <div id={panelId} className={`labs-nav-panel${isOpen ? ' is-open' : ''}`} inert={!isOpen} aria-hidden={!isOpen}>
              <div className="labs-nav-panel-inner">
                {headerPanels[item.id].map((column, index) => <div className={index === 0 ? 'labs-nav-primary' : 'labs-nav-secondary'} key={column.title}>
                  <span>{column.title}</span>
                  {column.links.map(([label, href]) => <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(event) => {
                      if (href.startsWith('#') && href !== '#calendario') handleMenuClick(event, href);
                      setActivePanel(null);
                    }}>{label}</a>)}
                </div>)}
              </div>
            </div>
          </div>;
        })}
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
