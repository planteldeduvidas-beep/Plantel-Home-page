import { t } from '../i18n/index.js';
import { useEffect, useState } from 'react';
import './ReadingControls.css';

export default function ReadingControls() {
  const [size, setSize] = useState(() => {
    try {
      const saved = Number(localStorage.getItem('plantel-font-size'));
      return [100, 110, 120, 130, 140, 150].includes(saved) ? saved : 100;
    } catch { return 100; }
  });
  useEffect(() => {
    document.documentElement.style.setProperty('--reading-size', `${size}%`);
    document.documentElement.dataset.readingEnlarged = String(size > 100);
    try { localStorage.setItem('plantel-font-size', String(size)); } catch { /* Preferência válida também sem armazenamento. */ }
    return () => {
      document.documentElement.style.removeProperty('--reading-size');
      delete document.documentElement.dataset.readingEnlarged;
    };
  }, [size]);

  return <div className="reading-controls" role="group" aria-label={t("Tamanho do texto")}>
    <button type="button" aria-label={t("Aumentar fonte")} title={t("Aumentar fonte")} disabled={size === 150} onClick={() => setSize(value => Math.min(150, value + 10))}>A+</button>
    <button type="button" aria-label={t('Restaurar tamanho da fonte. Atual: {size}%', { size })} title={t("Restaurar tamanho original")} onClick={() => setSize(100)} className="reading-reset">{size}%</button>
    <button type="button" aria-label={t("Diminuir fonte")} title={t("Diminuir fonte")} disabled={size === 100} onClick={() => setSize(value => Math.max(100, value - 10))}>A−</button>
    <span className="reading-announcement" role="status">{t("Tamanho do texto:")} {size}%</span>
  </div>;
}
