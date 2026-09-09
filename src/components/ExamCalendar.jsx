import { useEffect, useState } from 'react';
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
  return <div className="exam-countdown" role="timer" aria-label={`Tempo até a prova do ${exam.name}`}>
    {remaining(exam.date, now).map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['dias', 'horas', 'min', 'seg'][index]}</span></div>)}
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
      <div className="calendar-intro"><span className="calendar-eyebrow"><CalendarDays size={15} /> SEU PRÓXIMO PASSO</span>
        <h2>Quanto tempo falta<br />para sua prova?</h2>
        <p>Acompanhe as próximas provas.<br />Faça de cada dia uma oportunidade de chegar mais longe.</p>
        <a className="calendar-button" href="#calendario">Ver calendário de concursos <ArrowUpRight size={17} /></a>
      </div>
      <div className="calendar-preview-clock">
        {next ? <><span className="exam-badge">Próxima prova confirmada no painel</span><h3>{next.name} <span>{next.edition}</span></h3><p>{next.stage} · {formatDate(next)}</p><Countdown exam={next} now={now} /><small>Horário de Brasília</small></> : <><CalendarDays size={32} /><h3>Seu próximo objetivo começa aqui.</h3><p>Confira o calendário e acompanhe as novas datas.</p></>}
      </div>
    </div>
  </section>;
}

function formatDate(exam) {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'America/Sao_Paulo', ...(!exam.dateOnly && { hour: '2-digit', minute: '2-digit' }) }).format(new Date(exam.date));
}

export default function ExamCalendar({ isDarkMode, onToggleDarkMode }) {
  const now = useClock();
  const [filter, setFilter] = useState('all');
  const shown = exams.filter(exam => filter === 'all' || status(exam, now) === filter).sort((a, b) => {
    const order = { upcoming: 0, pending: 1, past: 2 };
    return order[status(a, now)] - order[status(b, now)] || new Date(a.date) - new Date(b.date);
  });
  useEffect(() => {
    const previous = document.title;
    document.title = 'Calendário de concursos | Plantel';
    window.scrollTo(0, 0);
    return () => { document.title = previous; };
  }, []);
  return <div className="exam-page">
    <div className="calendar-topbar"><a href="#calendario-preview"><ArrowLeft size={17} /> Voltar ao Plantel</a><img src="/images/plantel-nova.png" width="28" height="28" alt="Plantel" /><button type="button" onClick={onToggleDarkMode} aria-label="Alternar tema">{isDarkMode ? <Sun size={18} /> : <Moon size={18} />}</button></div>
    <main className="calendar-main">
      <div className="calendar-page-heading"><span className="calendar-eyebrow">UM OBJETIVO. UM DIA DE CADA VEZ.</span><h1>Seu futuro.<br /><span>Cada vez mais perto.</span></h1><p>As datas que importam para a sua preparação,<br />reunidas em um só lugar.</p></div>
      <div className="calendar-filters" role="group" aria-label="Filtrar concursos">{[['all', 'Todos'], ['upcoming', 'Próximas provas'], ['pending', 'Em conferência'], ['past', 'Provas passadas']].map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
      <div className="exam-grid">
        {shown.map(exam => {
          const state = status(exam, now);
          return <article className={`exam-card exam-card-${state}`} key={exam.id}>
            <div className="exam-card-top"><ExamIcon exam={exam} /><span className="exam-badge">{state === 'upcoming' ? 'No seu radar' : state === 'pending' ? 'Data em conferência' : 'Prova já realizada'}</span></div>
            <span className="calendar-eyebrow">{exam.branch}</span><h2>{exam.name} <span>{exam.edition}</span></h2><p className="exam-description">{exam.description}</p>
            <div className="exam-date"><CalendarDays size={15} /><span>{exam.date ? formatDate(exam) : 'Confira as atualizações no site oficial'}<small>{exam.stage}</small></span></div>
            {state === 'upcoming' ? <Countdown exam={exam} now={now} /> : <div className="exam-state-message">{state === 'pending' ? 'A contagem começa após a confirmação da data.' : 'Esta etapa já passou. Acompanhe os resultados e as próximas etapas.'}</div>}
            <a className="exam-source" href={exam.source} target="_blank" rel="noopener noreferrer">{exam.id === 'ita' ? 'Ver edital oficial' : 'Ver página oficial'}<ArrowUpRight size={16} /></a>
          </article>;
        })}
      </div>
      {!shown.length && <p className="calendar-empty">Nenhuma prova nesta categoria por enquanto. Veja todos os concursos.</p>}
      <p className="calendar-footnote">Horário de Brasília · Datas conferidas em 08/09/2026.<br />Acompanhe possíveis alterações e as demais etapas nos canais oficiais.</p>
    </main>
  </div>;
}
