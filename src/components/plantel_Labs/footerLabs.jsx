import { Link } from "react-router-dom";
import logo from "../../assets/logo_plantel1.png";


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


export default function PlabFooter() {
  return (
    <footer className="plab-footer">
    {
    
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
                <li><a href="" onClick={(e) => irPara(e, "#home")}>Inicio</a></li>
                <li><a href="" onClick={(e) => irPara(e, "#projetos")}> Projetos</a></li>
                <li><a href="" onClick={(e) => irPara(e, "#time")}>Time</a></li>
                <li><Link to="/">Página inicial</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="plab-footer__title revelar">Redes Sociais</h4>
              <ul className="plab-footer__list revelar">
                <li>
                  <img src="/images/iconInsta.svg" alt="" /><a href="https://www.instagram.com/plantellabs?stkn=d2Mzbml4OWZkbWZy" aria-label="Instagram" target="_blank">Instagram</a></li>
                <li>
                  <img src="/images/iconGithub.svg" alt="" /><a href="https://github.com/planteldeduvidas-beep" aria-label="GitHub" target="_blank">GitHub</a>
                </li>
                <li>
                  <img src="/images/iconYoutube.svg" alt="" /><a href="https://www.youtube.com/@PlanteldeDuvidas" aria-label="GitHub" target="_blank">YouTube</a>
                </li>
              </ul>
            </div>
             <div>
              <h4 className="plab-footer__title revelar">Contato</h4>
              <ul className="plab-footer__list revelar">
                <li><img src="/images/iconEmail.svg" alt="" /><a href="mailto:plantelduvidas@plantel.com.br">plantelduvidas@plantel.com.br</a></li>
                <li><img src="/images/iconEmail.svg" alt="" /><a href="mailto:plantelduvidas@plantel.com.br">planteldeduvidas@plantel.com.br</a></li>
              </ul>
            </div>
          </div>
          
          
          <div className="plab-footer__bottom ">
            <span>© 2026 Plantel Labs. Todos os direitos reservados.</span>
          </div>
      </footer>
      }
    </footer>
  );
}