import { Link } from "react-router-dom";
import logo from "../../assets/logo_plantel1.png";

export default function PlabFooter() {
  return (
    <footer className="plab-footer">
    {
    
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
              <ul className="plab-footer__list plab-footer__list--dot">
                <li><a href="#">Inicio</a></li>
                <li><a href="#atuacao">Projetos</a></li>
                <li><a href="#time">Time</a></li>
                <li><Link to="/">Página inicial</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="plab-footer__title">Redes Sociais</h4>
              <ul className="plab-footer__list">
                <li>
                  <img src="src/assets/iconInsta.svg" alt="" /><a href="https://www.instagram.com/planteldeduvidas/" aria-label="Instagram" target="_blank">Instagram</a></li>
                <li>
                  <img src="src/assets/iconTelegram.svg" alt="" /><a href="https://t.me/plantelduvidas" aria-label="LinkedIn" target="_blank">Telegram</a></li>
                <li>
                  <img src="src/assets/iconGithub.svg" alt="" /><a href="#" aria-label="GitHub" target="_blank">GitHub</a>
                </li>
                <li>
                  <img src="src/assets/iconYoutube.svg" alt="" /><a href="https://www.youtube.com/@PlanteldeDuvidas" aria-label="GitHub" target="_blank">YouTube</a>
                </li>
              </ul>
            </div>
             <div>
              <h4 className="plab-footer__title">Contato</h4>
              <ul className="plab-footer__list">
                <li><img src="src/assets/iconEmail.svg" alt="" /><a href="mailto:plantelduvidas@plantel.com.br">plantelduvidas@plantel.com.br</a></li>
                <li><img src="src/assets/iconEmail.svg" alt="" /><a href="mailto:plantelduvidas@plantel.com.br">planteldeduvidas@plantel.com.br</a></li>
              </ul>
            </div>
          </div>
          
          
          <div className="plab-footer__bottom">
            <span>© 2026 Plantel Labs. Todos os direitos reservados.</span>
          </div>
      </footer>
      }
    </footer>
  );
}