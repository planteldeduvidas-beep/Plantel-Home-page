export default function Footer({ menuItems, onAnchorClick }) {
  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    onAnchorClick(targetId);
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/images/LogoPlantnoHeader.png"
            alt="Logo Plantel de Dúvidas"
            className="footer-logo"
          />
          {/*
            Como colocar a imagem do footer:
            1) public/images/LogoPlantnoHeader.png
            2) src="/images/LogoPlantnoHeader.png"
          */}
          <p>Transformando a educação através da colaboração.</p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(event) => handleMenuClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>contato@plantel.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Plantel de Dúvidas. Todos os direitos reservados.</p>
        <p className="dev-team">Desenvolvido pela Equipe de TI do Plantel de Dúvidas</p>
      </div>
    </footer>
  );
}
