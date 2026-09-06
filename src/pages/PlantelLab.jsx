import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-plantel.png";
import "../styles/plantelLab.css";

export default function PlantelLab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="plab">
      <header className="plab-header">
        <div className="plab__inner plab-header__inner">
          <Link to="/plantel-lab" className="plab-header__brand">
            <img src={logo} alt="Plantel Labs" className="plab-header__logo" />
            <span className="plab-header__name">
              Plantel <span>Labs</span>
            </span>
          </Link>

          <nav className={`plab-header__nav ${isMenuOpen ? "is-open" : ""}`}>
            <a href="#atuacao" className="plab-header__link">Atuação</a>
            <a href="#video" className="plab-header__link">Vídeo</a>
            <a href="#time" className="plab-header__link">Time</a>
            <Link to="/" className="plab-header__link">Voltar ao Plantel</Link>
            <a href="#contato" className="plab-header__cta">Fale com o time</a>
          </nav>

          <button
            className="plab-header__toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      <section className="plab-hero">
        <div className="plab__inner">
          <span className="plab-hero__tag">Núcleo de tecnologia do Plantel</span>
          <h1 className="plab-hero__title">
            O time por trás dos produtos <span>digitais</span> do Plantel
          </h1>
          <p className="plab-hero__text">
            O Plantel Labs é a área responsável por projetar, desenvolver e
            manter as plataformas que sustentam a operação do Plantel. Aqui você
            conhece as pessoas do time e as frentes em que atuamos.
          </p>
          <div className="plab-hero__actions">
            <a href="#time" className="plab-btn plab-btn--primary">
              Conhecer o time
            </a>
            <a href="#atuacao" className="plab-btn plab-btn--ghost">
              Ver nossa atuação
            </a>
          </div>
        </div>
      </section>

      {/* Seções de atuação, vídeo e time entram aqui */}

      <footer className="plab-footer">
        <div className="plab__inner">
          <div className="plab-footer__grid">
            <div>
              <img src={logo} alt="Plantel Labs" className="plab-footer__logo" />
              <p className="plab-footer__about">
                Plantel Labs é o núcleo de tecnologia do Plantel, responsável
                pelo desenvolvimento das plataformas digitais do projeto.
              </p>
            </div>

            <div>
              <h4 className="plab-footer__title">Navegação</h4>
              <ul className="plab-footer__list">
                <li><a href="#atuacao">Atuação</a></li>
                <li><a href="#video">Vídeo</a></li>
                <li><a href="#time">Time</a></li>
                <li><Link to="/">Página inicial</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="plab-footer__title">Contato</h4>
              <ul className="plab-footer__list">
                <li><a href="#contato">Fale com o time</a></li>
                <li><a href="#contato">Parcerias</a></li>
              </ul>
            </div>
          </div>

          <div className="plab-footer__bottom">
            <span>© 2026 Plantel Labs. Todos os direitos reservados.</span>
            <div className="plab-footer__social">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}