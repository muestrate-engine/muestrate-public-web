import {
  BRAND_NAME,
  BUSINESS_LOCATION,
  BUSINESS_HOURS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "../env";
import { ROUTES } from "../routes";

/** Metadatos por página: títulos, OG, hreflang, JSON-LD, IndexNow, etc. */
export type BreadcrumbItem = { name: string; path: string };

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Recomendado para OG (150–200 caracteres en redes) */
  imageAlt?: string;
  ogType?: "website" | "article";
  keywords?: string[];
  /** Nombre en JSON-LD WebPage (más limpio que el title) */
  pageName?: string;
  /** Sin “Inicio”; se antepone en el layout */
  breadcrumb?: BreadcrumbItem[];
  /**
   * Páginas de manual de marca: no rinden en búsqueda.
   * IndexNow/SEO orientados a oferta comercial; ver https://www.indexnow.org/es_es/index
   */
  noindex?: boolean;
  /** Añadido automático de WebPage + BreadcrumbList en el layout (salvo con noindex) */
  includeWebPageJsonLd?: boolean;
};

export const DEFAULT_IMAGE = "/assets/logo-muestrate.svg";
/** Dimensiones recomendadas para compartir en redes (páginas con PNG/JPG) */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const LOCALE = "es_PE" as const;
export const HREFLANG = "es-PE" as const;

const homeDesc =
  "Agencia de marketing y diseño web en Huancayo: webs, branding y publicidad digital para MYPEs peruanas. Presencia online que vende.";

export const PAGE_META = {
  home: {
    title: "Muéstrate | Agencia de marketing y web para MYPEs en Perú",
    description: homeDesc,
    path: ROUTES.home,
    imageAlt: "Muéstrate — agencia de marketing y diseño web para MYPEs en Perú",
    pageName: "Inicio | Muéstrate",
    keywords: [
      "agencia de marketing Perú",
      "diseño web MYPEs",
      "marketing digital Huancayo",
      "página web para negocios",
      "branding pymes",
    ],
    includeWebPageJsonLd: true,
  },
  testimonials: {
    title: "Testimonios de clientes | Muéstrate — MYPEs en Perú",
    description:
      "Casos reales: negocios en Perú que mejoraron su web, su marca o sus campañas con Muéstrate. Reseñas y resultados.",
    path: ROUTES.testimonials,
    pageName: "Testimonios de clientes",
    keywords: [
      "opiniones Muéstrate",
      "agencia marketing testimonios",
      "MYPEs Perú",
    ],
    breadcrumb: [{ name: "Testimonios", path: ROUTES.testimonials }],
    includeWebPageJsonLd: true,
  },
  privacy: {
    title: "Política de privacidad y datos | Muéstrate",
    description:
      "Cómo recopilamos, usamos y protegemos datos personales: contacto, formularios, cookies y cumplimiento en Perú.",
    path: ROUTES.privacy,
    pageName: "Política de privacidad",
    keywords: [
      "privacidad Muéstrate",
      "protección de datos",
      "cookies",
      "Perú",
    ],
    breadcrumb: [{ name: "Privacidad", path: ROUTES.privacy }],
    includeWebPageJsonLd: true,
  },
  terms: {
    title: "Términos y condiciones de servicio | Muéstrate",
    description:
      "Condiciones de contratación, entregas, plazos, pagos, revisiones y responsabilidad al contratar servicios con Muéstrate.",
    path: ROUTES.terms,
    pageName: "Términos y condiciones",
    keywords: [
      "términos agencia marketing",
      "condiciones de servicio",
      "Muéstrate",
    ],
    breadcrumb: [{ name: "Términos y condiciones", path: ROUTES.terms }],
    includeWebPageJsonLd: true,
  },
  design: {
    title: "Sistema de diseño (manual de marca) | Muéstrate",
    description:
      "Guía interna: logo, colores, tipografía, voz y entregables de la marca Muéstrate.",
    path: ROUTES.design,
    pageName: "Sistema de diseño",
    noindex: true,
    includeWebPageJsonLd: false,
  },
  designFlyer: {
    title: "Plantillas de flyer y redes | Manual Muéstrate",
    description:
      "Especificaciones de piezas 1:1 e historias para redes con la identidad Muéstrate. Uso interno.",
    path: ROUTES.designFlyer,
    pageName: "Flyer para redes",
    noindex: true,
    includeWebPageJsonLd: false,
  },
  designEmailSignature: {
    title: "Firmas de correo | Manual Muéstrate",
    description:
      "Variantes de firma de email bajo lineamientos de marca. Documentación de equipo.",
    path: ROUTES.designEmailSignature,
    pageName: "Firma de email",
    noindex: true,
    includeWebPageJsonLd: false,
  },
  designBusinessCard: {
    title: "Tarjeta de presentación | Manual Muéstrate",
    description:
      "Especificaciones de impresión y variantes claro/oscuro. Material de identidad interno.",
    path: ROUTES.designBusinessCard,
    pageName: "Tarjeta de presentación",
    noindex: true,
    includeWebPageJsonLd: false,
  },
  notFound: {
    title: "Página no encontrada (404) | Muéstrate",
    description:
      "La página que buscas no existe. Vuelve al inicio o revisa el enlace.",
    path: ROUTES.notFound,
    noindex: true,
    includeWebPageJsonLd: false,
  },
} satisfies Record<string, PageMeta>;

