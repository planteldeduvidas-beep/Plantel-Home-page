import { t } from '../i18n/index.js';
import { Moon, Search, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Header.css";
import { headerPanels } from "../data/headerPanels";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef(null);
  const searchInputRef = useRef(null);

  const searchItems = useMemo(() => {
    const items = menuItems.flatMap((item) => [
      { label: item.label, href: item.id },
      ...(headerPanels[item.id] || []).flatMap((column) =>
        column.links.map(([label, href]) => ({ label, href }))
      ),
    ]);

    return items.filter((item, index) =>
      items.findIndex((candidate) => candidate.label === item.label && candidate.href === item.href) === index
    );
  }, [menuItems]);

  const searchResults = useMemo(() => {
    const normalize = (value) => value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const query = normalize(searchQuery.trim());
    if (!query) return searchItems.slice(0, 6);
    return searchItems.filter((item) => normalize(item.label).includes(query)).slice(0, 8);
  }, [searchItems, searchQuery]);

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

  useEffect(() => {
    if (!isSearchOpen) return;
    searchInputRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsSearchOpen(false);
    };
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsSearchOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isSearchOpen]);

  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
  };

  const toggleSearch = () => {
    const willOpen = !isSearchOpen;
    if (willOpen && isMenuOpen) onToggleMenu();
    setActivePanel(null);
    setIsSearchOpen(willOpen);
    if (!willOpen) setSearchQuery("");
  };

  const handleSearchResult = (event, href) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    if (!href.startsWith("#")) return;
    event.preventDefault();
    if (href === "#calendario" || href === "#idiomas") {
      window.location.hash = href;
    } else {
      onAnchorClick(href);
    }
  };

  return (
    <header ref={headerRef} className={`plantel-header${isScrolled ? " solid" : ""}${activePanel || isSearchOpen ? " labs-expanded" : ""}${isSearchOpen ? " search-expanded" : ""}`} onMouseLeave={() => setActivePanel(null)}>
      <div className="header-inner">
      {/* Logo principal */}
      <a className="header-brand" href="#" aria-label={t("Plantel — início")} onClick={(event) => {
        event.preventDefault();
        if (window.location.hash === '#idiomas') window.location.hash = '';
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

      <nav className="menu" aria-label={t("Navegação principal")}>
        {menuItems.map((item) => {
          const isOpen = activePanel === item.id;
          const panelId = `nav-panel-${item.id.slice(1)}`;
          return <div className="labs-nav-item" key={item.id}
            onMouseEnter={() => { if (!isSearchOpen) setActivePanel(item.id); }}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActivePanel(null); }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setActivePanel(null);
                event.currentTarget.querySelector('button').focus();
              }
            }}>
            <button className="labs-nav-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId}
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
                setActivePanel(value => value === item.id ? null : item.id);
              }}>{item.label}</button>
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

      <button
        className="header-search-toggle"
        type="button"
        aria-label={isSearchOpen ? "Fechar busca" : "Buscar no Plantel"}
        aria-expanded={isSearchOpen}
        aria-controls="header-search-panel"
        onClick={toggleSearch}
      >
        {isSearchOpen ? <X size={17} /> : <Search size={17} />}
      </button>

      <div className="dark-mode-container">
        <button
          id="dark-mode-toggle"
          type="button"
          title={t("Alternar tema")}
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
        <span>{t("Entrar no Plantel")}</span>
      </a>

      <button
        id="hamburger"
        className={`hamburger${isMenuOpen ? " open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? t("Fechar menu") : t("Abrir menu")}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => {
          if (isSearchOpen) {
            setIsSearchOpen(false);
            setSearchQuery("");
          }
          onToggleMenu();
        }}
      >
        <span className="menu-toggle-icon" aria-hidden="true"><span /><span /></span>
      </button>
      </div>

      <div id="header-search-panel" className={`header-search-panel${isSearchOpen ? " is-open" : ""}`} aria-hidden={!isSearchOpen} inert={!isSearchOpen}>
        <div className="header-search-inner">
          <label className="header-search-field">
            <Search size={24} aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="search"
              aria-label="Buscar no Plantel"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar no Plantel"
              autoComplete="off"
            />
          </label>
          <div className="header-search-links">
            <span>{searchQuery.trim() ? "Resultados" : "Links rápidos"}</span>
            {searchResults.length > 0 ? searchResults.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(event) => handleSearchResult(event, item.href)}
              >
                <span aria-hidden="true">→</span>{item.label}
              </a>
            )) : <p>Nenhum resultado encontrado.</p>}
          </div>
        </div>
      </div>
    </header>
  );
}
