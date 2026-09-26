import { t, locale } from '../i18n/index.js';
import LanguageSelector from './LanguageSelector.jsx';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Moon, Sun } from 'lucide-react';
import { exams, remaining, status } from '../data/exams';
import './ExamCalendar.css';

function useClock() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return now;
}

function Countdown({ exam, now }) {
  return <div className="exam-countdown" role="timer" aria-label={t('Tempo até a prova do {name}', { name: exam.name })}>
    {remaining(exam.date, now).map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{[t("dias"), t("horas"), 'min', t("seg")][index]}</span></div>)}
  </div>;
}

function ExamIcon({ exam }) {
  const logos = { ime: 'ime.png', ita: 'ita.png', afa: 'afa.png', en: 'escola-naval.png', efomm: 'efomm.png' };
  return <div className="exam-symbol" aria-hidden="true"><img src={`/images/${logos[exam.id]}`} alt="" /></div>;
}

export function SectionExamCalendar() {
  const now = useClock();
  const next = exams.filter(exam => status(exam, now) === 'upcoming').sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  return <section id="calendario-preview" className="calendar-preview">
    <div className="calendar-preview-inner">
      <div className="calendar-intro"><span className="calendar-eyebrow"><CalendarDays size={15} /> {t("SEU PRÓXIMO PASSO")}</span>
        <h2>{t("Quanto tempo falta")}<br />{t("para sua prova?")}</h2>
        <p>{t("Acompanhe as próximas provas.")}<br />{t("Faça de cada dia uma oportunidade de chegar mais longe.")}</p>
        <a className="calendar-button" href="#calendario">{t("Ver calendário de concursos")} <ArrowUpRight size={17} /></a>
      </div>
      <div className="calendar-preview-clock">
        {next ? <><span className="exam-badge">{t("Próxima prova confirmada no painel")}</span><h3>{next.name} <span>{next.edition}</span></h3><p>{next.stage} · {formatDate(next)}</p><Countdown exam={next} now={now} /><small>{t("Horário de Brasília")}</small></> : <><CalendarDays size={32} /><h3>{t("Seu próximo objetivo começa aqui.")}</h3><p>{t("Confira o calendário e acompanhe as novas datas.")}</p></>}
      </div>
    </div>
  </section>;
}

function formatDate(exam) {
  return new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'America/Sao_Paulo', ...(!exam.dateOnly && { hour: '2-digit', minute: '2-digit' }) }).format(new Date(exam.date));
}

export default function ExamCalendar({ isDarkMode, onToggleDarkMode }) {
  const now = useClock();
  const [filter, setFilter] = useState('all');
  const [displayedFilter, setDisplayedFilter] = useState('all');
  const [isChanging, setIsChanging] = useState(false);
  const filterTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(filterTimer.current), []);
  const changeFilter = (value) => {
    if (value === filter) return;
    window.clearTimeout(filterTimer.current);
    setFilter(value);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedFilter(value);
      setIsChanging(false);
      return;
    }
    setIsChanging(true);
    filterTimer.current = window.setTimeout(() => {
      setDisplayedFilter(value);
      setIsChanging(false);
    }, 160);
  };
  const shown = exams.filter(exam => displayedFilter === 'all' || status(exam, now) === displayedFilter).sort((a, b) => {
    const order = { upcoming: 0, pending: 1, past: 2 };
    return order[status(a, now)] - order[status(b, now)] || new Date(a.date) - new Date(b.date);
  });
  useEffect(() => {
    const previous = document.title;
    document.title = t("Calendário de concursos | Plantel");
    window.scrollTo(0, 0);
    return () => { document.title = previous; };
  }, []);
  return <div className="exam-page">
    <div className="calendar-topbar"><a href="#calendario-preview"><ArrowLeft size={17} /> {t("Voltar ao Plantel")}</a><img src="/images/plantel-nova.png" width="28" height="28" alt="Plantel" /><button type="button" onClick={onToggleDarkMode} aria-label={t("Alternar tema")}>{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}</button></div>
    <main className="calendar-main">
      <div className="calendar-page-heading"><span className="calendar-eyebrow">{t("UM OBJETIVO. UM DIA DE CADA VEZ.")}</span><h1>{t("Seu futuro.")}<br /><span>{t("Cada vez mais perto.")}</span></h1><p>{t("As datas que importam para a sua preparação,")}<br />{t("reunidas em um só lugar.")}</p></div>
      <div className="calendar-filters" role="group" aria-label={t("Filtrar concursos")}>{[['all', t("Todos")], ['upcoming', t("Próximas provas")], ['pending', t("Em conferência")], ['past', t("Provas passadas")]].map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => changeFilter(value)}>{label}</button>)}</div>
      <div className={`exam-grid${isChanging ? ' is-filter-changing' : ''}`} aria-busy={isChanging}>
        {shown.map(exam => {
          const state = status(exam, now);
          return <article className={`exam-card exam-card-${state}`} key={`${displayedFilter}-${exam.id}`}>
            <div className="exam-card-top"><ExamIcon exam={exam} /><span className="exam-badge">{state === 'upcoming' ? t("No seu radar") : state === 'pending' ? t("Data em conferência") : t("Prova já realizada")}</span></div>
            <span className="calendar-eyebrow">{exam.branch}</span><h2>{exam.name} <span>{exam.edition}</span></h2><p className="exam-description">{exam.description}</p>
            <div className="exam-date"><CalendarDays size={15} /><span>{exam.date ? formatDate(exam) : t("Confira as atualizações no site oficial")}<small>{exam.stage}</small></span></div>
            {state === 'upcoming' ? <Countdown exam={exam} now={now} /> : <div className="exam-state-message">{state === 'pending' ? t("A contagem começa após a confirmação da data.") : t("Esta etapa já passou. Acompanhe os resultados e as próximas etapas.")}</div>}
            <a className="exam-source" href={exam.source} target="_blank" rel="noopener noreferrer">{exam.id === 'ita' ? t("Ver edital oficial") : t("Ver página oficial")}<ArrowUpRight size={16} /></a>
          </article>;
        })}
      </div>
      {!shown.length && <p className="calendar-empty">{t("Nenhuma prova nesta categoria por enquanto. Veja todos os concursos.")}</p>}
      <p className="calendar-footnote">{t("Horário de Brasília · Datas conferidas em 08/09/2026.")}<br />{t("Acompanhe possíveis alterações e as demais etapas nos canais oficiais.")}</p>
      <LanguageSelector />
    </main>
  </div>;
}
