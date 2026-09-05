import { ArrowUpRight } from "lucide-react";
import "./SectionEfomm.css";

// Troque pelo link definitivo quando ele estiver disponível.
const EFOMM_URL = "/efomm.html";

export default function SectionEfomm() {
  return (
    <section id="efomm" className="efomm-section" aria-labelledby="concursos-heading">
      <div className="efomm-section-heading">
        <h2 id="concursos-heading">Concursos e cupons</h2>
        <div className="line" />
        <p>
          Conheça os concursos e encontre seu próximo objetivo. Clique no card
          para saber mais, conhecer cursos preparatórios e conferir cupons de desconto.
        </p>
      </div>
      <a className="efomm-card" href={EFOMM_URL}>
        <div className="efomm-emblem">
          <img
            src="/images/efomm.png"
            alt="Brasão da EFOMM"
            width="240"
            height="240"
          />
        </div>
        <div className="efomm-copy">
          <span className="efomm-eyebrow">Conheça o concurso</span>
          <h3>EFOMM</h3>
          <p>Escola de Formação de Oficiais da Marinha Mercante</p>
          <span className="efomm-cta">
            Ver cursos e cupons <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </div>
      </a>
    </section>
  );
}
