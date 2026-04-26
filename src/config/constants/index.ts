import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_AT,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from "../env";
import { ROUTES } from "../routes";

export const BRAND_MARK = {
  logoPath: "/assets/logo-muestrate.svg",
  iconPath: "/assets/isotipo-m.svg",
  sparkle: "✦",
} as const;

export const heroStats = [
  { value: "12", unit: "+", label: "Negocios peruanos mostrados" },
  { value: "48", unit: "h", label: "Entrega promedio de una web" },
  { value: "S/", unit: "250", label: "Desde - plan Empieza" },
  { value: "4.9", unit: "/5", label: "Promedio en nuestras reseñas" },
] as const;

export const marqueeItems = [
  "Barberías",
  "Restaurantes",
  "Doctores",
  "Abogados",
  "Psicólogos",
  "Tiendas",
  "Spas",
  "Talleres",
  "MYPEs",
] as const;

export const brandValues = [
  {
    icon: ">>",
    title: "Rápido de verdad",
    text: 'Tu web lista en 48 horas. Sin "te llamo la próxima semana".',
  },
  {
    icon: "S/",
    title: "Precios fijos",
    text: 'Pagas lo que te dijimos. Nada de "ah, pero eso no estaba incluido".',
  },
  {
    icon: "PE",
    title: "Para MYPEs",
    text: "Conocemos tu realidad. Hablamos tu idioma. Sabemos qué vende acá.",
  },
  {
    icon: "✦",
    title: "Con chispa",
    text: "Tu web no va a ser una plantilla igual a la del vecino. Punto.",
  },
] as const;

export const services = [
  {
    number: "★ Plan estrella",
    title: "Web que sí vende.",
    text: "Página profesional con todo lo que tu cliente necesita ver: servicios, fotos, formulario, WhatsApp flotante, y Google Maps. Lista en 48h.",
    tags: ["Dominio", "Hosting 1 año", "SEO básico", "Responsive"],
    price: "desde S/ 250",
    featured: true,
    href: WHATSAPP_URL,
  },
  {
    number: "02",
    title: "Marca & Logo",
    text: "Logo, paleta y papelería que no parezca hecha en Paint.",
    featured: false,
    href: WHATSAPP_URL,
  },
  {
    number: "03",
    title: "Redes sociales",
    text: "Posts y reels mensuales. Tono tuyo, no genérico.",
    featured: false,
    href: WHATSAPP_URL,
  },
  {
    number: "04",
    title: "Google Ads",
    text: "Apareces cuando tu cliente ya está buscando.",
    featured: false,
    href: WHATSAPP_URL,
  },
  {
    number: "05",
    title: "Fotografía",
    text: "Fotos de tu local/producto que dan ganas de comprar.",
    featured: false,
    href: WHATSAPP_URL,
  },
] as const;

export const workCases = [
  {
    category: "Coworking · Web + redes",
    title: "La Base Cowork",
    result: "+150% de reservas en 3 meses · Huancayo",
    visual: "COWORKING",
    className:
      "bg-orange text-paper md:col-span-3 min-h-[17rem] md:min-h-0 md:aspect-[8/5]",
    imageUrl: "/preview/labase.jpg",
    websiteUrl: "https://labase.pe",
  },
  {
    category: "Firma Legal · Web + redes",
    title: "Egida Juridica",
    result: '1er lugar en "firma legal huancayo" · +10 reservas/sem.',
    visual: "LEGAL",
    className:
      "bg-ink text-paper md:col-span-3 min-h-[17rem] md:min-h-0 md:aspect-[8/5]",
    imageUrl: "/preview/egidajuridica.jpg",
    websiteUrl: "https://egidajuridica.com",
  },
  {
    category: "Holding · Web",
    title: "Finacorp",
    result: "+50% de clientes nuevos en 3 meses",
    visual: "HOLDING",
    className:
      "bg-sun text-ink md:col-span-2 min-h-[17rem] md:min-h-0 md:aspect-[4/5]",
    imageUrl: "/preview/finacorp.jpg",
    websiteUrl: "https://finacorp.org",
  },
  {
    category: "Dental · Web",
    title: "Studio dental Evolution",
    result: "Producto de software para estudios jurídicos",
    visual: "DENTAL",
    className:
      "bg-lime text-ink md:col-span-2 min-h-[17rem] md:min-h-0 md:aspect-[4/5]",
    imageUrl: "/preview/evolution.jpg",
    websiteUrl: "https://evolution.com",
  },
  {
    category: "Sistema · Software",
    title: "Arxatec",
    result: "Producto de software para estudios jurídicos",
    visual: "SOFTWARE",
    className:
      "bg-paper text-ink md:col-span-2 min-h-[17rem] md:min-h-0 md:aspect-[4/5]",
    imageUrl: "/preview/arxatec.jpg",
    websiteUrl: "https://arxatec.net",
  },
] as const;

