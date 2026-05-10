const sideLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/planteldeduvidas/",
    imageSrc: "/images/insta.png",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.gg/dbKeAz6Y",
    imageSrc: "/images/discord.png",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@PlanteldeDuvidas",
    imageSrc: "/images/youtube.png",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/plantelduvidas",
    imageSrc: "/images/telegram.png",
  },
];

export default function SideNavbar() {
  return (
    <nav className="navbar">
      <ul>
        {sideLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={link.imageSrc} alt={link.label} />
              {/*
                Como colocar o ícone:
                1) public/images/
                2) src="/images/NOME_DA_IMAGEM.png"
              */}
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}