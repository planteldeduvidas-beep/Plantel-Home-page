import { useState } from "react";

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

  return (
    <div className={`social-fab${open ? " open" : ""}`} aria-hidden="false">
      <button
        id="social-toggle"
        className="social-toggle"
        type="button"
        aria-label="Abrir redes"
        onClick={() => setOpen((prev) => !prev)}
      >
        ≡
      </button>
      <div
        id="social-actions"
        className="social-actions"
        aria-hidden={!open}
      >
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-btn ${item.id}`}
            aria-label={item.label}
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