// sparkle: "light" = ✦ blanco, "dark" = ✦ negro (según claro/oscuro de la foto o el bloque)
export const teamMembers = [
  {
    initials: "HV",
    name: "Harvey Vasquez",
    role: "Director de Estrategia",
    bio: "El que atiende cuando llamas. 4 años haciendo digital para MYPEs.",
    colorClass: "bg-orange text-paper",
    imageUrl: "/team/harvey.jpg",
    sparkle: "light",
    linkedinUrl: "https://www.linkedin.com/in/harvey-yerik/",
    instagramUrl: "https://www.instagram.com/harveyyerik/?hl=es",
  },
  {
    initials: "JS",
    name: "Jhonny Sanes",
    role: "Director Creativo",
    bio: "Diseña todo lo que ves. Obsesionado con tipografía y el buen marketing.",
    colorClass: "bg-ink text-paper",
    imageUrl: "/team/jhonny.jpg",
    sparkle: "light",
    linkedinUrl: "https://www.linkedin.com/in/jhonny-sanes/",
  },
  {
    initials: "MG",
    name: "Michael Gaspar",
    role: "Director de Tecnología",
    bio: "Arma tu web y que cargue rápido. No usa plantillas de WordPress.",
    colorClass: "bg-sun text-ink",
    imageUrl: "/team/michael.jpg",
    sparkle: "light",
    instagramUrl: "https://www.instagram.com/katsu_lp/?hl=es",
  },
  {
    initials: "YO",
    name: "Yonatan Ordoñez",
    role: "Director de Marketing",
    bio: "La voz de la agencia en redes. Sabe qué vende en Perú, además de ser desarrollador full-stack.",
    colorClass: "bg-sky text-paper",
    imageUrl: "/team/yonatan.jpg",
    sparkle: "light",
    linkedinUrl:
      "https://www.linkedin.com/in/yonatan-alessander-ordonez-diego/",
    instagramUrl: "https://www.instagram.com/alexod17/?hl=es",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Pasamos de llenar salas a punta de WhatsApp. Ahora la web y las redes nos muestran solos; nosotros respondemos a quienes ya quieren puesto.",
    name: "Lucía Rojas",
    business: "La Base Cowork · Huancayo",
    initials: "LR",
    featured: true,
  },
  {
    quote:
      "El que busca abogado en Huancayo ya nos ve por la web. Las reservas y las consultas cambiaron: antes era referidos, ahora gente nueva que nunca había oído de nosotros.",
    name: "Eduardo Vásquez",
    business: "Egida Jurídica",
    initials: "EV",
    dark: true,
  },
  {
    quote:
      "Necesitábamos verse sólidos y entendibles. La web y el mensaje alinean con el holding; sin eso, seguíamos con la misma cartera y la misma duda al cotizar.",
    name: "Fernando Salas",
    business: "Finacorp",
    initials: "FS",
  },
  {
    quote:
      "A los pacientes les da confianza ver claro los servicios y agendar. La percepción del estudio en línea acompaña lo que hacemos en las butacas.",
    name: "Dra. Elisa Morán",
    business: "Studio dental Evolution",
    initials: "EM",
  },
  {
    quote:
      "El producto es técnico; Muéstrate lo bajó a un sitio que habla a estudios reales, no a un listado de requisitos. Eso trajo contactos de clientes que antes no calificaban el demo.",
    name: "André Ramírez",
    business: "Arxatec",
    initials: "AR",
    dark: true,
  },
] as const;

export const resultMetrics = [
  { value: "48h", label: "para tener una web lista y publicada" },
  { value: "+230%", label: "reservas online en el mejor caso documentado" },
  { value: "4.9/5", label: "promedio de satisfacción reportado" },
] as const;

export const designHeroStats = [
  { value: "48h", label: "Promesa de entrega" },
  { value: "1", label: "Color principal (naranja)" },
  { value: "2", label: "Familias tipográficas" },
  { value: "∞", label: "MYPEs por mostrar" },
] as const;

export const colorPalettes = {
  base: [
    {
      name: "Tinta",
      hex: "#0E0E0E",
      token: "INK",
      className: "bg-ink text-paper",
    },
    {
      name: "Naranja Muéstrate",
      hex: "#FF5B1F",
      token: "BRAND",
      className: "bg-orange text-paper",
    },
    {
      name: "Blanco",
      hex: "#FFFFFF",
      token: "PAPER",
      className: "bg-paper text-ink",
    },
    {
      name: "Crema",
      hex: "#FFF8F2",
      token: "PAPER WARM",
      className: "bg-paper-warm text-ink",
    },
  ],
  accents: [
    {
      name: "Sol",
      hex: "#FFD60A",
      token: "ACCENT",
      className: "bg-sun text-ink",
    },
    {
      name: "Lima",
      hex: "#D7FF4A",
      token: "ACCENT",
      className: "bg-lime text-ink",
    },
    {
      name: "Cielo",
      hex: "#4AB8FF",
      token: "ACCENT",
      className: "bg-sky text-ink",
    },
    {
      name: "Gris 100",
      hex: "#F2F2F2",
      token: "NEUTRAL",
      className: "bg-gray-100 text-ink",
    },
  ],
} as const;

