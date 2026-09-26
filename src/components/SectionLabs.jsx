import { t } from '../i18n/index.js';
import { ArrowUpRight, Layers, LayoutTemplate, Code2 } from 'lucide-react';
import './SectionLabs.css';



export default function SectionLabs() {
  return <section id="plantel-labs" className="labs-section" aria-labelledby="labs-heading">
    <div className="labs-inner">
      <div className="labs-copy">
        <span className="labs-label"><Layers size={16} /> PLANTEL LABS</span>
        <h2 id="labs-heading">{t("Seu próximo projeto digital")} <span>{t("começa aqui.")}</span></h2>
        <p>{t("Somos o time que cria as plataformas do Plantel. Desenvolvemos sites e sistemas com atenção ao design, à experiência e a cada detalhe do funcionamento.")}</p>
        <p className="labs-invite">{t("Agora, queremos construir o próximo com você.")}</p>
        <a className="labs-cta" href="/plantellabs">{t("Conhecer o Plantel Labs")} <ArrowUpRight size={17} /></a>
        <span className="labs-services">{t("Sites · Sistemas · Experiências digitais")}</span>
      </div>
      <div className="labs-showcase" aria-label={t("Projetos desenvolvidos pelo Plantel Labs")}>
        <div className="labs-window-bar" aria-hidden="true"><i /><i /><i /><span>{t("Feito pelo Plantel Labs")}</span></div>
        <div className="labs-project labs-project-main">
          <img src="/images/plantel-nova.png" width="36" height="36" alt="" />
          <span className="labs-project-kind">{t("COMUNIDADE & CONEXÃO")}</span>
          <h3>Plantel de Dúvidas</h3>
          <p>{t("Um lugar para aprender.")}<br />{t("Uma comunidade para crescer.")}</p>
          <div className="labs-project-tags"><span>Design</span><span>{t("Desenvolvimento")}</span></div>
        </div>
        <div className="labs-project labs-project-hub"><div className="labs-hub-icon"><LayoutTemplate size={23} /></div><div><h3>Plantel Hub</h3><p>{t("Pessoas, projetos e ideias em sintonia.")}</p></div><Code2 size={20} aria-hidden="true" /></div>
        <p className="labs-showcase-note">{t("Da ideia à experiência. Do nosso time para o seu.")}</p>
      </div>
    </div>
  </section>;
}
