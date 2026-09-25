import YouTubeFeatured from '../components/YouTubeFeatured.jsx';
import videos from '../data/youtubeVideos.json';
import { youtubePlaylists } from '../data/youtubePlaylists.js';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Play, Pause, Users, GraduationCap } from 'lucide-react';
import { t } from '../i18n/index.js';
import './YouTubePage.css';

const channel = 'https://www.youtube.com/@PlanteldeDuvidas';
const covers = videos;

function Cover({ item, duplicate = false }) {
  return <a className="yt-cover" aria-label={item.title} tabIndex={duplicate ? -1 : undefined} href={item.href} target="_blank" rel="noopener noreferrer">
    <img src={item.image} alt="" loading="lazy" />
    <span className="yt-cover-watch">{t('Assistir agora')}<Play size={15} fill="currentColor" aria-hidden="true" /></span>
  </a>;
}

export default function YouTubePage() {
  const scene = useRef(null);
  const intro = useRef(null);
  const navigation = useRef(null);
  const [ready, setReady] = useState(false);
  const [scenePaused, setScenePaused] = useState(false);
  const [subject, setSubject] = useState('Todos');
  const lessons = subject === 'Todos' ? covers : covers.filter(video => video.subject === subject);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);

  const scenePlaying = ready && !scenePaused && !reduced;

  useEffect(() => {
    const previous = document.title;
    document.title = 'YouTube · Plantel de Dúvidas';
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const introElement = intro.current;
      const introBounds = introElement.getBoundingClientRect();
      const introProgress = Math.min(1, Math.max(0, (52 - introBounds.top) / Math.max(1, introElement.offsetHeight - window.innerHeight)));
      introElement.style.setProperty('--intro-shade', String(motion.matches ? .7 : .28 + introProgress * .62));
      navigation.current.classList.toggle('is-scrolled', window.scrollY > 36);
      const element = scene.current;
      const distance = element.offsetHeight - element.querySelector('.yt-sticky').offsetHeight;
      const progress = motion.matches ? 1 : Math.min(1, Math.max(0, (52 - element.getBoundingClientRect().top) / Math.max(1, distance)));
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const carouselBounds = element.querySelector('.yt-feature-slider').getBoundingClientRect();
      const visibleHeight = Math.max(0, Math.min(carouselBounds.bottom, window.innerHeight) - Math.max(carouselBounds.top, 52));
      const carouselInView = visibleHeight >= Math.min(carouselBounds.height, window.innerHeight - 52) * .6;
      setReady(mobile ? carouselInView : progress >= .99);
      setReduced(motion.matches);
      element.style.setProperty('--zoom', String(1.5625 - progress * .5625));
      element.style.setProperty('--round', `${progress * 18}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', schedule);
    return () => {
      document.title = previous;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, []);
  return <div className="youtube-page">
    <nav ref={navigation} className="youtube-page-nav" aria-label="YouTube">
      <a className="yt-back" href="/#redes" aria-label={t('Voltar ao Plantel')}><ArrowLeft size={18} aria-hidden="true" /><span>{t('Voltar ao Plantel')}</span></a>
      <a className="yt-home-logo" href="/" aria-label="Plantel"><img src="/images/plantel-nova.png" width="28" height="28" alt="Plantel" /></a>
      <div className="yt-nav-actions"><a className="yt-watch" href={channel} target="_blank" rel="noopener noreferrer">{t('Conhecer o canal')}</a></div>
    </nav>
    <main className="youtube-page-main">
      <section ref={intro} className="yt-intro-story" aria-labelledby="yt-intro-heading">
        <div className="yt-intro-backdrop" aria-hidden="true">
          <img src={covers[0].image} alt="" fetchPriority="high" />
        </div>
        <div className="yt-story-content">
          <div className="yt-story-opening">
            <h1 id="yt-intro-heading">{t('Aprender também é dar play.')}</h1>
            <a href={covers[0].href} target="_blank" rel="noopener noreferrer"><Play size={18} fill="currentColor" aria-hidden="true" />{t('Assistir agora')}</a>
          </div>
          <div className="yt-story-messages">
            <p>{t('Aulas, resoluções e conteúdos voltados para o ramo militar.')}</p>
            <p>{t('Matemática, Português, Física e Redação. Sua preparação em um só lugar.')}</p>
            <p>{t('Acompanhe o raciocínio. Pause, volte e aprenda no seu ritmo.')}</p>
            <p>{t('Do primeiro conceito à próxima conquista. Juntos com o Plantel.')}</p>
          </div>
        </div>
      </section>
      <section className="yt-options" aria-labelledby="yt-options-title">
        <div className="yt-options-inner">
          <h2 id="yt-options-title">{t('Mais caminhos para aprender.')}</h2>
          <div className="yt-options-grid">
            <article className="yt-option">
              <span className="yt-option-label"><Play size={18} aria-hidden="true" />YouTube</span>
              <h3>{t('Dê play na sua preparação.')}</h3>
              <p>{t('Explore aulas e resoluções de questões no canal do Plantel. Escolha o conteúdo e estude no seu ritmo.')}</p>
              <a href={channel + '/videos'} target="_blank" rel="noopener noreferrer">{t('Explorar vídeos')}</a>
            </article>
            <article className="yt-option">
              <span className="yt-option-label"><Users size={18} aria-hidden="true" />{t('Comunidades')}</span>
              <h3>{t('Aprenda em comunidade')}</h3>
              <p>{t('Compartilhe dúvidas, troque experiências e encontre outros estudantes que estão na mesma jornada.')}</p>
              <a href="/#comunidades">{t('Explore os grupos')}</a>
            </article>
            <article className="yt-option">
              <span className="yt-option-label"><GraduationCap size={18} aria-hidden="true" />EFOMM</span>
              <h3>{t('Seu próximo objetivo')}</h3>
              <p>{t('Conheça as disciplinas, os parceiros e os cupons disponíveis para a sua preparação para a EFOMM.')}</p>
              <a href="/efomm/">{t('Conheça a EFOMM')}</a>
            </article>
          </div>
        </div>
      </section>
      <section ref={scene} className={`yt-scroll-scene${scenePlaying ? ' yt-playing' : ''}`} aria-labelledby="yt-title">
        <div className="yt-sticky">
          
          <div className="yt-wall">
            <YouTubeFeatured playing={scenePlaying} reduced={reduced} />
<div className="yt-marquee-window">
              <div className="yt-marquee-track">
                <div className="yt-marquee-group">{covers.map(item => <Cover key={item.id} item={item} />)}</div>
                <div className="yt-marquee-group" aria-hidden="true">{covers.map(item => <Cover key={item.id} item={item} duplicate />)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!reduced && <div className="yt-scene-controls">
        <button className="yt-pause" type="button" onClick={() => setScenePaused(value => !value)} aria-label={scenePaused ? t('Reproduzir') : t('Pausar')} aria-pressed={scenePaused}>
          {scenePaused ? <Play size={18} /> : <Pause size={18} />}
        </button>
      </div>}
      <section className="yt-catalog" aria-label={t('Conteúdos do YouTube')}>
        <h2>{t('Dê play na sua preparação.')}</h2>
        <p>{t('Aulas, resoluções e conteúdos voltados para o ramo militar.')}</p>
        <div className="yt-subject-filters" role="group" aria-label={t('Matérias')}>
          {['Todos', 'Matemática', 'Português', 'Física', 'Redação'].map(label =>
            <button type="button" key={label} aria-pressed={subject === label} aria-controls="yt-lessons" onClick={() => setSubject(label)}>{t(label)}</button>
          )}
        </div>
        <div className="yt-lessons" id="yt-lessons" key={subject}>
          {lessons.map(item => <Cover key={item.id} item={item} />)}
        </div>
        <span className="yt-filter-status" role="status">{t('Vídeos')}: {lessons.length}</span>
        <a className="yt-catalog-link" href={channel + '/videos'} target="_blank" rel="noopener noreferrer">{t('Explorar vídeos')} <ArrowUpRight size={16} /></a>
      </section>
      <section className="yt-playlists" aria-labelledby="yt-playlists-heading">
        <h2 id="yt-playlists-heading">Playlists</h2>
        <div className="yt-playlists-grid">
          {youtubePlaylists.map(playlist => <a className="yt-playlist-card" key={playlist.id} href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" rel="noopener noreferrer">
            <div className="yt-playlist-image">
              <img src={playlist.image} alt="" loading="lazy" width="480" height="360" />
              <span className="yt-playlist-badge"><Play size={16} aria-hidden="true" />Playlist</span>
            </div>
            <div className="yt-playlist-copy">
              <span>{t('Matemática')}</span>
              <h3>{playlist.title}</h3>
              <span className="yt-playlist-action">{t('Ver playlist')} <ArrowUpRight size={17} aria-hidden="true" /></span>
            </div>
          </a>)}
        </div>
      </section>
    </main>
  </div>;
}