export const typeRows = [
  {
    tag: "DISPLAY · 84/0.9",
    sample: "Muéstrate ya.",
    className: "text-[clamp(3.25rem,8vw,5.25rem)] leading-[0.9] font-semibold",
  },
  {
    tag: "H1 · 64/1",
    sample: "Tu negocio online en 48h",
    className: "text-[clamp(2.75rem,6vw,3.5rem)] leading-none font-semibold",
  },
  {
    tag: "H2 · 40/1.1",
    sample: "Páginas que sí venden",
    className: "text-[clamp(2rem,4vw,2.25rem)] leading-[1.1] font-semibold",
  },
  {
    tag: "H3 · 24/1.2",
    sample: "Plan Empieza · S/ 250",
    className: "text-2xl leading-[1.2] font-medium",
  },
  {
    tag: "BODY L · 20/1.45",
    sample:
      "Somos una agencia pe, hecha para MYPEs peruanas. Sin enredos, sin plantillas feas, sin esperar 3 meses.",
    className: "font-body text-xl leading-[1.45]",
  },
  {
    tag: "BODY · 16/1.55",
    sample:
      "Tu cliente te busca en Google. Tu competencia ya aparece. Tú deberías también. Por eso existe Muéstrate.",
    className: "font-body text-base leading-[1.55]",
  },
  {
    tag: "CAPTION · 12/1.4",
    sample: "MUÉSTRATE · AGENCIA DE MARKETING · HUANCAYO, PERÚ",
    className:
      "font-body text-xs font-semibold uppercase leading-[1.4] text-gray-500",
  },
] as const;

export const brandRules = {
  do: [
    "Usar sobre negro, naranja o blanco puro.",
    'Mantener área de respeto = altura de la "m".',
    "Respetar la chispa - es parte del logo.",
    "Tamaño mínimo: 80px de ancho digital / 20mm impreso.",
  ],
  dont: [
    "Cambiar la tipografía del logo.",
    "Aplicar sombras, degradés o efectos 3D.",
    "Rotar, inclinar o estirar.",
    "Usar sobre fotos sin contraste suficiente.",
  ],
} as const;

export const voiceExamples = {
  do: [
    "Tu web lista en 48h. Sin enredos, sin esperar meses.",
    "¿Listo para mostrarte? Empezamos hoy.",
    "Web + dominio + hosting = una sola cuota.",
  ],
  dont: [
    "Nuestra empresa ofrece soluciones digitales integrales para PYMES.",
    "Contáctenos para cotizar su proyecto web.",
    "Sinergia, stakeholders, transformación digital.",
  ],
} as const;

export const brandWords = [
  { label: "Palabra favorita", value: "Muéstrate." },
  { label: "Remate típico", value: "Así de simple." },
  { label: "Invitación", value: "Empezamos hoy." },
] as const;

export const assetTiles = [
  {
    kind: "Entregable 01",
    label: "Tarjeta de presentación",
    href: ROUTES.designBusinessCard,
  },
  {
    kind: "Entregable 02",
    label: "Flyer para redes",
    href: ROUTES.designFlyer,
  },
  {
    kind: "Entregable 03",
    label: "Firma de correo",
    href: ROUTES.designEmailSignature,
  },
] as const;

