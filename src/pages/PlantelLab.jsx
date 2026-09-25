// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo_plantel1.png";
import membros from "../data/membros.js";
import { useRevelar } from "../hooks/useScrollRevealLabs.js";
import MembroCard from "../components/plantel_Labs/membroCard.jsx";
import "../styles/plantelLabs/plantelLab.css";
import projetos  from "../data/projetos.js";
import PlantelBackdrop from "../components/plantel_Labs/PlantelBackdrop.jsx";
import BacktoTop from "../components/BackToTop.jsx";
import Footer from "../components/plantel_Labs/footerLabs.jsx";
import Header from "../components/plantel_Labs/headerLabs.jsx";
import { Code2, Users, Lightbulb, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const linkWhatsapp = `https://wa.me/5524999216327?text=${encodeURIComponent(
  "Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs."
)}`;


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



export default function PlantelLab() {
  useRevelar();
   const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(timer);
  }, [toast]);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   
      <div className="plab">
        <PlantelBackdrop />
        <BacktoTop/>
        <Header />
        <section className="plab-intro " id="home">
            <h1 className="plab-intro__title revelar">
              O time por trás dos produtos <span>digitais</span> do Plantel
            </h1>
            <p className="plab-intro__text revelar">
              O Plantel Labs é a área responsável por projetar, desenvolver e
              manter as plataformas que sustentam a operação do Plantel. Aqui você
              conhece as pessoas do time e as frentes em que atuamos.
            </p>
            <div className="plab-intro__actions revelar">
              <a href="" className="plab-btn plab-btn--ghost" onClick={(e) => irPara(e, "#time")}>
                Ver time
              </a>
            </div>
        </section>
        <section className="plab-projetos" id="projetos">

          


          <h2 className="plab-projetos__title revelar">Nossos Projetos</h2>

          <div className="plab-projetos__list">
            {projetos.map((projeto) => (
              <article key={projeto.nome} className="plab-projeto revelar">
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
                  
                  {projeto.url ? (
                    <a
                      href={projeto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="plab-projeto__btn"
                    >
                      Acessar projeto <em>→</em>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="plab-projeto__btn plab-projeto__btn--indisponivel"
                      onClick={() => setToast("Indisponível.")}
                    >
                      Em breve <em>→</em>
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>


          <div className="plab-atuacao revelar">
            <h2 className="plab-atuacao__title">
              Da ideia ao <span>impacto</span>
            </h2>
            <p className="plab-atuacao__text">
              Atuamos em todo o ciclo de desenvolvimento, criando soluções que geram
              valor para o Plantel e para as pessoas que fazem parte do nosso ecossistema.
            </p>

            <div className="plab-atuacao__grid">
              <div className="plab-pilar">
                <div className="plab-pilar__icone"><Code2 size={22} /></div>
                <h3>Desenvolvimento</h3>
                <p>Construímos plataformas robustas, escaláveis e seguras.</p>
              </div>

              <div className="plab-pilar">
                <div className="plab-pilar__icone"><Users size={22} /></div>
                <h3>Suporte e Evolução</h3>
                <p>Mantemos e evoluímos os sistemas que sustentam a operação.</p>
              </div>

              <div className="plab-pilar">
                <div className="plab-pilar__icone"><Lightbulb size={22} /></div>
                <h3>Inovação</h3>
                <p>Exploramos novas tecnologias para resolver desafios reais.</p>
              </div>

              <div className="plab-pilar">
                <div className="plab-pilar__icone"><BarChart3 size={22} /></div>
                <h3>Impacto</h3>
                <p>Transformamos tecnologia em resultados para a educação.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="plab-time" id="time">
            
          <div className="plab-time__header">

            <h2 className="plab-time__title revelar">
              As pessoas por trás das <span>tecnologias</span>
            </h2>

            <p className="plab-time__text revelar">
              Um time multidisciplinar responsável por transformar
              ideias, necessidades e desafios em Soluções.
            </p>

          </div>


          <div className="plab-time__grid revelar">

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
            <div className="plab-cta__text revelar">
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

            <div className="plab-cta__media revelar">
              <img src="/images/time-plantel.png" alt="Equipe do Plantel Labs" loading="lazy" />
            </div>
          </div>
        </section>
        <Footer />
        {toast && <div className="plab-toast" role="status">{toast}</div>}
      </div>
  );
}