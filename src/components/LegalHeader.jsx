import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LegalHeader() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="privacy-topbar" role="banner">
      <a href="/" aria-label="Voltar para a página inicial"><ArrowLeft size={17} /> Voltar ao Plantel</a>
      <a className="privacy-brand" href="/" aria-label="Plantel de Dúvidas - página inicial">
        <img src="/images/plantel-nova.png" alt="" />
      </a>
      <button type="button" onClick={() => setIsDarkMode(value => !value)} aria-label={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"} aria-pressed={isDarkMode}>
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