export const privacySections = [
  {
    id: "datos",
    title: "Datos que recopilamos",
    body: [
      `Recopilamos los datos que nos compartes cuando escribes por WhatsApp, correo o formularios: nombre, negocio, teléfono, correo electrónico y detalles necesarios para preparar una propuesta.`,
      "También podemos revisar datos públicos de tu negocio, como presencia en Google, redes sociales o mapas, para darte una recomendación más útil.",
    ],
  },
  {
    id: "uso",
    title: "Cómo usamos la información",
    body: [
      "Usamos tu información para responder consultas, preparar cotizaciones, ejecutar servicios contratados, coordinar entregas y mejorar nuestra atención.",
      "No vendemos tus datos ni los cedemos para publicidad de terceros. Así de simple.",
    ],
  },
  {
    id: "proveedores",
    title: "Servicios de terceros",
    body: [
      "Podemos usar herramientas como hosting, analítica, correo, WhatsApp, formularios o procesadores de pago. Solo compartimos lo necesario para prestar el servicio.",
      "Cuando publicamos una web, el dominio, hosting, formularios y métricas pueden depender de proveedores externos con sus propias políticas.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies y medición",
    body: [
      "La web puede usar cookies técnicas y de analítica para entender qué páginas funcionan mejor y mejorar la experiencia.",
      "Si activamos campañas, podemos medir conversiones para saber si una visita terminó en contacto, llamada o formulario.",
    ],
  },
  {
    id: "derechos",
    title: "Tus derechos",
    body: [
      `Puedes pedir acceso, corrección o eliminación de tus datos escribiendo a ${CONTACT_EMAIL}. También puedes solicitar que dejemos de contactarte.`,
      "Responderemos dentro de un plazo razonable y te diremos si necesitamos validar tu identidad antes de hacer cambios.",
    ],
  },
  {
    id: "terminos",
    title: "Notas de servicio",
    body: [
      "Las propuestas, tiempos y precios pueden variar según alcance, materiales entregados por el cliente y complejidad técnica.",
      "Cuando una oferta menciona entrega en 48h, se entiende desde que recibimos el pago, la información mínima y los accesos necesarios.",
    ],
  },
] as const;

export const termsSections = [
  {
    id: "alcance",
    title: "Alcance de los servicios",
    body: [
      "Muéstrate presta servicios de diseño web, identidad visual, contenido, campañas digitales, SEO local, fotografía y acompañamiento comercial para MYPEs.",
      "Cada proyecto se rige por la propuesta aceptada: ahí se define qué incluye, qué no incluye, tiempos, entregables y precio final.",
    ],
  },
  {
    id: "cotizaciones",
    title: "Cotizaciones y pagos",
    body: [
      "Las cotizaciones tienen validez limitada y pueden cambiar si el alcance cambia, si se agregan nuevas piezas o si se requieren integraciones no contempladas.",
      "Podemos solicitar adelantos para iniciar el trabajo. El proyecto se considera iniciado cuando recibimos el pago acordado y la información mínima necesaria.",
    ],
  },
  {
    id: "tiempos",
    title: "Tiempos de entrega",
    body: [
      "Cuando mencionamos entregas en 48h, nos referimos a proyectos con alcance estándar y materiales completos: texto, fotos, datos del negocio, accesos y aprobación oportuna.",
      "Si faltan materiales, hay cambios de alcance o el cliente demora en responder, el cronograma se ajusta sin penalidad para Muéstrate.",
    ],
  },
  {
    id: "revisiones",
    title: "Revisiones y cambios",
    body: [
      "Cada propuesta puede incluir una cantidad específica de rondas de revisión. Los ajustes deben estar relacionados con el alcance contratado.",
      "Cambios estructurales, nuevas secciones, piezas adicionales o integraciones extra pueden cotizarse por separado.",
    ],
  },
  {
    id: "contenido",
    title: "Contenido y derechos",
    body: [
      "El cliente declara que tiene permiso para usar textos, fotos, logos, marcas, testimonios y cualquier material que nos entregue.",
      "Muéstrate puede mostrar el proyecto como parte de su portafolio, salvo que exista un acuerdo escrito de confidencialidad.",
    ],
  },
  {
    id: "terceros",
    title: "Dominios, hosting y terceros",
    body: [
      "Algunos servicios dependen de proveedores externos como dominios, hosting, correo, pasarelas de pago, analítica, mapas o plataformas publicitarias.",
      "No controlamos cambios, caídas, precios, políticas o restricciones de esos proveedores. Aun así, te ayudaremos a resolverlo de la forma más práctica posible.",
    ],
  },
  {
    id: "garantia",
    title: "Garantía y soporte",
    body: [
      "Corregimos errores técnicos atribuibles a nuestra implementación dentro del periodo indicado en la propuesta.",
      "El soporte no incluye cambios de diseño, actualización de contenido, fallas causadas por terceros, modificaciones hechas por el cliente o problemas por credenciales compartidas.",
    ],
  },
  {
    id: "cancelaciones",
    title: "Cancelaciones",
    body: [
      "Si el cliente cancela un proyecto ya iniciado, los pagos realizados pueden aplicarse al trabajo avanzado, horas invertidas, licencias, compras o costos asumidos.",
      "Los reembolsos, si corresponden, se evalúan según el avance real y las condiciones de la propuesta aceptada.",
    ],
  },
] as const;

export const contactCards = [
  { label: "Correo", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    label: "Teléfono",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`,
  },
  { label: "WhatsApp", value: "Hablar ahora", href: WHATSAPP_URL },
  { label: "Instagram", value: INSTAGRAM_AT, href: SOCIAL_LINKS.instagram },
] as const;
