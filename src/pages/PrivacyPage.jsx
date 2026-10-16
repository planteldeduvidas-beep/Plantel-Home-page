import { ExternalLink, Mail, ShieldCheck } from "lucide-react";
import "./PrivacyPage.css";
import LegalHeader from "../components/LegalHeader.jsx";

const contacts = ["planteldeduvidas@gmail.com", "plantelduvidas@gmail.com"];

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <LegalHeader />

      <main className="privacy-main">
        <div className="privacy-hero">
          <span><ShieldCheck size={17} /> PRIVACIDADE E TRANSPARÊNCIA</span>
          <h1>Política de Privacidade</h1>
          <p>Este documento explica como a homepage do Plantel de Dúvidas trata informações pessoais e como você pode exercer seus direitos.</p>
          <small>Última atualização: 15 de outubro de 2026</small>
        </div>

        <div className="privacy-layout">
          <nav className="privacy-index" aria-label="Nesta política">
            <strong>Nesta política</strong>
            <a href="#responsavel">Responsável</a><a href="#dados">Dados tratados</a>
            <a href="#finalidades">Finalidades</a><a href="#compartilhamento">Compartilhamento</a>
            <a href="#direitos">Seus direitos</a><a href="#contato">Contato</a>
          </nav>

          <article className="privacy-content">
            <section id="responsavel"><h2>1. Quem é responsável</h2><p>O Plantel de Dúvidas é responsável pelo tratamento de dados pessoais realizado nesta homepage. Esta política se aplica ao site principal e não substitui as políticas próprias de plataformas externas acessadas por nossos links.</p></section>

            <section id="dados"><h2>2. Quais dados podem ser tratados</h2><p>A homepage não exige cadastro. Podemos tratar dados que você fornece voluntariamente ao entrar em contato, como nome, endereço de e-mail, telefone e o conteúdo da mensagem.</p><p>O provedor de hospedagem também pode registrar informações técnicas necessárias à segurança e ao funcionamento do site, como endereço IP, navegador, dispositivo, páginas acessadas, data e horário.</p></section>

            <section id="finalidades"><h2>3. Para que usamos esses dados</h2><ul><li>Responder dúvidas, solicitações e propostas de parceria.</li><li>Manter o site disponível, estável e protegido contra abusos.</li><li>Cumprir obrigações legais e resguardar direitos quando necessário.</li><li>Melhorar a navegação com informações técnicas agregadas, quando disponíveis.</li></ul><p>O tratamento ocorre conforme a finalidade aplicável, com base no consentimento, na execução de procedimentos solicitados pelo titular, no cumprimento de obrigação legal ou no legítimo interesse, sempre observando os direitos previstos na LGPD.</p></section>

            <section id="cookies"><h2>4. Cookies e armazenamento local</h2><p>O site pode usar recursos essenciais do navegador, como armazenamento local, para guardar preferências de interface. Caso ferramentas não essenciais de análise sejam adotadas, esta política e os controles de consentimento deverão ser atualizados.</p></section>

            <section id="compartilhamento"><h2>5. Compartilhamento e links externos</h2><p>Não comercializamos dados pessoais. Informações podem ser processadas por fornecedores necessários à hospedagem, segurança e comunicação, limitadas ao serviço prestado, ou compartilhadas quando houver obrigação legal.</p><p>Links para WhatsApp, Instagram, YouTube, Discord, Telegram, plataformas de pagamento, parceiros e Plantel Listas levam a serviços independentes, sujeitos às respectivas políticas de privacidade.</p></section>

            <section id="retencao"><h2>6. Segurança e retenção</h2><p>Adotamos medidas técnicas e organizacionais razoáveis para reduzir riscos de acesso não autorizado, perda ou divulgação indevida. Os dados são mantidos somente pelo tempo necessário às finalidades informadas, ao cumprimento de obrigações legais ou ao exercício regular de direitos.</p></section>

            <section id="direitos"><h2>7. Seus direitos</h2><p>Nos termos da LGPD, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados inadequados, portabilidade quando aplicável, informações sobre compartilhamento, revogação do consentimento e revisão de decisões automatizadas.</p><p>Antes de atender ao pedido, poderemos solicitar informações para confirmar a identidade do titular e proteger seus dados.</p><a className="privacy-reference" href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares" target="_blank" rel="noopener noreferrer">Conheça os direitos do titular na ANPD <ExternalLink size={15} /></a></section>

            <section id="menores"><h2>8. Crianças e adolescentes</h2><p>Conteúdos educacionais podem interessar a estudantes menores de idade. Não solicitamos deliberadamente dados além do necessário e orientamos que contatos e decisões envolvendo serviços externos sejam acompanhados pelo responsável legal quando aplicável.</p></section>

            <section id="alteracoes"><h2>9. Alterações desta política</h2><p>Esta política poderá ser atualizada para refletir mudanças no site, em serviços utilizados ou na legislação. A versão vigente será publicada nesta página com a data da última atualização.</p></section>

            <section id="contato" className="privacy-contact"><h2>10. Fale conosco</h2><p>Para dúvidas ou para exercer direitos relacionados aos seus dados pessoais, escreva para um dos canais abaixo:</p>{contacts.map(email => <a key={email} href={`mailto:${email}?subject=Privacidade%20e%20dados%20pessoais`}><Mail size={16} />{email}</a>)}</section>
          </article>
        </div>
      </main>
    </div>
  );
}
