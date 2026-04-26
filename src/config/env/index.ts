export const SITE_URL = (
  import.meta.env.PUBLIC_SITE_URL ?? "https://muestrate.pe"
).replace(/\/$/, "");
export const BRAND_NAME = "Muéstrate";
export const LEGAL_NAME = "Muéstrate";
export const CONTACT_EMAIL =
  import.meta.env.PUBLIC_CONTACT_EMAIL ?? "hola@muestrate.pe";
export const CONTACT_PHONE =
  import.meta.env.PUBLIC_CONTACT_PHONE ?? "+51 999 888 777";
export const CONTACT_PHONE_URI = CONTACT_PHONE.replace(/[^\d+]/g, "");
export const WHATSAPP_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "51999888777";
export const WHATSAPP_MESSAGE =
  import.meta.env.PUBLIC_WHATSAPP_MESSAGE ??
  "Hola Muéstrate, quiero una web para mi negocio.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
export const BUSINESS_LOCATION = "Huancayo, Perú";
export const BUSINESS_HOURS = "Lun-Vie 9am-7pm";
export const SOCIAL_LINKS = {
  instagram:
    import.meta.env.PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/muestrate",
  facebook:
    import.meta.env.PUBLIC_FACEBOOK_URL ?? "https://facebook.com/muestrate",
  tiktok: import.meta.env.PUBLIC_TIKTOK_URL ?? "https://tiktok.com/@muestrate",
  linkedin:
    import.meta.env.PUBLIC_LINKEDIN_URL ??
    "https://linkedin.com/company/muestrate",
};
export const CURRENT_YEAR = new Date().getFullYear();
