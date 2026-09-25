import { t } from "../../i18n/index.js";
import email from "../../assets/iconEmail.svg";
import youtube from "../../assets/iconYoutube.svg";
import github from "../../assets/iconGithub.svg";
import insta from "../../assets/iconInsta.svg";

import logo from "../../assets/logo_plantel1.png";


const irPara = (event, id) => {
  event.preventDefault();
  const alvo = document.querySelector(id);
  if (!alvo) return;
  window.scrollTo({
    top: alvo.offsetTop - 90,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });

};


export default function PlabFooter() {
  return (
    <footer className="plab-footer">
          <div className="plab-footer__grid">
            <div>
              <img src={logo} alt="Plantel Labs" className="plab-footer__logo  revelar" />
              <p className="plab-footer__about revelar">
                Plantel Labs é o núcleo de tecnologia do Plantel, responsável
                pelo desenvolvimento das plataformas digitais do projeto.
              </p>
            </div>

            <div>
              <h4 className="plab-footer__title revelar">Navegação</h4>
              <ul className="plab-footer__list plab-footer__list--dot revelar">
                <li><a href="#home" onClick={(e) => irPara(e, "#home")}>Inicio</a></li>
                <li><a href="#projetos" onClick={(e) => irPara(e, "#projetos")}> Projetos</a></li>
                <li><a href="#time" onClick={(e) => irPara(e, "#time")}>Time</a></li>
                <li><a href="/">Página inicial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="plab-footer__title revelar">Redes Sociais</h4>
              <ul className="plab-footer__list revelar">
                <li>
                  <img src={insta} alt="" /><a href="https://www.instagram.com/plantellabs?stkn=d2Mzbml4OWZkbWZy" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li>
                  <img src={github} alt="" /><a href="https://github.com/planteldeduvidas-beep" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <img src={youtube} alt="" /><a href="https://www.youtube.com/@PlanteldeDuvidas" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
              </ul>
            </div>
             <div>
              <h4 className="plab-footer__title revelar">Contato</h4>
              <ul className="plab-footer__list revelar">
                <li><img src={email} alt="" /><a href="mailto:plantelduvidas@plantel.com.br">plantelduvidas@plantel.com.br</a></li>
                <li><img src={email} alt="" /><a href="mailto:planteldeduvidas@plantel.com.br">planteldeduvidas@plantel.com.br</a></li>
              </ul>
            </div>
          </div>
          
          
          <div className="plab-footer__bottom ">
            <span>© 2026 Plantel Labs. Todos os direitos reservados.</span>
          </div>
      <a className="plab-language-link" href="/#idiomas">{t("Escolha seu idioma")}</a></footer>
  );
}