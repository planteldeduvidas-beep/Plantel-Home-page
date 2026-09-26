
import logo from "../../assets/logo_plantel1.png";
import { useEffect, useRef, useState } from "react";


const irPara = (event, id) => {
  event.preventDefault();
  const alvo = document.querySelector(id);
  if (!alvo) return;
  window.scrollTo({
    top: alvo.offsetTop - 90,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });

};


export default function PlabHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const toggle = toggleRef.current;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
      if (event.key === 'Tab') {
        const items = [closeRef.current, ...menuRef.current.querySelectorAll('a[href]')];
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth > 1190) setIsMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      toggle?.focus();
    };
  }, [isMenuOpen]);
  return (
    <>
    {
        <>
        <header className="plab-header ">

        <a href="/plantellabs" className="plab-header__brand">
          <img src={logo} alt="Plantel Labs" className="plab-header__logo" />
          <span className="plab-header__name">
            Plantel<span>Labs</span>
          </span>
        </a>

        <div className="navegacao">
          <nav className="plab-header__nav">
            <a href="#projetos" className="plab-header__link" onClick={(e) => irPara(e, "#projetos")}>Projetos</a>
            <a href="#time" className="plab-header__link" onClick={(e) => irPara(e, "#time")}> Time</a>
            <a href="/" className="plab-header__link">Voltar ao Plantel</a>
            <a href={`https://wa.me/5524999216327?text=${encodeURIComponent("Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs.")}`}
        target="_blank" rel="noopener noreferrer" className="plab-header__cta">Fale com o time</a>
          </nav>

          <button
            ref={toggleRef} aria-controls="labs-mobile-menu" className="plab-header__toggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      <div
          className={`plab-overlay${isMenuOpen ? " is-active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <button
          ref={closeRef} tabIndex={isMenuOpen ? 0 : -1} className={`plab-close${isMenuOpen ? " is-active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <span /><span />
        </button>
        <nav id="labs-mobile-menu" ref={menuRef} inert={!isMenuOpen} aria-label="Menu Plantel Labs" className={`plab-mobile-menu${isMenuOpen ? " is-active" : ""}`}>
          <a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a>
          <a href="#time" onClick={() => setIsMenuOpen(false)}>Time</a>
          <a href="/" onClick={() => setIsMenuOpen(false)}>Voltar ao Plantel</a>
          <a href={`https://wa.me/5524999216327?text=${encodeURIComponent("Olá, tenho interesse em ser parceiro do Plantel de Dúvidas. Vim pelo Plantel Labs.")}`}
          target="_blank" rel="noopener noreferrer">
            Fale com o time
          </a>
        </nav>
        </>
      }
    </>
  );
}
