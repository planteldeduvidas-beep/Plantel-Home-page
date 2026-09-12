// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo_plantel1.png";
import membros from "../data/membros.js";
import MembroCard from "../components/plantel_Labs/membroCard.jsx";
import "../styles/plantelLab.css";
import projetos  from "../data/projetos.js";
import PlantelBackdrop from "../components/plantel_Labs/PlantelBackdrop.jsx";
import BacktoTop from "../components/BackToTop.jsx";
import Footer from "../components/plantel_Labs/footerLabs.jsx";
import Header from "../components/plantel_Labs/headerLabs.jsx";

const linkWhatsapp = `https://wa.me/5524999216327?text=${encodeURIComponent(
  "Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs."
)}`;

export default function PlantelLab() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      <div className="plab">
        <PlantelBackdrop />
        <BacktoTop/>
        <Header />
        <section className="plab-intro" id="home">
            <h1 className="plab-intro__title">
              O time por trás dos produtos <span>digitais</span> do Plantel
            </h1>
            <p className="plab-intro__text">
              O Plantel Labs é a área responsável por projetar, desenvolver e
              manter as plataformas que sustentam a operação do Plantel. Aqui você
              conhece as pessoas do time e as frentes em que atuamos.
            </p>
            <div className="plab-intro__actions">
              <a href="#time" className="plab-btn plab-btn--ghost">
                Ver time
              </a>
            </div>
        </section>
        <section className="plab-projetos" id="projetos">
          <h2 className="plab-projetos__title">Nossos Projetos</h2>

          <div className="plab-projetos__list">
            {projetos.map((projeto) => (
              <article key={projeto.nome} className="plab-projeto">
                <div className="plab-projeto__media">
                  <img src={projeto.imagem} alt={projeto.nome} loading="lazy" />
                </div>

                <div className="plab-projeto__body">
                  <h3 className="plab-projeto__nome">{projeto.nome}</h3>
                  <p className="plab-projeto__desc">{projeto.descricao}</p>

                  <div className="plab-projeto__tags">
                    {projeto.tags.map((tag) => (
                      <span key={tag} className="plab-tag">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={projeto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plab-projeto__btn"
                  >
                    Acessar projeto <em>→</em>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="plab-time" id="time">
            
          <div className="plab-time__header">

            <h2 className="plab-time__title">
              As pessoas por trás das <span>tecnologias</span>
            </h2>

            <p className="plab-time__text">
              Um time multidisciplinar responsável por transformar
              ideias, necessidades e desafios em produtos digitais.
            </p>

          </div>


          <div className="plab-time__grid">

            {membros.map((membro) => (
              <MembroCard
                key={membro.nome}
                membro={membro}
              />
            ))}

          </div>
        </section>

        <section className="plab-cta" id="contato">
        <div className="plab-cta__inner">
          <div className="plab-cta__text">
            <h2 className="plab-cta__title">
              Quer construir algo junto com o Plantel Labs?
              <span>Fale com a nossa equipe.</span>
            </h2>
              <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="plab-cta__btn"
            >
              Agende uma conversa
            </a>
          </div>

          <div className="plab-cta__media">
            <img src="/images/time-plantel.png" alt="Equipe do Plantel Labs" loading="lazy" />
          </div>
        </div>
        </section>
        <Footer />
      </div>
  );
}