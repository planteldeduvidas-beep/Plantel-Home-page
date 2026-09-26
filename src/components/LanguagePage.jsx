import { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { languages, locale, t, changeLanguage } from '../i18n/index.js';
import { regions } from '../i18n/regions.js';
import './LanguageSelector.css';

export default function LanguagePage() {
  const headingRef = useRef(null);
  useEffect(() => {
    const previous = document.title;
    document.title = `${t('Escolha seu idioma')} | Plantel`;
    window.scrollTo(0, 0);
    headingRef.current?.focus({ preventScroll: true });
    return () => { document.title = previous; };
  }, []);
  return <main className="language-page">
    <div className="language-page-inner">
      <h1 ref={headingRef} tabIndex={-1}>{t('Escolha seu idioma')}</h1>
      <p className="language-region-note">{t('Escolha uma região para acessar o Plantel em um dos idiomas disponíveis. O conteúdo é o mesmo em todos os países.')}</p>
      {regions.map((region, index) => <section key={region.name} aria-labelledby={`region-${index}`}>
        <h2 id={`region-${index}`}>{t(region.name)}</h2>
        <ul className="language-page-options">
          {region.countries.map(([country, code]) => <li key={country}>
            <button type="button" onClick={() => {
              changeLanguage(code);
              if (code === locale) window.location.hash = '#sobre';
            }}>
              <span>{t(country)}<small lang={code}>{languages.find(item => item.code === code).name}</small></span>
            </button>
          </li>)}
        </ul>
      </section>)}
      <a href="#sobre" className="language-back"><ArrowLeft size={16} />{t('Voltar ao Plantel')}</a>
    </div>
  </main>;
}
