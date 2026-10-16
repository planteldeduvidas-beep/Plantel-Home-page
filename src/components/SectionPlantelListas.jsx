import { ArrowUpRight } from "lucide-react";
import "./SectionPlantelListas.css";

const PLANTEL_LISTAS_URL = "https://plantellistas.planteldeduvidas.com.br/";

export default function SectionPlantelListas() {
  return (
    <section className="listas-section" aria-labelledby="listas-heading">
      <div className="listas-inner">
        <div className="listas-copy">
          <div className="listas-brand">
            <img src="/images/plantel-listas-icon.png" alt="" />
            <div><strong>Plantel Listas</strong><span>Plantel de Dúvidas</span></div>
          </div>
          <span className="listas-eyebrow">SEUS MATERIAIS EM UM SÓ LUGAR</span>
          <h2 id="listas-heading">Encontre.<br />Estude. Avance.</h2>
          <p>Acesse o Plantel Listas e encontre o acervo para avançar na sua preparação.</p>
          <a href={PLANTEL_LISTAS_URL} target="_blank" rel="noopener noreferrer">
            Acessar Plantel Listas <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="listas-mark" aria-hidden="true">
          <img src="/images/plantel-listas-nova.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
