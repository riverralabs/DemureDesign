export const ETSY_SHOP = "https://www.etsy.com/shop/TheDemureDesign";
export const ETSY_RSS = "https://www.etsy.com/shop/TheDemureDesign/rss";
export const GUMROAD_SHOP = "https://demuredesign.gumroad.com";
export const EMAIL = "hello@demure.design";
export const SITE_URL = "https://www.demure.design";
/** Root URL as the browser serves it, with the trailing slash. */
export const HOME_URL = `${SITE_URL}/`;

export function pageUrl(path = "/") {
  if (!path || path === "/") return HOME_URL;
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-z0-9]+$/i.test(clean)) return `${SITE_URL}${clean}`;
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}
