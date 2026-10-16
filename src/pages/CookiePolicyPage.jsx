import { Cookie, ExternalLink, Mail } from "lucide-react";
import LegalHeader from "../components/LegalHeader.jsx";
import "./PrivacyPage.css";
import "./CookiePolicyPage.css";

const contacts = ["planteldeduvidas@gmail.com", "plantelduvidas@gmail.com"];

export default function CookiePolicyPage() {
  return (
    <div className="privacy-page cookie-page">
      <LegalHeader />
      <main className="privacy-main">
        <div className="privacy-hero">
          <span><Cookie size={17} /> PREFERÊNCIAS E ARMAZENAMENTO</span>
          <h1>Política de Cookies</h1>
          <p>Entenda quais informações o navegador pode guardar ao acessar a homepage do Plantel de Dúvidas e como você pode controlá-las.</p>
          <small>Última atualização: 15 de outubro de 2026</small>
        </div>

        <div className="privacy-layout">
          <nav className="privacy-index" aria-label="Nesta política">
            <strong>Nesta política</strong>
            <a href="#conceito">O que são cookies</a><a href="#uso-atual">Uso atual</a>
            <a href="#preferencias">Preferências salvas</a><a href="#terceiros">Terceiros</a>
            <a href="#controle">Como controlar</a><a href="#contato">Contato</a>
          </nav>

          <article className="privacy-content">
            <section id="conceito"><h2>1. O que são cookies e tecnologias semelhantes</h2><p>Cookies são pequenos arquivos armazenados pelo navegador durante o acesso a um site. Tecnologias semelhantes, como o armazenamento local, também podem guardar preferências no dispositivo, mas não são enviadas automaticamente ao servidor em cada requisição.</p></section>

            <section id="uso-atual"><h2>2. O que a homepage utiliza atualmente</h2><p>O código atual da homepage não instala cookies próprios de publicidade, rastreamento ou análise. Utilizamos o armazenamento local do navegador para preservar escolhas feitas pelo próprio usuário e melhorar a continuidade da navegação.</p></section>

            <section id="preferencias"><h2>3. Preferências armazenadas</h2><div className="cookie-table" role="table" aria-label="Preferências armazenadas pelo site">
              <div className="cookie-table-head" role="row"><span role="columnheader">Chave</span><span role="columnheader">Finalidade</span><span role="columnheader">Duração</span></div>
              <div role="row"><code role="cell">theme</code><span role="cell">Lembrar o tema claro ou escuro.</span><span role="cell">Até ser removida</span></div>
              <div role="row"><code role="cell">plantel-language</code><span role="cell">Lembrar o idioma escolhido.</span><span role="cell">Até ser removida</span></div>
              <div role="row"><code role="cell">plantel-font-size</code><span role="cell">Lembrar o tamanho de leitura selecionado.</span><span role="cell">Até ser removida</span></div>
            </div><p>Essas preferências não são usadas para publicidade ou para criar perfis de comportamento.</p></section>

            <section id="terceiros"><h2>4. Sites e serviços de terceiros</h2><p>Ao seguir links para WhatsApp, Instagram, YouTube, Discord, Telegram, parceiros, plataformas de pagamento ou Plantel Listas, você passa a utilizar serviços independentes. Esses sites podem empregar cookies próprios conforme suas respectivas políticas.</p><p>O Plantel de Dúvidas não controla os cookies definidos após a saída da nossa homepage.</p></section>

            <section id="controle"><h2>5. Como controlar ou apagar</h2><p>Você pode apagar as preferências do Plantel pelas configurações de privacidade, dados de sites ou armazenamento local do seu navegador. Ao removê-las, o site voltará às configurações padrão e poderá solicitar que você escolha novamente idioma, tema ou tamanho do texto.</p><p>O bloqueio do armazenamento local não impede o acesso ao conteúdo principal, mas algumas preferências podem deixar de persistir entre visitas.</p></section>

            <section id="mudancas"><h2>6. Novas tecnologias e alterações</h2><p>Se forem adotadas ferramentas não essenciais, como análise de audiência ou publicidade, esta política será atualizada e, quando necessário, serão disponibilizados mecanismos adequados de informação e consentimento.</p><a className="privacy-reference" href="/privacidade">Consulte também a Política de Privacidade <ExternalLink size={15} /></a></section>

            <section id="contato" className="privacy-contact"><h2>7. Fale conosco</h2><p>Para dúvidas relacionadas a cookies, armazenamento local ou privacidade, utilize um dos canais abaixo:</p>{contacts.map(email => <a key={email} href={`mailto:${email}?subject=Política%20de%20Cookies%20-%20Plantel`}><Mail size={16} />{email}</a>)}</section>
          </article>
        </div>
      </main>
    </div>
  );
}
