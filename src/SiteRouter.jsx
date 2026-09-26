import { lazy, Suspense } from 'react';
import App from './App.jsx';
import { t } from './i18n/index.js';

const PlantelLab = lazy(() => import('./pages/PlantelLab.jsx'));
const YouTubePage = lazy(() => import('./pages/YouTubePage.jsx'));

export default function SiteRouter() {
  const isLabs = /^\/plantel-?labs?\/?$/.test(window.location.pathname);
  const isYouTube = /^\/youtube\/?$/.test(window.location.pathname);
  return <Suspense fallback={<p role="status">{t('Carregando…')}</p>}>
    {isYouTube ? <YouTubePage /> : isLabs ? <PlantelLab /> : <App />}
  </Suspense>;
}
