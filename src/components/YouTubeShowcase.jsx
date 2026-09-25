import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { t } from '../i18n/index.js';
import './YouTubeShowcase.css';

const channel = 'https://www.youtube.com/@PlanteldeDuvidas';
const panels = [
  { label: 'O canal do Plantel', title: 'Seu próximo passo começa com uma boa ideia.', action: 'Conhecer o canal', path: '', number: '01', kind: 'channel' },
  { label: 'Vídeos', title: 'Dê play na sua preparação.', action: 'Explorar vídeos', path: '/videos', number: '02', kind: 'videos' },
  { label: 'Transmissões', title: 'Mais perto de quem ensina.', action: 'Ver transmissões', path: '/streams', number: '03', kind: 'streams' },
];

export default function YouTubeShowcase() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const go = (index) => {
    const item = track.current.children[index];
    track.current.scrollTo({ left: item.offsetLeft - track.current.children[0].offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return <div className="youtube-showcase" aria-labelledby="youtube-heading">
    <div className="youtube-intro">
      <span className="youtube-brand"><img src="/images/youtubeLogo.png" width="24" height="24" alt="" /> Plantel no YouTube</span>
      <h3 id="youtube-heading">{t('Aprender também é dar play.')}</h3>
      <p>{t('Aulas, resoluções e conteúdos voltados para o ramo militar.')}</p>
    </div>
    <div className="youtube-track" ref={track} onScroll={() => {
      const el = track.current;
      let nearest = 0;
      Array.from(el.children).forEach((item, index) => {
        if (Math.abs(item.offsetLeft - el.children[0].offsetLeft - el.scrollLeft) < Math.abs(el.children[nearest].offsetLeft - el.children[0].offsetLeft - el.scrollLeft)) nearest = index;
      });
      setActive(nearest);
    }}>
      {panels.map((panel, index) => <article className={`youtube-panel youtube-panel-${panel.kind}`} key={panel.kind} aria-label={`${index + 1} / ${panels.length}`}>
        <div className="youtube-art" aria-hidden="true"><Play /><span>{panel.number}</span></div>
        <div className="youtube-panel-copy">
          <span className="youtube-label">{t(panel.label)}</span>
          <h4>{t(panel.title)}</h4>
          <a href={channel + panel.path} target="_blank" rel="noopener noreferrer"><Play size={15} fill="currentColor" aria-hidden="true" />{t(panel.action)}</a>
        </div>
      </article>)}
    </div>
    <div className="youtube-controls">
      <div className="youtube-dots" aria-label={t('Conteúdos do YouTube')}>
        {panels.map((panel, index) => <button type="button" key={panel.kind} aria-label={t(panel.label)} aria-current={active === index ? 'true' : undefined} onClick={() => go(index)}><span /></button>)}
      </div>
      <div className="youtube-arrows">
        <button type="button" aria-label={t('Anterior')} disabled={active === 0} onClick={() => go(active - 1)}><ArrowLeft size={18} /></button>
        <button type="button" aria-label={t('Próximo')} disabled={active === panels.length - 1} onClick={() => go(active + 1)}><ArrowRight size={18} /></button>
      </div>
    </div>
  </div>;
}
