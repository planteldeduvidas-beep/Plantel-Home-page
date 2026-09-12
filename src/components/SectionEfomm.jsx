import { ArrowUpRight } from "lucide-react";
import "./SectionEfomm.css";
import { useEffect, useRef, useState } from "react";

const EFOMM_URL = "https://plantel-efomm.vercel.app/";

export default function SectionEfomm() {
  const cardRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const mobileMotion = window.matchMedia("(max-width: 768px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = cardRef.current.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      setHighlighted(mobileMotion.matches && Math.abs(center - window.innerHeight / 2) < window.innerHeight * 0.3);
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
    <section id="efomm" className="efomm-section" aria-labelledby="concursos-heading">
      <div className="efomm-section-heading">
        <h2 id="concursos-heading">Concursos e cupons</h2>
        <div className="line" />
        <p>
          Conheça os concursos e encontre seu próximo objetivo. Clique no card
          para saber mais, conhecer cursos preparatórios e conferir cupons de desconto.
        </p>
      </div>
      <a ref={cardRef} className={`efomm-card${highlighted ? " is-scroll-highlighted" : ""}`} href={EFOMM_URL}>
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
