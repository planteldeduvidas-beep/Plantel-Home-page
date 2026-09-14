import { useEffect, useRef } from 'react';

export default function LabsComingSoon({ open, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (open && !ref.current.open) ref.current.showModal();
    if (!open && ref.current.open) ref.current.close();
  }, [open]);
  return <dialog ref={ref} className="labs-coming-soon" aria-labelledby="labs-soon-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="labs-soon-content">
      <span className="labs-label">PLANTEL LABS</span>
      <h2 id="labs-soon-title">Algo novo está chegando.</h2>
      <p>Estamos preparando o lançamento do Plantel Labs. Em breve, você poderá conhecer nosso time, nossos projetos e tudo o que podemos construir juntos.</p>
      <button type="button" className="labs-cta" onClick={onClose} autoFocus>Entendi</button>
    </div>
  </dialog>;
}
