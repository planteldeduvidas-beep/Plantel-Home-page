// Datas verificadas em fontes oficiais em 08/09/2026.
// Sem horário confirmado, não iniciar uma contagem até a hora da prova.
export const exams = [
  { id: 'ita', name: 'ITA', edition: '2027', branch: 'Aeronáutica', description: 'Instituto Tecnológico de Aeronáutica', stage: '1ª fase', date: '2026-09-27T13:00:00-03:00', source: 'https://vestibular.ita.br/instrucoes/edital_2027.pdf' },
  { id: 'ime', name: 'IME', edition: '2027', branch: 'Exército', description: 'Instituto Militar de Engenharia', stage: '1ª fase', date: '2026-09-20T13:30:00-03:00', source: 'https://inscricoes.ime.eb.br/documentos/Edital_CFG_ATIVA_2026_2027.pdf' },
  { id: 'en', name: 'Escola Naval', edition: '2026', branch: 'Marinha', description: 'Concurso de admissão à Escola Naval', stage: 'Provas em 29 e 30 de agosto', date: '2026-08-29T00:00:00-03:00', dateOnly: true, source: 'https://www.inscricao.marinha.mil.br/marinha/index_concursos.jsp?id_concurso=506' },
  { id: 'afa', name: 'AFA', edition: '2027', branch: 'Aeronáutica', description: 'Academia da Força Aérea', stage: 'Provas escritas', date: '2026-07-05T00:00:00-03:00', dateOnly: true, source: 'https://www.sigc.fab.mil.br/publicacoes/afa2027' },
  { id: 'efomm', name: 'EFOMM', edition: '2027', branch: 'Marinha Mercante', description: 'Escola de Formação de Oficiais da Marinha Mercante', stage: 'Exame de conhecimentos', date: null, source: 'https://www.marinha.mil.br/ciaga/node/2516' },
];

export function remaining(date, now) {
  const seconds = Math.max(0, Math.floor((new Date(date).getTime() - now) / 1000));
  return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
}

export function status(exam, now) {
  if (!exam.date) return 'pending';
  return new Date(exam.date).getTime() > now ? 'upcoming' : 'past';
}
