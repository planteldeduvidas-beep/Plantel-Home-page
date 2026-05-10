import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "O Plantel de Dúvidas é gratuito?",
    answer:
      "Sim! O Plantel é 100% gratuito. Nossa missão é democratizar o ensino e proporcionar apoio educacional de qualidade para todos, sem nenhum custo.",
  },
  {
    id: 2,
    question: "Como faço para entrar nas comunidades?",
    answer:
      "Basta clicar no botão 'Entrar na Comunidade' aqui no site ou acessar nossos links do WhatsApp. Você será redirecionado para o grupo e poderá participar imediatamente.",
  },
  {
    id: 3,
    question: "Quem são os professores do Plantel?",
    answer:
      "Nossos professores são voluntários qualificados, muitos aprovados em vestibulares competitivos como ITA, IME e concursos militares. Eles dedicam seu tempo para ajudar outros estudantes.",
  },
  {
    id: 4,
    question: "Posso tirar dúvidas de qualquer matéria?",
    answer:
      "Sim! Temos comunidades específicas para Exatas, Humanas, Linguagens, Redação e muito mais. Cada área tem professores e monitores especializados.",
  },
  {
    id: 5,
    question: "Como funciona o Plantel Listas?",
    answer:
      "O Plantel Listas é nosso repositório de materiais de estudo. Oferecemos mais de 300 listas de exercícios organizadas por assunto, provas anteriores de concursos militares e materiais exclusivos dos parceiros.",
  },
  {
    id: 6,
    question: "Posso me tornar um professor/monitor?",
    answer:
      "Claro! Se você tem conhecimento para compartilhar e quer ajudar outros estudantes, entre em contato conosco pelo Instagram. Valorizamos muito quem quer contribuir com a comunidade.",
  },
];

export default function SectionFaq() {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section secao">
      <div className="container">
        <div className="section-header">
          <h2>Dúvidas Frequentes</h2>
          <div className="line"></div>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div key={faq.id} className={`faq-item${isActive ? " active" : ""}`}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                >
                  {faq.question}
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
