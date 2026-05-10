import { Moon, Sun } from "lucide-react";

export default function Header({
  menuItems,
  onAnchorClick,
  isDarkMode,
  onToggleDarkMode,
  onToggleMenu,
  isMenuOpen,
}) {
  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
  };

  return (
    <header>
      {/* Logo principal */}
      <img
        src="/images/LogoPlantnoHeader.png"
        alt="Logo"
        className="logo"
        onClick={() => window.location.reload()}
      />
      {/*
        Como colocar a imagem do logo:
        1) Coloque o arquivo em public/images/
        2) Troque src="#" por src="/images/LogoPlantnoHeader.png"
        Ou importe:
        import logo from "../assets/LogoPlantnoHeader.png"; src={logo}
      */}

      <nav className="menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={(event) => handleMenuClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="dark-mode-container">
        <button
          id="dark-mode-toggle"
          type="button"
          title="Alternar tema"
          onClick={onToggleDarkMode}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <a
        id="link"
        target="_blank"
        href="https://chat.whatsapp.com/KMwYVUctbqh1sPtlhcs3ip"
        rel="noopener noreferrer"
      >
        <img src="/images/LogoZap.png" id="logo-header-zap" alt="Logo WhatsApp" />
        {/*
          Como colocar a imagem do WhatsApp:
          1) public/images/LogoZap.png
          2) src="/images/LogoZap.png"
        */}
        <h3>
          Comunidades <br />no WhatsApp!
        </h3>
      </a>

      <button
        id="hamburger"
        className={`hamburger${isMenuOpen ? " open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={onToggleMenu}
      >
        <span className="bar" />
      </button>
    </header>
  );
}
