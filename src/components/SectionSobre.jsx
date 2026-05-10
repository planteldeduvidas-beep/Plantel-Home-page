import { useEffect, useRef } from "react";

export default function SectionSobre() {
  const countersStartedRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startCounting = () => {
      if (countersStartedRef.current) return;
      countersStartedRef.current = true;

      container.querySelectorAll(".count-up").forEach((counter) => {
        const target = Number(counter.dataset.target || 0);
        let current = 0;
        const increment = target / 100;

        const update = () => {
          current += increment;
          if (current < target) {
            const display = Math.ceil(current);
            counter.innerText =
              display >= 1000 ? `${(display / 1000).toFixed(1)}k` : display;
            requestAnimationFrame(update);
          } else {
            counter.innerText =
              target >= 1000 ? `${(target / 1000).toFixed(1)}k` : target;
          }
        };
        update();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="secao">
      <h2>Sobre o Plantel</h2>
      <div className="line"></div>
      <p className="text-info-out">
        O Plantel é um projeto educativo inovador, uma rede de apoio educacional
        interdisciplinar que conecta alunos e professores com o propósito central
        de ajuda mútua, resolução de dúvidas e democratização do ensino, com todo
        apoio sendo aberto ao público.
      </p>
      <p className="text-info-out">
        Nosso objetivo fundamental é contribuir de forma complementar ao processo
        de ensino-aprendizagem, auxiliando na construção do conhecimento a partir
        de suas próprias questões, atuando assim sobre o principal fator de
        desenvolvimento intelectual: <b>A DÚVIDA</b>.
      </p>
      <p className="text-info-out">
        Diferente de tudo antes visto, o Plantel se diferencia ao atuar
        precisamente onde ninguém mais alcança, auxílio para o desenvolvimento
        dos seus estudos e apoio de uma comunidade onde todos são iguais. Para
        isso, funciona como um espaço de apoio acadêmico contínuo, que combina
        apoio estratégico e democratização do acesso a professores qualificados,
        promovendo ainda a troca intelectual entre alunos e um direcionamento
        focado em estudos de alto rendimento e preparação para provas. Em
        síntese, é um ambiente projetado para apoiar o estudo de maneira
        estratégica e complementar, fortalecendo a trajetória acadêmica dos
        participantes.
      </p>

      <h2>Nosso Alcance</h2>
      <div className="line"></div>
      <div ref={containerRef} className="container-numbers">
        <div className="numbers">
          <div className="numbers-text">
            +<span className="count-up" data-target="1300">0</span>
          </div>
          <div className="numbers-text-label">seguidores</div>
        </div>

        <div className="numbers">
          <div className="numbers-text">
            +<span className="count-up" data-target="14900">0</span>
          </div>
          <div className="numbers-text-label">visualizações</div>
        </div>

        <div className="numbers">
          <div className="numbers-text">
            +<span className="count-up" data-target="8">0</span>
          </div>
          <div className="numbers-text-label">parcerias firmadas</div>
        </div>

        <div className="numbers">
          <div className="numbers-text">
            <span className="count-up" data-target="26">0</span>/26
          </div>
          <div className="numbers-text-label">estados</div>
        </div>
      </div>
    </section>
  );
}
