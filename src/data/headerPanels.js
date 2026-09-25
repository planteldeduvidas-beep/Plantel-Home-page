import { t } from '../i18n/index.js';
export const headerPanels = {
  '#sobre': [
    { title: t("Conheça o Plantel"), links: [[t("Sobre o projeto"), '#sobre'], [t("Como funciona"), '#como-funciona']] },
  ],
  '#comunidades': [
    { title: t("Aprenda em comunidade"), links: [[t("Explore os grupos"), '#comunidades'], [t("Comunidade Plantel Ψ"), 'https://chat.whatsapp.com/KMwYVUctbqh1sPtlhcs3ip'], [t("Comunidade Plantel Σ"), 'https://chat.whatsapp.com/G8CA8y1gvKlJ7I4tKMO7dZ']] },
  ],
  '#redes': [
    { title: t("Conecte-se ao Plantel"), links: [['Instagram', 'https://www.instagram.com/planteldeduvidas/'], ['YouTube', '/youtube'], ['Discord', 'https://discord.gg/dbKeAz6Y'], ['Telegram', 'https://t.me/plantelduvidas']] },
  ],
  '#efomm': [
    { title: t("Seu próximo objetivo"), links: [[t("Conheça a EFOMM"), '/efomm/'], [t("Calendário de provas"), '#calendario']] },
  ],
  '#parceiros': [
    { title: t("Conheça nossos parceiros"), links: [['Cosseno', 'https://cosseno.com'], ['Fênix', 'https://fenixconcursosmilitares.com.br/']] },
    { title: 'Thay Puppin', links: [['EFOMM - Turma 2', 'https://pay.kiwify.com.br/OyFUYjX?afid=1vBM9oo8'], ['Clube da Redação', 'https://pay.kiwify.com.br/ctsiQfg?afid=W5fMhBRq']] },
  ],
  '#plantel-labs': [
    { title: t("Explore o Plantel Labs"), links: [[t("Conheça o Labs"), '/plantellabs'], [t("Nossa atuação"), '/plantellabs#atuacao']] },
    { title: t("Projetos e equipe"), links: [['Plantel EFOMM', '/efomm/'], [t("Conheça o time"), '/plantellabs#time']] },
  ],
};