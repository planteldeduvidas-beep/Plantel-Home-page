import { lazy, Suspense } from 'react';
import App from './App.jsx';
import { t } from './i18n/index.js';

const PlantelLab = lazy(() => import('./pages/PlantelLab.jsx'));
const YouTubePage = lazy(() => import('./pages/YouTubePage.jsx'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const TermsPage = lazy(() => import('./pages/TermsPage.jsx'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage.jsx'));

export default function SiteRouter() {
  const isLabs = /^\/plantel-?labs?\/?$/.test(window.location.pathname);
  const isYouTube = /^\/youtube\/?$/.test(window.location.pathname);
  const isPrivacy = /^\/(privacidade|politica-de-privacidade)\/?$/.test(window.location.pathname);
  const isTerms = /^\/(termos|termos-de-uso)\/?$/.test(window.location.pathname);
  const isCookiePolicy = /^\/(cookies|politica-de-cookies)\/?$/.test(window.location.pathname);
  return <Suspense fallback={<p role="status">{t('Carregando…')}</p>}>
    {isCookiePolicy ? <CookiePolicyPage /> : isTerms ? <TermsPage /> : isPrivacy ? <PrivacyPage /> : isYouTube ? <YouTubePage /> : isLabs ? <PlantelLab /> : <App />}
  </Suspense>;
}
