export const ETSY_SHOP = "https://www.etsy.com/shop/TheDemureDesign";
export const GUMROAD_SHOP = "https://demuredesign.gumroad.com";
export const EMAIL = "hello@demure.design";
export const SITE_URL = "https://demure.design";

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
