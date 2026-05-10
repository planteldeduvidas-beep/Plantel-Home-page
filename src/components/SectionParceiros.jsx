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
    id: "japa",
    name: "Japa Math",
    link: "https://japamath.com.br/",
    className: "logo-parceiros logo-japa",
    imageSrc: "/Logo_parceiros/logo-japamath-v1.webp",
  },
  {
    id: "puppin",
    name: "Thay Puppin",
    link: "https://linktr.ee/thaylisepuppin",
    className: "logo-parceiros",
    label: "Mentoria de Redação, prof. Thay Puppin",
    imageSrc: "/Logo_parceiros/logo-puppin.png",
  },
  {
    id: "mobius",
    name: "Editora Mobius",
    link: "https://mobiuseditora.com.br/",
    className: "logo-parceiros logo-mobius",
    label: "Mobius Editora",
    imageSrc: "/Logo_parceiros/mobius.jpg",
  },
];

export default function SectionParceiros() {
  return (
    <section id="parceiros" className="secao">
      <h2>Parceiros</h2>
      <div className="line"></div>
      <p className="text-info-out">
        Nossos mais singelos agradecimentos aos parceiros que promovem e
        contribuem para a comunidade do Plantel de Dúvidas. Entre nas
        comunidades para ter acesso aos benefícios exclusivos oferecidos pelos
        parceiros!
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
            onClick={() => window.open(parceiro.link, "_blank")}
          />
          {/*
            Como colocar a imagem do parceiro:
            1) Coloque o arquivo em public/Logo_parceiros/
            2) Troque src="#" por src="/Logo_parceiros/ARQUIVO.png"
          */}
          {parceiro.label && (
            <p className="hero-parceiro-text">{parceiro.label}</p>
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
        Quer ser nosso parceiro?
      </h2>
      <div className="container-verde">
        Entre em contato pelo email contato@gmail.com
      </div>
    </section>
  );
}
