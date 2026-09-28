export const SITE = {
  name: "HealFromYoga",
  tagline: "Safe, guided movement for every stage.",
  domain: "healfromyoga.com",
  email: "hello@healfromyoga.com",
} as const;

/** Cal.com booking — update checkout URLs when Lemon Squeezy is wired */
export const LINKS = {
  booking: {
    /** Primary CTA — full intro call */
    primary: "https://cal.com/healfromyoga/30min",
    /** Secondary — quick intro call */
    quick: "https://cal.com/healfromyoga/15min",
    /** Cal.com embed paths (username/event-slug) */
    embed: {
      primary: "healfromyoga/30min",
      quick: "healfromyoga/15min",
    },
  },
  /** On-site booking page with embedded calendar */
  bookPage: "/book",
  checkout: {
    foundation: "#checkout-foundation",
    balance: "#checkout-balance",
    restore: "#checkout-restore",
    thrive: "#checkout-thrive",
  },
  social: {
    instagram: "#",
    tiktok: "#",
  },
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type BookingDuration = "30" | "15";
