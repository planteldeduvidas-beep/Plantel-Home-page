import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const professores = [
  {
    id: "jp",
    name: "Prof. Josoaldo Pires",
    handle: "@proff_jp",
    category: "exatas",
    description: "Professor de física nível ITA, IME, EFOMM. Materiais de qualidade!",
    imageSrc: "/fotos-professores/JP-foto.jpeg",
  },
  {
    id: "germano",
    name: "Prof. Mateus Germano",
    handle: "@mateus.germano.2001",
    category: "exatas",
    description: "Materiais para concursos militares. Resumos e Apostilas de todas as matérias.",
    fotoClassName: "foto-germano",
    imageSrc: "/fotos-professores/germano.png",
  },
  {
    id: "pestana",
    name: "Prof. João Pestana",
    handle: "@qgdopestana",
    category: "humanas",
    description:
      "Sou especialista em História para Concursos Militares. Atuo há mais de 15 anos ajudando centenas de alunos a conquistar o gabarito nas provas de história da ESA, EsPCEx e CN.",
    imageSrc: "/fotos-professores/pestana.jpeg",
  },
  {
    id: "canellas",
    name: "Prof. William Canellas",
    handle: "@williamcanellas",
    category: "exatas",
    description:
      "Mestre pelo IMPA, autor do livro 'Matemática para o infinito e além'. Grande parceiro do Plantel de Dúvidas.",
    fotoClassName: "foto-canellas",
    imageSrc: "/fotos-professores/canellas.webp",
  },
  {
    id: "filipe",
    name: "Prof. Claudio Filipe",
    handle: "@filipenasexatasoficial",
    category: "exatas",
    description:
      "Saber cada dia um pouco mais e usar o conhecimento todos os dias para o bem, esse é o meu verdadeiro caminho. Licenciado em matemática.",
    fotoClassName: "foto-filipe",
    imageSrc: "/fotos-professores/filipedasexatas.jpg",
  },
  {
    id: "heitor",
    name: "Prof. Heitor Gelli",
    handle: "@o.mestredoingles",
    category: "linguagens",
    description:
      "Para aqueles que estão planejando aprender inglês, do básico até o avançado. Bem como um excelente preparo para as provas da EFOMM e da EN.",
    fotoClassName: "foto-heitor",
    imageSrc: "/fotos-professores/Foto - Heitor.png",
  },
  {
    id: "lucas",
    name: "Prof. Lucas Ribeiro",
    handle: "@profribeirolucas",
    category: "linguagens",
    description:
      "Professor de português. Criador do método OMP - O método Português. Milhares de alunos aprovados nos principais concursos militares do país.",
    fotoClassName: "foto-lucas",
    imageSrc: "/fotos-professores/foto-lucas.jpeg",
  },
];

const filters = [
  { id: "all", label: "TODOS" },
  { id: "exatas", label: "EXATAS" },
  { id: "humanas", label: "HUMANAS" },
  { id: "linguagens", label: "LINGUAGENS" },
];

export default function SectionProfessores() {
  const [filter, setFilter] = useState("all");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const visibleProfessores = useMemo(() => {
    if (filter === "all") return professores;
    return professores.filter((professor) => professor.category === filter);
  }, [filter]);

  return (
    <section id="professores" className="secao">
      <h2>Professores Parceiros</h2>
      <div className="line"></div>
      <p className="text-info-out">
        Contamos com uma equipe de mestres altamente qualificados e dedicados a
        apoiar sua trajetória acadêmica.
      </p>

      <div className="filters">
        {filters.map((item) => (
          <button
            key={item.id}
            className={`filter-btn${filter === item.id ? " active" : ""}`}
            onClick={() => setFilter(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="swiper mySwiper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {visibleProfessores.map((professor) => (
            <SwiperSlide key={professor.id} className="card-professor">
              <div
                className={`foto-professor ${professor.fotoClassName || ""}`}
              >
                <img src={professor.imageSrc} alt={professor.name} />
                {/*
                  Como colocar a foto do professor:
                  1) Coloque o arquivo em public/fotos-professores/
                  2) Troque src="#" por src="/fotos-professores/ARQUIVO.jpg"
                */}
              </div>
              <div className="info-professor">
                <h3>{professor.name}</h3>
                <h2>{professor.handle}</h2>
                <p>{professor.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={prevRef} className="swiper-button-prev" type="button" />
        <button ref={nextRef} className="swiper-button-next" type="button" />
      </div>
    </section>
  );
}
