export const en = {
  common: {
    hello: "Hello",
    menu: "Menu",
  },
  nav: {
    myAccount: "My Account",
  },
} as const;

export type EnMessages = typeof en;
