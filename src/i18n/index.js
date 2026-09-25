import { messages } from './messages.js';

export const languages = [
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
];

export function detectLanguage(saved, preferred = []) {
  if (languages.some(item => item.code === saved)) return saved;
  for (const language of preferred) {
    const base = language.toLowerCase().split('-')[0];
    if (base === 'pt') return 'pt-BR';
    if (base === 'en' || base === 'es') return base;
  }
  return 'pt-BR';
}

let saved;
try { saved = localStorage.getItem('plantel-language'); } catch { /* Browser preference remains available. */ }
const sessionChoice = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('lang') : null;
const preferred = typeof navigator !== 'undefined' ? navigator.languages || [navigator.language] : [];
export const locale = detectLanguage(sessionChoice || saved, preferred);
if (typeof document !== 'undefined') document.documentElement.lang = locale;

export function t(text, params = {}) {
  const translated = locale === 'pt-BR' ? text : messages[text]?.[locale] || text;
  return translated.replace(/\{(\w+)\}/g, (match, key) => params[key] ?? match);
}

export function changeLanguage(code) {
  if (!languages.some(item => item.code === code)) return;
  const url = new URL(window.location.href);
  try {
    localStorage.setItem('plantel-language', code);
    url.searchParams.delete('lang');
  } catch { url.searchParams.set('lang', code); }
  if (code === locale && url.href === window.location.href) return;
  // Reload initializes translated data and preserves the current route/hash.
  if (url.href === window.location.href) window.location.reload();
  else window.location.assign(url.href);
}

if (typeof document !== 'undefined') document.title = t('Plantel de Dúvidas | Comunidade de estudos');
