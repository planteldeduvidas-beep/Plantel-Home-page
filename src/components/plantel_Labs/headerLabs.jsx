import { Link } from "react-router-dom";
import logo from "../../assets/logo_plantel1.png";
import { useState } from "react";


const irPara = (event, id) => {
  event.preventDefault();
  const alvo = document.querySelector(id);
  if (!alvo) return;
  window.scrollTo({
    top: alvo.offsetTop - 90,
    behavior: "smooth",
  });
  setIsMenuOpen(false);
};


export default function PlabHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    {
        <>
        <header className="plab-header ">

        <Link to="/plantel-lab" className="plab-header__brand">
          <img src={logo} alt="Plantel Labs" className="plab-header__logo" />
          <span className="plab-header__name">
            Plantel<span>Labs</span>
          </span>
        </Link>

        <div className="navegacao">
          <nav className="plab-header__nav">
            <a href="" className="plab-header__link" onClick={(e) => irPara(e, "#projetos")}>Projetos</a>
            <a href="" className="plab-header__link" onClick={(e) => irPara(e, "#time")}> Time</a>
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
          <a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a>
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