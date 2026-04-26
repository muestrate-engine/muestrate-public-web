import {
  BRAND_NAME,
  BUSINESS_LOCATION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "../env";
import { ROUTES } from "../routes";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export const DEFAULT_IMAGE = "/assets/logo-muestrate.svg";

export const PAGE_META = {
  home: {
    title: "Muéstrate · Agencia de marketing para MYPEs peruanas",
    description:
      "Webs, marca y campañas para MYPEs peruanas que quieren aparecer, vender y dejar de pasar desapercibidas.",
    path: ROUTES.home,
  },
  testimonials: {
    title: "Testimonios · Muéstrate",
    description:
      "Historias de negocios peruanos que mejoraron su presencia online con Muéstrate.",
    path: ROUTES.testimonials,
  },
  privacy: {
    title: "Política de privacidad · Muéstrate",
    description:
      "Cómo Muéstrate recopila, usa y protege los datos de clientes, prospectos y visitantes.",
    path: ROUTES.privacy,
  },
  terms: {
    title: "Términos y condiciones · Muéstrate",
    description:
      "Condiciones de contratación, tiempos, entregables, pagos y responsabilidades al trabajar con Muéstrate.",
    path: ROUTES.terms,
  },
  design: {
    title: "Sistema de diseño · Muéstrate",
    description:
      "Guía visual de Muéstrate: logo, color, tipografía, componentes, voz de marca y entregables.",
    path: ROUTES.design,
  },
  designFlyer: {
    title: "Flyer para redes · Sistema de diseño Muéstrate",
    description:
      "Plantillas de flyer para feed e historias de redes sociales usando la identidad visual de Muéstrate.",
    path: ROUTES.designFlyer,
  },
  designEmailSignature: {
    title: "Firma de email · Sistema de diseño Muéstrate",
    description:
      "Variantes de firma de correo para uso diario, propuestas comerciales y respuestas rápidas.",
    path: ROUTES.designEmailSignature,
  },
  designBusinessCard: {
    title: "Tarjeta de presentación · Sistema de diseño Muéstrate",
    description:
      "Tarjetas de presentación Muéstrate en variantes oscura y clara, con especificaciones de impresión.",
    path: ROUTES.designBusinessCard,
  },
  notFound: {
    title: "Página no encontrada · Muéstrate",
    description:
      "La página que buscas no existe o cambió de lugar. Vuelve al inicio de Muéstrate.",
    path: ROUTES.notFound,
  },
} satisfies Record<string, PageMeta>;

export const makeCanonicalUrl = (path: string) =>
  new URL(path, SITE_URL).toString();

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: BRAND_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: makeCanonicalUrl(DEFAULT_IMAGE),
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huancayo",
    addressCountry: "PE",
  },
  areaServed: "Perú",
  sameAs: Object.values(SOCIAL_LINKS),
  knowsAbout: [
    "Diseño web",
    "Marketing digital",
    "Branding",
    "SEO local",
    "Google Ads",
    "Redes sociales",
  ],
};

export const localBusinessSchema = {
  ...organizationSchema,
  "@type": "LocalBusiness",
  priceRange: "S/250+",
  slogan: "Tu negocio online en 48h.",
  location: BUSINESS_LOCATION,
};
