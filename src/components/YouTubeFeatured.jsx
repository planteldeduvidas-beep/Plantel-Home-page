import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import videos from '../data/youtubeVideos.json';
import { t } from '../i18n/index.js';

export default function YouTubeFeatured({ playing, reduced }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const moving = useRef(false);
  const move = useCallback((step) => {
    if (moving.current) return;
    if (reduced) { setIndex(value => (value + step + videos.length) % videos.length); return; }
    moving.current = true;
    setDirection(step);
  }, [reduced]);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => { if (!document.hidden) move(1); }, 4000);
    return () => clearInterval(timer);
  }, [playing, move, index]);
  useEffect(() => {
    if (!direction) return;
    const timer = setTimeout(() => {
      setIndex(value => (value + direction + videos.length) % videos.length);
      setDirection(0);
      moving.current = false;
    }, 650);
    return () => clearTimeout(timer);
  }, [direction]);
  return <div className="yt-feature-slider" role="region" aria-label={t('Vídeos')}>
    <div className={`yt-feature-track${direction ? ' is-moving' : ''}`} style={{ transform: `translateX(calc(-32vw ${direction === 1 ? '- 64vw - 16px' : direction === -1 ? '+ 64vw + 16px' : ''}))` }}>
      {[-1, 0, 1].map(offset => {
        const video = videos[(index + offset + videos.length) % videos.length];
        return <article className="yt-feature" key={offset} aria-hidden={offset !== 0} inert={offset !== 0}>
          <img className="yt-feature-image" src={video.image} alt="" />
          <div className="yt-feature-copy">
            <span>PLANTEL NO YOUTUBE</span>
            <h2 id={offset === 0 ? 'yt-title' : undefined}>{video.title}</h2>
            <a href={video.href} target="_blank" rel="noopener noreferrer"><Play size={15} fill="currentColor" aria-hidden="true" />{t('Assistir agora')}</a>
          </div>
        </article>;
      })}
    </div>
    <button className="yt-feature-arrow yt-feature-prev" type="button" onClick={() => move(-1)} aria-label={t('Anterior')}><ChevronLeft /></button>
    <button className="yt-feature-arrow yt-feature-next" type="button" onClick={() => move(1)} aria-label={t('Próximo')}><ChevronRight /></button>
  </div>;
}
