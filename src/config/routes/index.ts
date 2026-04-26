export const ROUTES = {
  home: "/",
  testimonials: "/testimonios",
  privacy: "/privacidad",
  terms: "/terminos",
  design: "/diseño",
  designFlyer: "/diseño/flyer",
  designEmailSignature: "/diseño/firma-email",
  designBusinessCard: "/diseño/tarjeta",
  designAscii: "/diseno",
  notFound: "/404",
} as const;

export const MAIN_NAVIGATION = [
  { label: "Acerca", href: "/#acerca" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Trabajo", href: "/#trabajo" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Testimonios", href: ROUTES.testimonials },
] as const;

export const FOOTER_NAVIGATION = {
  services: [
    { label: "Páginas web", href: "/#servicios" },
    { label: "Marca & logo", href: "/#servicios" },
    { label: "Redes sociales", href: "/#servicios" },
    { label: "Google Ads", href: "/#servicios" },
    { label: "Fotografía", href: "/#servicios" },
  ],
  agency: [
    { label: "Acerca", href: "/#acerca" },
    { label: "Trabajo", href: "/#trabajo" },
    { label: "Equipo", href: "/#equipo" },
    { label: "Testimonios", href: ROUTES.testimonials },
    { label: "Sistema de diseño", href: ROUTES.design },
  ],
  legal: [
    { label: "Privacidad", href: ROUTES.privacy },
    { label: "Términos", href: ROUTES.terms },
    { label: "Cookies", href: ROUTES.privacy + "#cookies" },
  ],
} as const;

export const DESIGN_NAVIGATION = [
  { label: "Marca", href: "#brand" },
  { label: "Color", href: "#color" },
  { label: "Tipografía", href: "#typography" },
  { label: "Componentes", href: "#components" },
  { label: "Voz", href: "#voice" },
  { label: "Entregables", href: "#assets" },
] as const;
