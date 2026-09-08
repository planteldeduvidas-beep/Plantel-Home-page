const parceiros = [
  {
    id: "cosseno",
    name: "Cosseno",
    link: "https://cosseno.com",
    className: "logo-parceiros logo-cosseno",
    label: "Plataforma do Cosseno",
    imageSrc: "/Logo_parceiros/cosseno_logo.jpeg",
  },
  {
    id: "fenix",
    name: "Fênix",
    link: "https://fenixconcursosmilitares.com.br/",
    className: "logo-parceiros logo-fenix",
    label: "Fênix Concursos Militares",
    imageSrc: "/Logo_parceiros/logofenix.png",
  },
  {
    id: "puppin",
    name: "Thay Puppin",
    links: [
      { label: "EFOMM - TURMA 2", href: "https://pay.kiwify.com.br/OyFUYjX?afid=1vBM9oo8" },
      { label: "CLUBE DA REDAÇÃO", href: "https://pay.kiwify.com.br/ctsiQfg?afid=W5fMhBRq" },
    ],
    className: "logo-parceiros",
    label: "Mentoria de Redação, prof. Thay Puppin",
    imageSrc: "/Logo_parceiros/logo-puppin.png",
  },
  
];

import { ArrowUpRight } from "lucide-react";

export default function SectionParceiros() {
  return (
    <section id="parceiros" className="secao">
      <h2>Parceiros</h2>
      <div className="line"></div>
      <p className="text-info-out">
        Nossos mais singelos agradecimentos aos parceiros que promovem e
        contribuem para a comunidade do Plantel de Dúvidas. Entre nas
        comunidades para ter acesso aos benefícios exclusivos oferecidos pelos
        parceiros! <strong id="text-cupom">Use o cupom: PLANTEL10</strong>
      </p>

      {parceiros.map((parceiro) => (
        <section
          key={parceiro.id}
          className="hero-parceiro"
          data-parceiro={parceiro.id}
        >
          <img
            src={parceiro.imageSrc}
            alt={parceiro.name}
            className={parceiro.className}
            onClick={parceiro.link ? () => window.open(parceiro.link, "_blank") : undefined}
          />
          {/*
            Como colocar a imagem do parceiro:
            1) Coloque o arquivo em public/Logo_parceiros/
            2) Troque src="#" por src="/Logo_parceiros/ARQUIVO.png"
          */}
          {parceiro.label && (
            <p className="hero-parceiro-text">{parceiro.label}</p>
          )}
          {parceiro.links && (
            <div className="parceiro-links">
              {parceiro.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </section>
      ))}

      <h2
        style={{
          fontFamily: "'Pathway Gothic One', sans-serif",
          textAlign: "center",
          fontSize: "2.5em",
          color: "green",
          marginBottom: "20px",
        }}
      >
        Quer fazer parte dos nossos parceiros?
      </h2>
      <p className="parceria-convite">
        Seu trabalho pode ajudar nossos estudantes a ir mais longe? Se você oferece
        cursos, materiais ou mentorias para vestibulares e concursos, venha somar
        à comunidade do Plantel. Fale com a nossa equipe para apresentar sua proposta
        e levar novas oportunidades de preparação aos nossos alunos.
      </p>
      <a
        className="parceria-whatsapp"
        href={`https://wa.me/5524999216327?text=${encodeURIComponent("Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pela home page do Plantel.")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero ser parceiro
        <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
      </a>
    </section>
  );
}
