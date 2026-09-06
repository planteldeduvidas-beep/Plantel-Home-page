import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_plantel1.png";
import "../styles/plantelLab.css";
import projetos  from "../data/projetos.js";
import PlantelBackdrop from "../components/PlantelBackdrop.jsx";

export default function PlantelLab() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <body class="plab">
      <PlantelBackdrop />
      <header className="plab-header">

        <Link to="/plantel-lab" className="plab-header__brand">
          <img src={logo} alt="Plantel Labs" className="plab-header__logo" />
          <span className="plab-header__name">
            Plantel<span>Labs</span>
          </span>
        </Link>

        <div className="navegacao">
          <nav className="plab-header__nav">
            <a href="#atuacao" className="plab-header__link">Atuação</a>
            <a href="#video" className="plab-header__link">Vídeo</a>
            <a href="#time" className="plab-header__link">Time</a>
            <Link to="/" className="plab-header__link">Voltar ao Plantel</Link>
            <a href="#contato" className="plab-header__cta">Fale com o time</a>
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
        <a href="#atuacao" onClick={() => setIsMenuOpen(false)}>Atuação</a>
        <a href="#video" onClick={() => setIsMenuOpen(false)}>Vídeo</a>
        <a href="#time" onClick={() => setIsMenuOpen(false)}>Time</a>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Voltar ao Plantel</Link>
        <a href="#contato" className="plab-mobile-menu__cta" onClick={() => setIsMenuOpen(false)}>
          Fale com o time
        </a>
      </nav>

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

      <section className="plab-projetos" id="atuacao">
          <div className="plab__inner">
            <span className="plab-section__tag">Projetos</span>
            <h2 className="plab-section__title">O que construímos</h2>
            <p className="plab-section__text">
              Produtos digitais desenvolvidos e mantidos pelo time do Plantel Labs.
            </p>

            <div className="plab-projetos__grid">
              {projetos.map((projeto) => (
                <a
                  key={projeto.nome}
                  href={projeto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plab-card"
                >
                  <div className="plab-card__thumb">
                    <img src={projeto.imagem} alt={projeto.nome} loading="lazy" />
                  </div>

                  <div className="plab-card__body">
                    <h3 className="plab-card__title">{projeto.nome}</h3>
                    <p className="plab-card__desc">{projeto.descricao}</p>

                    <div className="plab-card__tags">
                      {projeto.tags.map((tag) => (
                        <span key={tag} className="plab-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <span className="plab-card__link">
                    Acessar projeto <em>›</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
      </section>

      <footer className="plab-footer">
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
              <ul className="plab-footer__list plab-footer__list--arrow">
                <li><a href="#atuacao">Atuação</a></li>
                <li><a href="#video">Vídeo</a></li>
                <li><a href="#time">Time</a></li>
                <li><Link to="/">Página inicial</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="plab-footer__title">Redes Sociais</h4>
              <ul className="plab-footer__list">
                <li><a href="#" aria-label="Instagram">Instagram</a></li>
                <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
                <li><a href="#" aria-label="GitHub">GitHub</a></li>
              </ul>
            </div>

             <div>
              <h4 className="plab-footer__title">Contato</h4>
              <ul className="plab-footer__list plab-footer__list--dot">
                <li><a href="mailto:plantelduvidas@plantel.com.br">plantelduvidas@plantel.com.br</a></li>
              </ul>
            </div>
          </div>
          
          
          <div className="plab-footer__bottom">
            <span>© 2026 Plantel Labs. Todos os direitos reservados.</span>
          </div>
      </footer>
    </body>
  );
}