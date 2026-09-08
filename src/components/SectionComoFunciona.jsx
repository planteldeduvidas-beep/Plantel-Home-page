import { BookOpen, MessageCircle, Trophy, Users } from "lucide-react";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Entre na Comunidade",
    description:
      "Clique no link do WhatsApp e entre em uma das nossas comunidades gratuitas.",
    icon: MessageCircle,
    side: "side-left",
  },
  {
    id: 2,
    title: "Conheça a Galera",
    description:
      "Apresente-se e conheça outros estudantes com os mesmos objetivos que você.",
    icon: Users,
    side: "side-right",
  },
  {
    id: 3,
    title: "Tire Suas Dúvidas",
    description:
      "Pergunte nos grupos! Nossos professores e monitores estão prontos para ajudar.",
    icon: BookOpen,
    side: "side-left",
  },
  {
    id: 4,
    title: "Conquiste Seus Sonhos",
    description: "Com dedicação e apoio, alcance sua aprovação!",
    icon: Trophy,
    side: "side-right",
  },
];

export default function SectionComoFunciona() {
  const timelineRef = useRef(null);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const mobileMotion = window.matchMedia("(max-width: 768px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!mobileMotion.matches) {
        setHighlighted(null);
        return;
      }
      let closest = null;
      let distance = Infinity;
      timelineRef.current.querySelectorAll(".timeline-content").forEach((card, index) => {
        const bounds = card.getBoundingClientRect();
        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
        const delta = Math.abs(bounds.top + bounds.height / 2 - window.innerHeight / 2);
        if (delta < distance) {
          closest = index;
          distance = delta;
        }
      });
      setHighlighted(closest);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mobileMotion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mobileMotion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section id="como-funciona" className="how-it-works secao">
      <div className="container">
        <div className="section-header">
          <h2>Funcionamento</h2>
          <div className="line"></div>
        </div>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`timeline-item ${step.side}`}
                style={{ "--delay": `${0.1 + index * 0.1}s` }}
              >
                <div className="timeline-icon">
                  <Icon size={24} />
                </div>
                <div className={`timeline-content${highlighted === index ? " is-scroll-highlighted" : ""}`}>
                  <span className="step-label">Passo {step.id}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
