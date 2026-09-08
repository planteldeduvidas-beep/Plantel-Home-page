import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./SectionComunidades.css";

const communities = [
  {
    id: "exatas",
    title: "Plantel de Exatas",
    emoji: "",
    imageAlt: "Logo Plantel de Exatas",
    imageSrc: "/images/plantel-comunidades.jpg",
    text:
      "Comunidade colaborativa das ciências exatas onde todos têm voz e espaço para aprender. Dúvidas são o ponto de partida para debates ricos e acessíveis.",
    bullets: [
      "Apoio dos professores qualificados",
      "Monitores de plantão",
      "Resolução colaborativa",
    ],
  },
  {
    id: "listas",
    title: "Plantel Listas",
    imageAlt: "Logo Plantel Listas",
    imageSrc: "/images/LogoListas.png",
    text:
      "A aura do Plantel. Caminho máximo para quem busca materiais de qualidade para se aprofundar e praticar os estudos nos mais diversos assuntos dos vestibulares.",
    extra:
      "DRIVE do Plantel Listas. Todos os conteúdos reunidos em um só lugar. Confira na bio do Instagram. +300 listas organizadas por assunto, provas de várias bancas militares, materiais de professores parceiros, tudo atualizado e gratuito.",
  },
  {
    id: "redacao",
    title: "Plantel de Redação",
    imageAlt: "Logo Plantel de Redação",
    imageSrc: "/images/plantel-comunidades.jpg",
    text:
      "Ambiente voltado ao desenvolvimento da redação, repertório crítico e prática textual, com análises de diferentes mestres e participação ativa dos alunos.",
    bullets: [
      "Professores com anos de experiência",
      "Recomendações de conteúdos culturais e relevantes",
      "Discussões sobre temas contemporâneos",
      "Exercícios de reescrita de introdução, desenvolvimento e conclusão",
    ],
  },
  {
    id: "humanas",
    title: "Plantel de Humanas e Linguagens",
    imageAlt: "Logo Plantel de Humanas e Linguagens",
    imageSrc: "/images/plantel-comunidades.jpg",
    text:
      "Enfoque na resolução de questões das Escolas Militares e Vestibulares de modo geral.",
    bullets: ["EsPCEx", "ESA", "Colégio Naval", "Demais vestibulares"],
  },
  {
    id: "compra-vendas",
    title: "Plantel: Compra/Vendas de materiais",
    imageAlt: "Logo Plantel Compra/Vendas",
    imageSrc: "/images/plantel-comunidades.jpg",
    text:
      "Espaço de divulgação de materiais relativos ao campo dos estudos: livros, mesas digitalizadoras, tablets e etc.",
    extra:
      "Não nos responsabilizamos por golpes. Realizem transações em plataformas de confiança, pois haverá seguro contra golpe.",
  },
  {
    id: "iteanos",
    title: "Grupo Pré-Iteanos",
    imageAlt: "Logo Grupo Pré-Iteanos",
    imageSrc: "/images/LogoIteano.png",
    text: "Enfoque na resolução de questões de ITA/IME + Networking.",
    bullets: ["+580 membros", "Questões para investir fosfato"],
  },
  {
    id: "networking",
    title: "Plantel Networking",
    imageAlt: "Logo Plantel Networking",
    imageSrc: "/images/plantel-comunidades.jpg",
    text:
      "Esclarecer dúvidas gerais sobre concursos e estudos, com espaço para conversas moderadas e saudáveis.",
    bullets: ["+250 membros"],
  },
];

export default function SectionComunidades() {
  const trackRef = useRef(null);
  const dotsRef = useRef(null);
  const elapsedRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    const card = track.children[index];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, []);

  useEffect(() => {
    elapsedRef.current = 0;
    dotsRef.current.style.setProperty("--community-progress", "0");
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;
    let frame;
    let previousTime = performance.now();
    const tick = (now) => {
      const delta = now - previousTime;
      previousTime = now;
      const bounds = trackRef.current.getBoundingClientRect();
      if (!document.hidden && bounds.bottom > 0 && bounds.top < window.innerHeight) {
        elapsedRef.current += Math.min(delta, 100);
        dotsRef.current.style.setProperty("--community-progress", String(Math.min(elapsedRef.current / 6000, 1)));
        if (elapsedRef.current >= 6000) {
          goTo((activeIndex + 1) % communities.length);
          return;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex, isPaused, goTo]);

  const updateActive = () => {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let distance = Infinity;
    Array.from(track.children).forEach((card, index) => {
      const nextDistance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (nextDistance < distance) {
        closest = index;
        distance = nextDistance;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <section id="comunidades" className="secao">
      <h2>Comunidades</h2>
      <div className="line"></div>
      <div className="container-numbers">
        <div className="numbers">
          <div className="numbers-text">
            +3000
          </div>
          <div className="numbers-text-label">membros</div>
        </div>

        <div className="numbers">
          <div className="numbers-text">2</div>
          <div className="numbers-text-label">comunidades</div>
        </div>

        <div className="numbers">
          <div className="numbers-text">9</div>
          <div className="numbers-text-label">grupos</div>
        </div>
      </div>

      <p className="text-info-out">
        Por meio das nossas comunidades, conseguimos proporcionar as mais diversas
        ajudas ao estudante, sanar dúvidas, oferecer materiais de qualidade, apoio
        dos professores e dos monitores de plantão, networking com aprovados e
        muito mais.
      </p>

      <div className="community-carousel" role="region" aria-roledescription="carrossel" aria-label="Grupos do Plantel">
      <div
        className="community-track"
        ref={trackRef}
        onScroll={updateActive}
        onPointerDown={() => setIsPaused(true)}
        onFocus={() => setIsPaused(true)}
        tabIndex={0}
        aria-label="Use as setas para explorar as comunidades"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(Math.max(0, Math.min(communities.length - 1, activeIndex + (event.key === "ArrowRight" ? 1 : -1))));
          }
        }}
      >
        {communities.map((community, index) => (
          <article key={community.id} className={`community-slide${index === activeIndex ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${communities.length}: ${community.title}`}>
            <div className="community-slide-heading">
              <img
                src={community.imageSrc}
                className="community-slide-logo"
                alt={community.imageAlt}
              />
              {/*
                Como colocar a imagem:
                1) Coloque o arquivo em public/images/
                2) Troque src="#" por src="/images/NOME_DA_IMAGEM.png"
              */}
              <div>
                <span className="community-slide-label">Aprenda. Compartilhe. Evolua.</span>
                <h3>{community.title}</h3>
              </div>
            </div>
            <p className="community-slide-description">{community.text}</p>

            {community.bullets && (
              <ul className="community-slide-benefits">
                {community.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {community.extra && (
              <div className="community-slide-extra">
                <p>{community.extra}</p>
              </div>
            )}
          </article>
        ))}
      </div>
      <div className="community-controls">
        <div className="community-dots" ref={dotsRef}>
          {communities.map((community, index) => (
            <button key={community.id} type="button" aria-label={`Ver ${community.title}`} aria-current={activeIndex === index ? "true" : undefined} onClick={() => { setIsPaused(true); goTo(index); }}><span /></button>
          ))}
        </div>
        <button
          className="community-playback"
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? "Retomar carrossel automático" : "Pausar carrossel automático"}
          title={isPaused ? "Retomar" : "Pausar"}
        >
          {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
        </button>
      </div>
      <p className="community-status" aria-live={isPaused ? "polite" : "off"} aria-atomic="true">{activeIndex + 1} de {communities.length} — {communities[activeIndex].title}</p>
      </div>
    </section>
  );
}
