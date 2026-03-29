"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote:
      "I am very amazed by the quality of the David Austin Garden roses that Rosaprima grows. This is the first time I had the chance to work with 60cm David Austin Garden roses, and it is life-changing!",
    name: "Gilberto Freihoff",
    role: "Floral Designer, Dogwood & Fir",
  },
  {
    quote:
      "We love working with Rosaprima. Not only do they have a wonderful selection of gorgeous roses and ranunculus, but they are also committed to providing excellent service to their customers.",
    name: "Kennicott Brothers",
    role: "Wholesaler",
  },
  {
    quote:
      "Rosaprima's roses are impeccable, exceptionally long-lasting, and arrive in perfect condition! When you work with roses from Rosaprima, I genuinely believe your designs are even more gorgeous!",
    name: "Emily Pinon",
    role: "Floral Designer",
  },
];

const benefits = [
  {
    title: "150+ Premium Varieties",
    description:
      "Access the world's most extensive collection of ultra-premium roses, including exclusive David Austin Garden Roses, spray roses, and ranunculus — grown at 2,800m altitude in Ecuador.",
  },
  {
    title: "Co-Branded Marketing",
    description:
      "Joint marketing campaigns, professional photography of your arrangements featuring Rosaprima roses, and shared social media amplification to elevate your brand presence.",
  },
  {
    title: "Brand Prestige",
    description:
      "Align your florist brand with the market leader in ultra-premium roses. Rosaprima's name carries 25+ years of luxury positioning that transfers directly to your business.",
  },
  {
    title: "Higher Margins",
    description:
      "Co-branded arrangements command 30–50% higher price points. Our partners consistently report increased order values and stronger customer retention in the luxury segment.",
  },
];

const steps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Schedule a meeting with our partnerships team. We'll learn about your brand, your clientele, and your design philosophy to identify the best collaboration opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Co-create exclusive arrangements and marketing materials. Our team works alongside yours to develop a co-branded collection that reflects both brands at their finest.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Go to market with joint campaigns, professional content, and ongoing support. We provide consistent supply, quality assurance, and marketing assets to drive orders.",
  },
];

const stats = [
  { value: "40%", label: "Average Increase in Order Value" },
  { value: "150+", label: "Exclusive Varieties Available" },
  { value: "61+", label: "Countries in Distribution Network" },
  { value: "25+", label: "Years of Premium Excellence" },
];

