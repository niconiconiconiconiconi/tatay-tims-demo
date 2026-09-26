import type { ClientConfig } from "../data/client.config";

export function getMessageUrl(config: ClientConfig) {
  return config.contact.messengerUrl || config.contact.whatsappUrl || "#quote";
}

export function getMessageChannel(config: ClientConfig) {
  return config.contact.messengerUrl ? "messenger" : "whatsapp";
}

export function getThemeStyle(config: ClientConfig) {
  return `--accent:${config.brand.accent};--accent-strong:${config.brand.accentStrong};--ink:${config.brand.ink};--surface:${config.brand.surface};--signal:${config.brand.signal}`;
}

export function getLocalBusinessJsonLd(config: ClientConfig) {
  if (!config.seo.structuredDataEnabled || config.site.previewMode) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: config.identity.businessName,
    url: config.site.canonicalUrl,
    telephone: config.contact.phoneLabel,
    email: config.contact.email,
    areaServed: config.serviceAreas,
    description: config.seo.description,
  };
}

export function getFaqJsonLd(config: ClientConfig) {
  if (!config.seo.structuredDataEnabled || config.site.previewMode) return null;

  const confirmedFaqs = config.faqs.filter((faq) => faq.confirmation === "safe-template-copy");

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: confirmedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
