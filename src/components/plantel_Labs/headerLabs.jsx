import { Link } from "react-router-dom";
import logo from "../../assets/logo_plantel1.png";
import { useState } from "react";

export default function PlabHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    {
        <>
        <header className="plab-header">

        <Link to="/plantel-lab" className="plab-header__brand">
          <img src={logo} alt="Plantel Labs" className="plab-header__logo" />
          <span className="plab-header__name">
            Plantel<span>Labs</span>
          </span>
        </Link>

        <div className="navegacao">
          <nav className="plab-header__nav">
            <a href="#projetos" className="plab-header__link">Projetos</a>
            <a href="#video" className="plab-header__link">Vídeo</a>
            <a href="#time" className="plab-header__link">Time</a>
            <Link to="/" className="plab-header__link">Voltar ao Plantel</Link>
            <a href={`https://wa.me/5524999216327?text=${encodeURIComponent("Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs.")}`}
        target="_blank" rel="noopener noreferrer" className="plab-header__cta">Fale com o time</a>
          </nav>

          <button
            className="plab-header__toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      <div
          className={`plab-overlay${isMenuOpen ? " is-active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <button
          className={`plab-close${isMenuOpen ? " is-active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <span /><span />
        </button>
        <nav className={`plab-mobile-menu${isMenuOpen ? " is-active" : ""}`}>
          <a href="#projetos" onClick={() => setIsMenuOpen(false)}>Atuação</a>
          <a href="#video" onClick={() => setIsMenuOpen(false)}>Vídeo</a>
          <a href="#time" onClick={() => setIsMenuOpen(false)}>Time</a>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Voltar ao Plantel</Link>
          <a href={`https://wa.me/5524999216327?text=${encodeURIComponent("Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs.")}`}
          target="_blank" rel="noopener noreferrer">
            Fale com o time
          </a>
        </nav>
        </>
      }
    </>
  );
}