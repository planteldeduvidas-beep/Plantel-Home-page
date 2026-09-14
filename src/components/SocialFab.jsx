import { useEffect, useRef, useState } from "react";
import { ChevronLeft } from "lucide-react";
import "./SocialFab.css";

const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/planteldeduvidas/",
    imageSrc: "/images/instaLogo.png",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com/",
    imageSrc: "/images/discordLogo.png",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@PlanteldeDuvidas",
    imageSrc: "/images/youtubeLogo.png",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/KMwYVUctbqh1sPtlhcs3ip",
    imageSrc: "/images/LogoZap.png",
  },
];

export default function SocialFab() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`social-fab social-edge-tab${open ? " open" : ""}`}>
      <button
        id="social-toggle"
        className="social-toggle"
        type="button"
        ref={toggleRef}
        aria-label={open ? "Fechar redes sociais" : "Abrir redes sociais"}
        aria-expanded={open}
        aria-controls="social-actions"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </button>
      <div
        id="social-actions"
        className="social-actions"
        aria-hidden={!open}
        inert={!open}
      >
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-btn ${item.id}`}
            aria-label={item.label}
            onClick={() => setOpen(false)}
          >
            <img src={item.imageSrc} alt={item.label} />
            {/*
              Como colocar a imagem:
              1) public/images/
              2) src="/images/NOME_DA_IMAGEM.png"
            */}
          </a>
        ))}
      </div>
    </div>
  );
}