export const makeCanonicalUrl = (path: string) =>
  new URL(path, SITE_URL).toString();

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

/**
 * Un solo nodo de organización (LocalBusiness + agencia) con @id enriquecido
 * @see https://schema.org/LocalBusiness
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@id": organizationId,
  "@type": ["LocalBusiness", "MarketingAgency"],
  name: BRAND_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: makeCanonicalUrl(DEFAULT_IMAGE),
  },
  image: makeCanonicalUrl(DEFAULT_IMAGE),
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huancayo",
    addressRegion: "Junín",
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  sameAs: Object.values(SOCIAL_LINKS),
  knowsAbout: [
    "Diseño web",
    "Marketing digital",
    "Branding",
    "SEO local",
    "Google Ads",
    "Redes sociales",
  ],
  priceRange: "S/250+",
  slogan: "Tu negocio online en 48h.",
  location: {
    "@type": "Place",
    name: BUSINESS_LOCATION,
  },
  openingHours: BUSINESS_HOURS,
} as const;

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@id": websiteId,
  "@type": "WebSite",
  name: BRAND_NAME,
  url: SITE_URL,
  description: homeDesc,
  inLanguage: HREFLANG,
  publisher: { "@id": organizationId },
} as const;

export function getWebPageJsonLd(
  meta: PageMeta,
  isHome: boolean
): Record<string, unknown> {
  const url = makeCanonicalUrl(meta.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: meta.pageName ?? meta.title,
    description: meta.description,
    inLanguage: HREFLANG,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: makeCanonicalUrl(meta.image ?? DEFAULT_IMAGE),
    },
    ...(isHome
      ? {
          mainEntity: { "@id": websiteId },
        }
      : {}),
  };
}

export function getBreadcrumbListJsonLd(
  items: BreadcrumbItem[]
): Record<string, unknown> | null {
  if (items.length === 0) return null;
  const withHome: BreadcrumbItem[] = [
    { name: "Inicio", path: ROUTES.home },
    ...items,
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    numberOfItems: withHome.length,
    itemListElement: withHome.map((crumb, i) => {
      const itemUrl = makeCanonicalUrl(crumb.path);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: itemUrl,
      };
    }),
  };
}

/**
 * Página interna: Organization + WebPage (+ breadcrumb si aplica).
 * En home usa organization + WebSite (en la página) + WebPage inicio.
 */
export function getDefaultPageStructuredData(
  meta: PageMeta,
  options: { isHome: boolean }
): unknown[] {
  if (options.isHome) {
    return [organizationSchema, webSiteSchema, getWebPageJsonLd(meta, true)];
  }
  if (meta.noindex || meta.includeWebPageJsonLd === false) {
    return [organizationSchema];
  }
  const out: unknown[] = [organizationSchema, getWebPageJsonLd(meta, false)];
  if (meta.breadcrumb?.length) {
    const bc = getBreadcrumbListJsonLd(meta.breadcrumb);
    if (bc) out.push(bc);
  }
  return out;
}

/**
 * Ruta pública a la clave IndexNow (tras generar public/{key}.txt en el build).
 * Úsala con `npm run indexnow:ping` o tu CI.
 * @see https://www.indexnow.org/es_es/index
 */
export const indexNowKeyFileUrl = (key: string) =>
  `${SITE_URL.replace(/\/$/, "")}/${key}.txt`;
