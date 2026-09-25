import { Globe2 } from 'lucide-react';
import { languages, locale, t } from '../i18n/index.js';
import './LanguageSelector.css';

export default function LanguageSelector() {
  return <div className="language-selector">
    <a className="language-trigger" href="#idiomas" aria-label={`${t('Idioma')}: ${languages.find(item => item.code === locale).name}`}>
      <Globe2 size={15} aria-hidden="true" />{languages.find(item => item.code === locale).name}
    </a>
  </div>;
}