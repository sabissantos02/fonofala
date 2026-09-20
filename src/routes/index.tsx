import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  BookOpen,
  Check,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Laptop,
  Maximize2,
  Printer,
  Smartphone,
  X,
} from "lucide-react";

import offerArt from "@/assets/kit-fonoaudiologia-oferta.jpeg.asset.json";
import contentArt from "@/assets/kit-fonoaudiologia-conteudo.jpeg.asset.json";
import activitiesArt from "@/assets/kit-fonoaudiologia-atividades.jpeg.asset.json";

const CHECKOUT_URL = "https://pay.kiwify.com.br/u4CbMXg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kit Completo de Fonoaudiologia Infantil + de 200 materiais e atividades" },
      {
        name: "description",
        content:
          "Além do Kit Completo de Fonoaudiologia Infantil, você recebe mais de 200 materiais e atividades em PDF. Acesse pelo celular, computador ou tablet e imprima quando precisar.",
      },
      { property: "og:title", content: "Kit Completo de Fonoaudiologia Infantil + de 200 materiais e atividades" },
      {
        property: "og:description",
        content:
          "Além do Kit Completo de Fonoaudiologia Infantil, você recebe mais de 200 materiais e atividades em PDF. Acesse pelo celular, computador ou tablet e imprima quando precisar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function PurchaseButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a className={`purchase-button ${className}`} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <ExternalLink aria-hidden="true" size={19} />
    </a>
  );
}

const painPoints = [
  [Clock3, "Falta de tempo", "para preparar atividades"],
  [BookOpen, "Materiais espalhados", "e difíceis de organizar"],
  [Printer, "Pouca praticidade", "para usar e imprimir"],
  [Smartphone, "Tudo em um lugar", "para consultar quando precisar"],
] as const;

const contents = [
  "Caderno de Fonoaudiologia",
  "Atividades de consciência fonológica",
  "Cartões de treino fonoaudiológico",
  "Cartões de vocabulário",
  "Atividades de sílabas",
  "Cartões de sílabas",
  "Atividades de leitura e interpretação",
  "Atividades de escrita",
  "Atividades de matemática",
  "Atividades de raciocínio lógico",
];

const benefits = [
  [BookOpen, "Materiais organizados", "Tenha diferentes atividades reunidas em um único kit."],
  [Clock3, "Economize tempo", "Tenha materiais prontos para consultar e utilizar."],
  [Smartphone, "Acesso digital", "Consulte pelo celular, computador ou tablet."],
  [Printer, "Pode imprimir", "Se preferir trabalhar com material físico, você pode imprimir as atividades."],
] as const;

const audience = [
  "Profissionais de Fonoaudiologia",
  "Atendimento infantil",
  "Profissionais que utilizam atividades pedagógicas e de linguagem",
  "Quem prefere materiais digitais que também podem ser impressos",
];

