import { t } from '../i18n/index.js';
// Concursos e links oficiais revisados em 15/10/2026.
// Sem horário confirmado, não iniciar uma contagem até a hora da prova.
export const exams = [
  { id: 'ita', name: 'ITA', edition: '2027', branch: t("Aeronáutica"), description: 'Instituto Tecnológico de Aeronáutica', stage: t("1ª fase"), date: '2026-09-27T13:00:00-03:00', source: 'https://vestibular.ita.br/instrucoes/edital_2027.pdf' },
  { id: 'ime', name: 'IME', edition: '2027', branch: t("Exército"), description: 'Instituto Militar de Engenharia', stage: t("1ª fase"), date: '2026-09-20T13:30:00-03:00', source: 'https://inscricoes.ime.eb.br/documentos/Edital_CFG_ATIVA_2026_2027.pdf' },
  { id: 'en', name: 'Escola Naval', edition: '2026', branch: t("Marinha"), description: t("Concurso de admissão à Escola Naval"), stage: t("Provas em 29 e 30 de agosto"), date: '2026-08-29T00:00:00-03:00', dateOnly: true, source: 'https://www.inscricao.marinha.mil.br/marinha/index_concursos.jsp?id_concurso=506' },
  { id: 'afa', name: 'AFA', edition: '2027', branch: t("Aeronáutica"), description: 'Academia da Força Aérea', stage: t("Provas escritas"), date: '2026-07-05T00:00:00-03:00', dateOnly: true, source: 'https://www.sigc.fab.mil.br/publicacoes/afa2027' },
  { id: 'efomm', name: 'EFOMM', edition: '2027', branch: t("Marinha Mercante"), description: t("Escola de Formação de Oficiais da Marinha Mercante"), stage: t("Exame de conhecimentos"), date: null, source: 'https://www.marinha.mil.br/ciaga/node/2516' },
  { id: 'esa', name: 'ESA', edition: t("Próxima edição"), branch: t("Exército"), description: t("Escola de Sargentos das Armas"), stage: t("Exame intelectual"), date: null, source: 'https://esa.eb.mil.br/' },
  { id: 'espcex', name: 'EsPCEx', edition: t("Próxima edição"), branch: t("Exército"), description: t("Escola Preparatória de Cadetes do Exército"), stage: t("Exame intelectual"), date: null, source: 'https://www.espcex.eb.mil.br/' },
  { id: 'eear1', name: 'EEAR 1', edition: t("Próxima edição"), branch: t("Aeronáutica"), description: t("Curso de Formação de Sargentos - primeiro semestre"), stage: t("Provas escritas"), date: null, source: 'https://ingresso.eear.fab.mil.br/' },
  { id: 'eear2', name: 'EEAR 2', edition: t("Próxima edição"), branch: t("Aeronáutica"), description: t("Curso de Formação de Sargentos - segundo semestre"), stage: t("Provas escritas"), date: null, source: 'https://ingresso.eear.fab.mil.br/' },
  { id: 'epcar', name: 'EPCAR', edition: '2027', branch: t("Aeronáutica"), description: t("Escola Preparatória de Cadetes do Ar"), stage: t("Provas escritas"), date: null, source: 'https://www.sigc.fab.mil.br/publicacoes/cpcar2027' },
  { id: 'cn', name: 'Colégio Naval', edition: t("Próxima edição"), branch: t("Marinha"), description: t("Concurso Público de Admissão ao Colégio Naval"), stage: t("Prova objetiva e redação"), date: null, source: 'https://concursos.marinha.mil.br/' },
  { id: 'eam', name: 'EAM', edition: t("Próxima edição"), branch: t("Marinha"), description: t("Escolas de Aprendizes-Marinheiros"), stage: t("Prova objetiva"), date: null, source: 'https://www.marinha.mil.br/eames/concurso/escolas-de-aprendizes-marinheiros' },
];

export function remaining(date, now) {
  const seconds = Math.max(0, Math.floor((new Date(date).getTime() - now) / 1000));
  return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
}

export function status(exam, now) {
  if (!exam.date) return 'pending';
  return new Date(exam.date).getTime() > now ? 'upcoming' : 'past';
}
