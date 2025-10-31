export const he = {
  common: {
    hello: "שלום",
    menu: "תפריט",
  },
    nav: {
    myAccount: "כניסה לאיזור אישי",
  },
} as const;

export type HeMessages = typeof he;
