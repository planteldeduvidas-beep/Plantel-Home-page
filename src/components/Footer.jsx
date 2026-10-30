import { t } from '../i18n/index.js';
import LanguageSelector from './LanguageSelector.jsx';
import './Footer.css';

export default function Footer({ menuItems, onAnchorClick }) {
  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a className="footer-brand-heading" href="/#sobre" onClick={(event) => handleMenuClick(event, '#sobre')}>
          <img
            src="/images/plantel-nova.png"
            alt="Logo Plantel de Dúvidas"
            className="footer-logo"
          />
            <span>PLANTEL DE DÚVIDAS</span>
          </a>
          <p>{t("Transformando a educação através da colaboração.")}</p>
        </div>

        <div className="footer-links">
          <h4>{t("Navegação")}</h4>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(event) => handleMenuClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-links footer-resources">
          <h4>{t("Recursos")}</h4>
          <a href="#calendario">{t("Calendário de provas")}</a>
          <a href="/efomm/">Plantel EFOMM</a>
          <a href="/plantellabs">Plantel Labs</a>
          <a href="/privacidade">Política de Privacidade</a>
        </div>

        <div className="footer-contact">
          <h4>{t("Contato")}</h4>
          <a href="mailto:planteldeduvidas@gmail.com?subject=Contato%20-%20Plantel%20de%20D%C3%BAvidas">
            planteldeduvidas@gmail.com
          </a>
          <a href="mailto:plantelduvidas@gmail.com?subject=Contato%20-%20Plantel%20de%20D%C3%BAvidas">
            plantelduvidas@gmail.com
          </a>
          <a href="https://www.instagram.com/planteldeduvidas/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal-meta">
          <p>Copyright © 2026 Plantel de Dúvidas. Todos os direitos reservados.</p>
          <span>Brasil</span>
        </div>
        <div className="footer-legal-row">
          <div className="footer-legal-links">
            <a href="/privacidade">Política de Privacidade</a>
            <span aria-hidden="true">|</span>
            <a href="/termos-de-uso">Termos de Uso</a>
            <span aria-hidden="true">|</span>
            <a href="/politica-de-cookies">Política de Cookies</a>
            <span aria-hidden="true">|</span>
            <a href="mailto:planteldeduvidas@gmail.com?subject=Contato%20-%20Plantel%20de%20D%C3%BAvidas">Contato</a>
            <span aria-hidden="true">|</span>
            <a href="/plantellabs">Plantel Labs</a>
          </div>
          <p className="dev-team">Desenvolvido pela Equipe de TI/Desenvolvimento</p>
        </div>
      </div>
      <LanguageSelector />
    </footer>
  );
}
