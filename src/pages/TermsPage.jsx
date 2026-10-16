import { ExternalLink, FileCheck2, Mail } from "lucide-react";
import "./PrivacyPage.css";
import LegalHeader from "../components/LegalHeader.jsx";

const contacts = ["planteldeduvidas@gmail.com", "plantelduvidas@gmail.com"];

export default function TermsPage() {
  return (
    <div className="privacy-page terms-page">
      <LegalHeader />

      <main className="privacy-main">
        <div className="privacy-hero">
          <span><FileCheck2 size={17} /> CONDIÇÕES DE ACESSO</span>
          <h1>Termos de Uso</h1>
          <p>Estes termos estabelecem as condições para acessar e utilizar a homepage e os conteúdos do Plantel de Dúvidas.</p>
          <small>Última atualização: 15 de outubro de 2026</small>
        </div>

        <div className="privacy-layout">
          <nav className="privacy-index" aria-label="Nestes termos">
            <strong>Nestes termos</strong>
            <a href="#aceitacao">Aceitação</a><a href="#projeto">Sobre o projeto</a>
            <a href="#uso">Uso permitido</a><a href="#conteudo">Conteúdo</a>
            <a href="#terceiros">Serviços externos</a><a href="#responsabilidade">Responsabilidades</a>
            <a href="#contato">Contato</a>
          </nav>

          <article className="privacy-content">
            <section id="aceitacao"><h2>1. Aceitação dos termos</h2><p>Ao acessar ou utilizar esta homepage, você declara que leu e concorda com estes Termos de Uso e com a Política de Privacidade. Caso não concorde, interrompa o uso do site.</p></section>

            <section id="projeto"><h2>2. Sobre o Plantel de Dúvidas</h2><p>O Plantel de Dúvidas é um projeto educacional independente que reúne informações, comunidades, materiais, calendários e indicações úteis para estudantes.</p><p>O projeto não representa, não integra e não possui vínculo oficial com a Marinha do Brasil, Forças Armadas, escolas militares, bancas organizadoras ou órgãos públicos mencionados no site.</p></section>

            <section id="uso"><h2>3. Uso permitido</h2><p>Você pode navegar, consultar e compartilhar links públicos do site para fins pessoais, educacionais e lícitos. É proibido tentar comprometer a segurança ou disponibilidade do site, acessar áreas restritas sem autorização, usar automações abusivas ou empregar o conteúdo para fraude, assédio ou atividade ilegal.</p></section>

            <section id="conteudo"><h2>4. Conteúdo e propriedade intelectual</h2><p>Textos, identidade visual, organização das páginas e materiais próprios do Plantel de Dúvidas são protegidos pela legislação aplicável. Marcas, brasões, imagens e materiais de terceiros pertencem aos respectivos titulares e são utilizados de forma informativa quando aplicável.</p><p>Não é permitido copiar, alterar, vender ou redistribuir conteúdo próprio em escala comercial sem autorização prévia. Citações e compartilhamentos devem preservar os créditos e o contexto.</p></section>

            <section id="informacoes"><h2>5. Informações sobre concursos</h2><p>Datas, editais, requisitos, cronogramas e demais informações podem mudar. O calendário e os resumos possuem finalidade informativa; antes de tomar qualquer decisão, confirme os dados nos canais oficiais do concurso ou da instituição responsável.</p></section>

            <section id="terceiros"><h2>6. Links, comunidades e serviços externos</h2><p>A homepage contém links para comunidades, redes sociais, parceiros, plataformas de pagamento e outros serviços independentes. O acesso ocorre por sua decisão e está sujeito aos termos, políticas e disponibilidade de cada terceiro.</p><p>O Plantel de Dúvidas não controla transações, cadastros, conteúdos ou práticas de privacidade de terceiros. Dúvidas sobre produtos, pagamentos, cancelamentos ou suporte devem ser encaminhadas ao respectivo fornecedor.</p></section>

            <section id="afiliados"><h2>7. Parceiros, cupons e links de afiliados</h2><p>Alguns links divulgados podem ser links de afiliados. Quando uma compra é realizada por eles, o Plantel de Dúvidas pode receber uma comissão, sem necessariamente alterar o preço pago pelo usuário. Cupons, condições e disponibilidade são definidos pelos parceiros e podem mudar sem aviso prévio.</p><p>A presença de um parceiro não elimina a necessidade de o usuário avaliar a oferta, o fornecedor e as condições de contratação antes da compra.</p></section>

            <section id="responsabilidade"><h2>8. Disponibilidade e limitações</h2><p>Buscamos manter informações claras e o site disponível, mas não garantimos funcionamento ininterrupto, ausência total de erros ou atualização imediata de conteúdos externos. Na extensão permitida pela legislação, o Plantel de Dúvidas não se responsabiliza por decisões tomadas exclusivamente com base em conteúdo informativo ou por danos causados por serviços de terceiros.</p></section>

            <section id="privacidade"><h2>9. Privacidade</h2><p>O tratamento de dados pessoais relacionado à homepage é descrito na nossa Política de Privacidade.</p><a className="privacy-reference" href="/privacidade">Ler a Política de Privacidade <ExternalLink size={15} /></a></section>

            <section id="alteracoes"><h2>10. Alterações e legislação aplicável</h2><p>Estes termos podem ser atualizados para refletir mudanças no projeto, nos serviços ou na legislação. A versão vigente será publicada nesta página com a data de atualização. Aplicam-se as leis da República Federativa do Brasil, respeitados os direitos assegurados ao usuário.</p></section>

            <section id="contato" className="privacy-contact"><h2>11. Fale conosco</h2><p>Para dúvidas, solicitações ou comunicação sobre estes termos, utilize um dos canais abaixo:</p>{contacts.map(email => <a key={email} href={`mailto:${email}?subject=Termos%20de%20Uso%20-%20Plantel`}><Mail size={16} />{email}</a>)}</section>
          </article>
        </div>
      </main>
    </div>
  );
}
