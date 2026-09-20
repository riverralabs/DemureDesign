export const ETSY_SHOP = "https://www.etsy.com/shop/TheDemureDesign";
export const ETSY_RSS = "https://www.etsy.com/shop/TheDemureDesign/rss";
export const GUMROAD_SHOP = "https://demuredesign.gumroad.com";
export const EMAIL = "hello@demure.design";
export const SITE_URL = "https://www.demure.design";

export function pageUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