const faqs = [
  ["É um produto físico?", "Não. O produto é digital."],
  ["Como vou acessar o material?", "O material é digital e pode ser acessado por dispositivos compatíveis, como celular, computador ou tablet."],
  ["Posso imprimir as atividades?", "Sim. As atividades digitais podem ser utilizadas na tela ou impressas, conforme sua preferência e necessidade."],
  ["Para quem é o material?", "Para profissionais que trabalham com crianças e buscam atividades e recursos para utilizar em sua rotina de atendimentos."],
  ["Quantas atividades estão incluídas?", "O kit reúne mais de 200 atividades e materiais, conforme apresentado na oferta."],
  ["Quando recebo o acesso?", "O acesso é disponibilizado de forma digital após a confirmação da compra."],
] as const;

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Index() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightboxOpen(false);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <main>
      <div className="top-strip">Material digital em PDF · Acesso prático e imediato após confirmação da compra</div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Kit Completo de Fonoaudiologia Infantil<span className="h1-plus">+ <mark>de 200 materiais e atividades</mark></span></h1>
            <p className="hero-lead">Além do kit completo, você recebe mais de 200 materiais e atividades digitais organizados para facilitar seus atendimentos e poupar horas procurando ou preparando recursos.</p>
            <div className="access-row">
              <span><Download size={17} /> Acesso digital</span>
              <span><FileText size={17} /> Arquivos em PDF</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-frame image-frame-hero">
              <img src={offerArt.url} alt="Arte do Kit Completo de Fonoaudiologia Infantil com mais de 200 materiais e atividades" fetchPriority="high" />
            </div>
            <div className="floating-note"><Check size={17} /> Pronto para consultar</div>
          </div>
          <div className="hero-offer">
            <div className="hero-price"><small>POR APENAS</small><strong>R$ 14,90</strong></div>
            <PurchaseButton className="hero-cta">QUERO ACESSAR O KIT AGORA</PurchaseButton>
            <p className="microcopy">Material digital • Acesso pelo celular, computador ou tablet • Também pode ser impresso</p>
          </div>
        </div>
      </section>

      <section className="section pain-section">
        <div className="container">
          <SectionHeading eyebrow="Sua rotina pode ser mais prática" title="Você também perde tempo procurando atividades para cada atendimento?" text="Quem trabalha com crianças sabe como pode ser trabalhoso encontrar atividades adequadas, organizar materiais e pensar em novos recursos para cada atendimento." />
          <div className="pain-grid">
            {painPoints.map(([Icon, title, text]) => (
              <article className="mini-card" key={title}><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <p className="bridge-copy">Por isso, reunimos um kit completo de atividades e materiais digitais em um único produto.</p>
        </div>
      </section>

      <section className="section product-section">
        <div className="container product-grid">
          <div className="image-frame product-image">
            <img src={contentArt.url} alt="Visão geral dos materiais incluídos no Kit de Fonoaudiologia Infantil" loading="lazy" />
          </div>
          <div className="product-copy">
            <span className="eyebrow">Tudo reunido para você</span>
            <h2>Conheça o Kit Completo de Fonoaudiologia Infantil</h2>
            <p>Além do kit completo, você recebe mais de 200 materiais e atividades digitais organizados para ter diferentes recursos à disposição durante seus atendimentos.</p>
            <ul className="check-list">
              <li><Check /> Atividades prontas e organizadas</li>
              <li><Check /> Cartões e recursos de apoio</li>
              <li><Check /> Consulta digital ou uso impresso</li>
              <li><Check /> Diferentes propostas em um só kit</li>
            </ul>
            <PurchaseButton>QUERO AS +200 ATIVIDADES</PurchaseButton>
          </div>
        </div>
      </section>

      <section className="section contents-section">
        <div className="container">
          <SectionHeading eyebrow="Conteúdo do kit" title="Olha tudo o que você vai receber" text="Uma seleção ampla de recursos que aparecem nas artes do produto, reunidos para facilitar sua consulta." />
          <div className="contents-grid">
            {contents.map((item, index) => <div className={`content-chip color-${(index % 5) + 1}`} key={item}><Check size={18} /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container gallery-grid">
          <div className="gallery-copy">
            <span className="eyebrow">Veja antes de comprar</span>
            <h2>Veja algumas das atividades por dentro</h2>
            <p>Confira alguns exemplos dos materiais que fazem parte do kit.</p>
            <div className="device-list"><span><Smartphone /> Celular</span><span><Laptop /> Computador e tablet</span><span><Printer /> Impressão</span></div>
            <PurchaseButton>ACESSAR O MATERIAL AGORA</PurchaseButton>
          </div>
          <button className="gallery-image-button" onClick={() => setLightboxOpen(true)} aria-label="Ampliar imagem com exemplos das atividades">
            <img src={activitiesArt.url} alt="Exemplos de atividades de consciência fonológica, vocabulário, sílabas, leitura, escrita, matemática e raciocínio lógico" loading="lazy" />
            <span><Maximize2 size={18} /> Clique para ampliar</span>
          </button>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <SectionHeading eyebrow="Feito para a rotina" title="Mais praticidade para sua rotina" />
          <div className="benefits-grid">
            {benefits.map(([Icon, title, text]) => <article className="benefit-card" key={title}><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container audience-wrap">
          <div><span className="eyebrow">Uso profissional</span><h2>Para quem é esse kit?</h2><p>Esse material é indicado para profissionais que trabalham com crianças e buscam atividades e recursos prontos para utilizar em sua rotina.</p></div>
          <div className="audience-list">{audience.map((item) => <div key={item}><Check /><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="section offer-section">
        <div className="container offer-wrap">
          <div className="offer-copy"><span className="eyebrow eyebrow-light">Oferta especial</span><h2>Acesso ao kit completo</h2><p>Tenha acesso ao material digital e utilize os conteúdos pelo celular, computador ou tablet — ou imprima para utilizar fisicamente.</p></div>
          <div className="offer-box"><small>ACESSO DIGITAL POR</small><strong>R$ 14,90</strong><PurchaseButton>QUERO MEU KIT POR R$ 14,90</PurchaseButton><p>Você será direcionado para a página segura de pagamento.</p></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-wrap">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Antes de acessar o seu kit" />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-inner">
          <span className="eyebrow">Seu material em um só lugar</span>
          <h2>Pronto para ter mais de 200 atividades à sua disposição?</h2>
          <p>Tenha um kit completo de materiais digitais para consultar, utilizar e imprimir quando precisar.</p>
          <strong className="final-price">R$ 14,90</strong>
          <PurchaseButton>QUERO ACESSAR O KIT AGORA</PurchaseButton>
        </div>
      </section>

      <footer><div className="container"><strong>Kit Completo de Fonoaudiologia Infantil +200 Atividades</strong><span>Produto digital.</span></div></footer>

      <div className="mobile-bar"><div><strong>Kit +200 Atividades</strong><span>R$ 14,90</span></div><a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">QUERO ACESSAR</a></div>

      {lightboxOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada das atividades" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Fechar imagem"><X /></button>
          <img src={activitiesArt.url} alt="Imagem ampliada com exemplos das atividades do kit" onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </main>
  );
}