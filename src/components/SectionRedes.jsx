const redes = [
  {
    id: "instagram",
    title: "Instagram",
    description:
      "Acompanhe nossas divulgações, novidades e acesso ao drive do Plantel no link da bio.",
    href: "https://www.instagram.com/planteldeduvidas/",
    imageSrc: "/images/instaLogo.png",
  },
  {
    id: "discord",
    title: "Discord",
    description:
      "Espaço criado para aqueles que buscam fortificar seus estudos com metas diárias e mensais bem como participar de sessões de estudo.",
    href: "https://discord.gg/dbKeAz6Y",
    imageSrc: "/images/discord.png",
  },
  {
    id: "youtube",
    title: "YouTube",
    description: "Aulas, resoluções e conteúdos voltados para o ramo militar.",
    href: "https://www.youtube.com/@PlanteldeDuvidas",
    imageSrc: "/images/youtubeLogo.png",
  },
  {
    id: "whatsapp-1",
    title: "WhatsApp",
    description: "Comunidade do WhatsApp 1. Acesso ao Plantel Ψ",
    href: "https://chat.whatsapp.com/KMwYVUctbqh1sPtlhcs3ip",
    imageSrc: "/images/LogoZap.png",
  },
  {
    id: "whatsapp-2",
    title: "WhatsApp",
    description: "Comunidade do WhatsApp 2. Acesso ao Plantel Σ",
    href: "https://chat.whatsapp.com/G8CA8y1gvKlJ7I4tKMO7dZ",
    imageSrc: "/images/LogoZap.png",
  },
  {
    id: "telegram",
    title: "Telegram",
    description: "Extensão das atividades que ocorrem nas outras comunidades.",
    href: "https://t.me/plantelduvidas",
    imageSrc: "/images/telegram.png",
  },
];

import { useEffect, useRef, useState } from "react";

export default function SectionRedes() {
  const cardsRef = useRef(null);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const mobileMotion = window.matchMedia("(max-width: 768px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!mobileMotion.matches) {
        setHighlighted(null);
        return;
      }
      let closest = null;
      let distance = Infinity;
      Array.from(cardsRef.current.children).forEach((card, index) => {
        const bounds = card.getBoundingClientRect();
        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
        const delta = Math.abs(bounds.top + bounds.height / 2 - window.innerHeight / 2);
        if (delta < distance) {
          closest = index;
          distance = delta;
        }
      });
      setHighlighted(closest);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mobileMotion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mobileMotion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section id="redes" className="secao">
      <h2>Redes Sociais</h2>
      <div className="line"></div>

      <div className="container-redes" ref={cardsRef}>
        {redes.map((rede, index) => (
          <div
            key={rede.id}
            className={`box-redes${highlighted === index ? " is-scroll-highlighted" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => window.open(rede.href, "_blank")}
            onKeyDown={(event) => {
              if (event.key === "Enter") window.open(rede.href, "_blank");
            }}
          >
            <img
              src={rede.imageSrc}
              alt={rede.title}
              className={`rede-icon${["youtube", "whatsapp-1", "whatsapp-2", "telegram"].includes(rede.id) ? " rede-icon-compact" : ""}`}
              width="90"
              height="90"
            />
            {/*
              Como colocar a imagem:
              1) Coloque o arquivo em public/images/
              2) Troque src="#" por src="/images/NOME_DA_IMAGEM.png"
            */}
            <h3 className="title-rede">{rede.title}</h3>
            <p className="text-info-in-inside">{rede.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
