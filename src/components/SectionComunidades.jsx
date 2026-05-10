const communities = [
  {
    id: "exatas",
    title: "Plantel de Exatas",
    emoji: "",
    imageAlt: "Logo Plantel de Exatas",
    imageSrc: "/images/LogoExatas.png",
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
    imageSrc: "/images/LogoExatas.png",
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
    imageSrc: "/images/LogoExatas.png",
    text:
      "Enfoque na resolução de questões das Escolas Militares e Vestibulares de modo geral.",
    bullets: ["EsPCEx", "ESA", "Colégio Naval", "Demais vestibulares"],
  },
  {
    id: "compra-vendas",
    title: "Plantel: Compra/Vendas de materiais",
    imageAlt: "Logo Plantel Compra/Vendas",
    imageSrc: "/images/LogoExatas.png",
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
    imageSrc: "/images/LogoExatas.png",
    text:
      "Esclarecer dúvidas gerais sobre concursos e estudos, com espaço para conversas moderadas e saudáveis.",
    bullets: ["+250 membros"],
  },
];

export default function SectionComunidades() {
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

      <div className="container-comunidades">
        {communities.map((community) => (
          <div key={community.id} className="box-comunidade">
            <div className="box-comunidade-top">
              <img
                src={community.imageSrc}
                className="logo-comunidade"
                alt={community.imageAlt}
              />
              {/*
                Como colocar a imagem:
                1) Coloque o arquivo em public/images/
                2) Troque src="#" por src="/images/NOME_DA_IMAGEM.png"
              */}
              <h3 className="text-info-in">{community.title}</h3>
            </div>
            <p className="text-info-in-inside">{community.text}</p>

            {community.bullets && (
              <div className="text-info-in-inside">
                {community.bullets.map((item) => (
                  <div key={item}>✅ {item}</div>
                ))}
              </div>
            )}

            {community.extra && (
              <div className="box-comunidade-listas-efeito">
                <p className="text-info-in-inside">{community.extra}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