export function CoBrandingLanding() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const content = {
    en: {
      heroTag: "Partnership Program",
      heroTitle: "RosaPrima Co-Branding Program",
      heroSubtitle:
        "Elevate your floral brand with the world's premier ultra-premium rose grower. Together, we create extraordinary arrangements that command premium prices and captivate luxury clientele.",
      heroCta: "Schedule a Meeting",
      whyTitle: "Why Partner With RosaPrima",
      whySubtitle:
        "Join a select network of florists and designers who leverage the Rosaprima name to elevate their brand and grow their business.",
      howTitle: "How It Works",
      howSubtitle:
        "From first conversation to market launch in three seamless steps.",
      caseStudyTag: "Featured Collaboration",
      caseStudyTitle: "Dogwood & Fir × David Austin Roses × Rosaprima",
      caseStudyBody:
        "San Diego-based designer Gilberto Freihoff of Dogwood & Fir created a series of stunning wedding pieces using David Austin Garden Roses grown by Rosaprima. Combining dark red Tess roses with muted Eugenie and Juliet varieties, Gilberto produced an analogous color palette that showcased the depth and drama of premium roses at their finest.",
      caseStudyQuote:
        '"When I saw David Austin Roses in Rosaprima\'s catalog, I got excited! Tess roses are my forever favorite because they scream drama and mystery."',
      caseStudyAttrib: "— Gilberto Freihoff, Dogwood & Fir",
      caseStudyLink: "Read the Full Story",
      statsTitle: "The Partner Advantage",
      statsSubtitle:
        "Our co-branding partners consistently outperform industry benchmarks.",
      testimonialsTitle: "What Our Partners Say",
      ctaTitle: "Ready to Elevate Your Brand?",
      ctaSubtitle:
        "Join the RosaPrima Co-Branding Program and transform your floral business with the world's finest roses.",
      ctaButton: "Schedule a Meeting",
      ctaNote: "Our partnerships team will respond within 24 hours.",
    },
    es: {
      heroTag: "Programa de Alianzas",
      heroTitle: "Programa de Co-Branding RosaPrima",
      heroSubtitle:
        "Eleve su marca floral con el principal productor de rosas ultra-premium del mundo. Juntos, creamos arreglos extraordinarios que generan precios premium y cautivan a clientes de lujo.",
      heroCta: "Agendar una Reunión",
      whyTitle: "Por Qué Asociarse Con RosaPrima",
      whySubtitle:
        "Únase a una red selecta de floristas y diseñadores que aprovechan el nombre Rosaprima para elevar su marca y hacer crecer su negocio.",
      howTitle: "Cómo Funciona",
      howSubtitle:
        "Desde la primera conversación hasta el lanzamiento al mercado en tres pasos.",
      caseStudyTag: "Colaboración Destacada",
      caseStudyTitle: "Dogwood & Fir × David Austin Roses × Rosaprima",
      caseStudyBody:
        "El diseñador Gilberto Freihoff de Dogwood & Fir, basado en San Diego, creó una serie de impresionantes piezas nupciales utilizando rosas David Austin Garden cultivadas por Rosaprima. Combinando rosas Tess de rojo intenso con variedades Eugenie y Juliet de tonos suaves, Gilberto produjo una paleta análoga que muestra la profundidad y el drama de las rosas premium.",
      caseStudyQuote:
        '"¡Cuando vi las rosas David Austin en el catálogo de Rosaprima, me emocioné! Las rosas Tess son mis favoritas porque transmiten drama y misterio."',
      caseStudyAttrib: "— Gilberto Freihoff, Dogwood & Fir",
      caseStudyLink: "Leer la Historia Completa",
      statsTitle: "La Ventaja del Socio",
      statsSubtitle:
        "Nuestros socios de co-branding superan consistentemente los estándares de la industria.",
      testimonialsTitle: "Lo Que Dicen Nuestros Socios",
      ctaTitle: "¿Listo Para Elevar Su Marca?",
      ctaSubtitle:
        "Únase al Programa de Co-Branding RosaPrima y transforme su negocio floral con las mejores rosas del mundo.",
      ctaButton: "Agendar una Reunión",
      ctaNote: "Nuestro equipo de alianzas responderá en 24 horas.",
    },
  };

  const t = content[lang];

  /* Rosaprima brand colors */
  const cream = "#FAF7F2";
  const darkGreen = "#2C4A3E";
  const roseGold = "#C4956A";
  const burgundy = "#7A2E3A";
  const charcoal = "#3A3A3A";

  return (
    <div className="min-h-svh" style={{ backgroundColor: cream, color: charcoal }}>
      {/* Navigation Bar */}
      <nav
        className="flex items-center justify-between px-6 py-5 sm:px-12 lg:px-20"
        style={{ borderBottom: `1px solid ${roseGold}33` }}
      >
        <p
          className="font-heading text-xl tracking-wider"
          style={{ color: darkGreen }}
        >
          rosaprima
        </p>
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 text-sm">
            <button
              onClick={() => setLang("en")}
              className="uppercase tracking-widest text-xs transition-colors"
              style={{
                color: lang === "en" ? darkGreen : "#999",
                fontWeight: lang === "en" ? 600 : 400,
              }}
            >
              EN
            </button>
            <span style={{ color: "#ccc" }}>\</span>
            <button
              onClick={() => setLang("es")}
              className="uppercase tracking-widest text-xs transition-colors"
              style={{
                color: lang === "es" ? darkGreen : "#999",
                fontWeight: lang === "es" ? 600 : 400,
              }}
            >
              ES
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative px-6 py-24 text-center sm:px-12 lg:px-20 lg:py-32"
        style={{ backgroundColor: darkGreen, color: "#fff" }}
      >
        <p
          className="mb-5 text-[0.65rem] uppercase tracking-[0.4em]"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {t.heroTag}
        </p>
        <h1 className="font-heading text-3xl font-light italic tracking-wide sm:text-4xl lg:text-5xl xl:text-6xl">
          {t.heroTitle}
        </h1>
        <div
          className="mx-auto mt-5 h-px w-24"
          style={{ backgroundColor: roseGold }}
        />
        <p
          className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed sm:text-base"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {t.heroSubtitle}
        </p>
        <a
          href="https://www.rosaprima.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-3 text-sm uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: roseGold }}
        >
          {t.heroCta}
        </a>
      </section>

      {/* Why Partner Section */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2
              className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl"
              style={{ color: darkGreen }}
            >
              {t.whyTitle}
            </h2>
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ backgroundColor: roseGold }}
            />
            <p
              className="mx-auto mt-5 max-w-xl text-sm"
              style={{ color: "#888" }}
            >
              {t.whySubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8"
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid ${roseGold}22`,
                }}
              >
                <h3
                  className="text-base font-semibold uppercase tracking-wider"
                  style={{ color: darkGreen }}
                >
                  {b.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "#777" }}
                >
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-xs">
        <div className="h-px" style={{ backgroundColor: `${roseGold}33` }} />
      </div>

      {/* How It Works */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2
              className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl"
              style={{ color: darkGreen }}
            >
              {t.howTitle}
            </h2>
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ backgroundColor: roseGold }}
            />
            <p
              className="mx-auto mt-5 max-w-xl text-sm"
              style={{ color: "#888" }}
            >
              {t.howSubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <p
                  className="font-heading text-5xl font-light"
                  style={{ color: roseGold }}
                >
                  {s.step}
                </p>
                <h3
                  className="mt-4 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: darkGreen }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "#777" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-xs">
        <div className="h-px" style={{ backgroundColor: `${roseGold}33` }} />
      </div>

      {/* Case Study */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p
              className="mb-4 text-[0.65rem] uppercase tracking-[0.3em]"
              style={{ color: roseGold }}
            >
              {t.caseStudyTag}
            </p>
            <h2
              className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl"
              style={{ color: darkGreen }}
            >
              {t.caseStudyTitle}
            </h2>
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ backgroundColor: roseGold }}
            />
          </div>

          <div
            className="mt-12 p-8 sm:p-12"
            style={{ backgroundColor: "#fff", border: `1px solid ${roseGold}22` }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#777" }}
            >
              {t.caseStudyBody}
            </p>
            <blockquote
              className="mt-8 pl-6"
              style={{ borderLeft: `2px solid ${roseGold}` }}
            >
              <p
                className="font-heading text-base italic leading-relaxed"
                style={{ color: charcoal }}
              >
                {t.caseStudyQuote}
              </p>
              <p className="mt-3 text-sm" style={{ color: "#999" }}>
                {t.caseStudyAttrib}
              </p>
            </blockquote>
            <a
              href="https://www.rosaprima.com/blog/a-distinguished-collaboration-between-dogwood-fir-david-austin-roses-and-rosaprima"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm underline underline-offset-4"
              style={{ color: roseGold }}
            >
              {t.caseStudyLink} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="px-6 py-20 sm:px-12 lg:px-20"
        style={{ backgroundColor: darkGreen, color: "#fff" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl">
              {t.statsTitle}
            </h2>
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ backgroundColor: roseGold }}
            />
            <p
              className="mx-auto mt-5 max-w-xl text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {t.statsSubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="font-heading text-4xl font-light sm:text-5xl"
                  style={{ color: roseGold }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-3 text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2
              className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl"
              style={{ color: darkGreen }}
            >
              {t.testimonialsTitle}
            </h2>
            <div
              className="mx-auto mt-4 h-px w-16"
              style={{ backgroundColor: roseGold }}
            />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="p-8"
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid ${roseGold}22`,
                }}
              >
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "#777" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div
                  className="my-5 h-px"
                  style={{ backgroundColor: `${roseGold}33` }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ color: darkGreen }}
                >
                  {item.name}
                </p>
                <p className="text-xs" style={{ color: "#999" }}>
                  {item.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.rosaprima.com/testimonials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4"
              style={{ color: roseGold }}
            >
              {lang === "en"
                ? "View All Testimonials"
                : "Ver Todos los Testimonios"}{" "}
              &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="px-6 py-24 text-center sm:px-12 lg:px-20"
        style={{ backgroundColor: darkGreen, color: "#fff" }}
      >
        <h2 className="font-heading text-2xl font-light italic tracking-wide sm:text-3xl">
          {t.ctaTitle}
        </h2>
        <div
          className="mx-auto mt-5 h-px w-16"
          style={{ backgroundColor: roseGold }}
        />
        <p
          className="mx-auto mt-7 max-w-xl text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {t.ctaSubtitle}
        </p>
        <a
          href="https://www.rosaprima.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-3 text-sm uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: roseGold }}
        >
          {t.ctaButton}
        </a>
        <p
          className="mt-5 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {t.ctaNote}
        </p>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-10 text-center sm:px-12"
        style={{ backgroundColor: cream, borderTop: `1px solid ${roseGold}22` }}
      >
        <div className="mx-auto grid max-w-5xl gap-8 text-left sm:grid-cols-4">
          <div>
            <p
              className="font-heading text-lg tracking-wider"
              style={{ color: darkGreen }}
            >
              rosaprima
            </p>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "#999" }}>
              Become a distributor | To become part of the Rosaprima distribution
              network,{" "}
              <a
                href="https://www.rosaprima.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: roseGold }}
              >
                click here
              </a>
              .
            </p>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: darkGreen }}
            >
              Get in Touch
            </p>
            <div className="mt-3 space-y-2 text-xs" style={{ color: "#777" }}>
              <a
                href="https://www.rosaprima.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Connect
              </a>
              <a
                href="https://www.rosaprima.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Join Our Team
              </a>
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: darkGreen }}
            >
              Company
            </p>
            <div className="mt-3 space-y-2 text-xs" style={{ color: "#777" }}>
              <p>Our Story</p>
              <p>Inspiration</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: darkGreen }}
            >
              Brands
            </p>
            <div className="mt-3 space-y-2 text-xs" style={{ color: "#777" }}>
              <p>Floraprima</p>
              <p>Tavola</p>
              <p>Greenrose</p>
            </div>
          </div>
        </div>
        <div
          className="mx-auto mt-8 max-w-5xl border-t pt-6 text-xs"
          style={{ borderColor: `${roseGold}22`, color: "#bbb" }}
        >
          &copy; 2026 Rosaprima. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
