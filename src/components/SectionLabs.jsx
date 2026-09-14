import { ArrowUpRight, Layers, LayoutTemplate, Code2 } from 'lucide-react';
import './SectionLabs.css';

// Endereço provisório para visualizar o site que a equipe está desenvolvendo.

export default function SectionLabs({ onOpen }) {
  return <section id="plantel-labs" className="labs-section" aria-labelledby="labs-heading">
    <div className="labs-inner">
      <div className="labs-copy">
        <span className="labs-label"><Layers size={16} /> PLANTEL LABS</span>
        <h2 id="labs-heading">Seu próximo projeto digital <span>começa aqui.</span></h2>
        <p>Somos o time que cria as plataformas do Plantel. Desenvolvemos sites e sistemas com atenção ao design, à experiência e a cada detalhe do funcionamento.</p>
        <p className="labs-invite">Agora, queremos construir o próximo com você.</p>
        <button className="labs-cta" type="button" onClick={onOpen}>Conhecer o Plantel Labs <ArrowUpRight size={17} /></button>
        <span className="labs-services">Sites · Sistemas · Experiências digitais</span>
      </div>
      <div className="labs-showcase" aria-label="Projetos desenvolvidos pelo Plantel Labs">
        <div className="labs-window-bar" aria-hidden="true"><i /><i /><i /><span>Feito pelo Plantel Labs</span></div>
        <div className="labs-project labs-project-main">
          <img src="/images/plantel-nova.png" width="36" height="36" alt="" />
          <span className="labs-project-kind">COMUNIDADE & CONEXÃO</span>
          <h3>Plantel de Dúvidas</h3>
          <p>Um lugar para aprender.<br />Uma comunidade para crescer.</p>
          <div className="labs-project-tags"><span>Design</span><span>Desenvolvimento</span></div>
        </div>
        <div className="labs-project labs-project-hub"><div className="labs-hub-icon"><LayoutTemplate size={23} /></div><div><h3>Plantel Hub</h3><p>Pessoas, projetos e ideias em sintonia.</p></div><Code2 size={20} aria-hidden="true" /></div>
        <p className="labs-showcase-note">Da ideia à experiência. Do nosso time para o seu.</p>
      </div>
    </div>
  </section>;
}
