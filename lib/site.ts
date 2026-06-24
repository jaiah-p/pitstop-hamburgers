export const SITE = {
  name: "Pitstop Hamburgers",
  tagline: "World famous burger cafe in Bellingen",
  location: "Behind the Thora General Store",
  address: "2656 Waterfall Way, Thora NSW 2454",
  between: "Midway between Bellingen & Dorrigo",
  hours: "Thursday to Sunday · 11am til 3pm",
  instagram: "https://www.instagram.com/pitstop.hamburgers/",
  facebook: "https://www.facebook.com/pitstophamburgersthora/",
  maps: "https://www.google.com/maps/search/?api=1&query=Pitstop+Hamburgers+Thora+NSW",
};

export type MenuItem = {
  name: string;
  price: number;
  blurb: string;
  note?: string;
  hero?: boolean;
};

export const MENU: MenuItem[] = [
  {
    name: "The World Famous Cheese Burger",
    price: 18,
    blurb:
      "Double smash patties of local beef, American cheese, onion, pickles and our sweet, tangy Mississippi comeback sauce on a buttered, toasted bun.",
    hero: true,
  },
  {
    name: "Triple It, Go On!",
    price: 5,
    blurb:
      "Three smash patties instead of two. For when two just won't cut it.",
    note: "add-on",
  },
  {
    name: "Make It Hot & Tropical",
    price: 3,
    blurb:
      "A spicy fried slice of pineapple stacked into your burger. Sweet heat, the way it was meant to be.",
    note: "add-on",
  },
  {
    name: "Beef Tallow Fries",
    price: 7,
    blurb:
      "Crinkle cut and fried in beef tallow until golden. Crisp edges, fluffy middle. Chips like no other.",
  },
  {
    name: "Dinosaur Nuggets",
    price: 7,
    blurb: "Exactly what they sound like. For the kids, and the kids at heart.",
  },
  {
    name: "Vanilla Milkshake",
    price: 8,
    blurb: "Thick, real vanilla, topped with whipped cream. Done right.",
  },
  {
    name: "Sunshine Lemonade",
    price: 6,
    blurb: "Cold, cloudy and properly tart. Made to wash down a burger.",
  },
];

// Real Google rating + reviews (Google Business Profile, pulled from Maps).
export const GOOGLE = {
  rating: 4.8,
  count: 65,
  url: SITE.maps,
};

export type Review = {
  author: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    author: "Abbey Farlow",
    rating: 5,
    text: "The absolute best burger I've ever had. The chef used to work at the famed hatted restaurant Sixpenny and you can tell because the quality of the food is incredible. What a charming little stop on the way to the waterholes.",
  },
  {
    author: "Nathan Mallon",
    rating: 5,
    text: "Genuinely insanely delicious smash burgers beating out plenty of the hyped city burger spots. Super kind little team behind it, and well worth going out of your way to experience. The shakes are so good too! Well worth the wait when they're busy.",
  },
  {
    author: "Lou L",
    rating: 5,
    text: "One of the best smash burgers I've had in a very long time. Beef tallow fries were amazing as well. Worth it!",
  },
];

export type PitstopEvent = {
  when: string;
  title: string;
  detail: string;
  recurring?: boolean;
};

// Edit this list to post upcoming events. The Sunday Chess Club is a weekly
// regular; add dated one-offs (live music, community nights) as they're booked.
export const EVENTS: PitstopEvent[] = [
  {
    when: "Every Sunday",
    title: "Sunday Chess Club",
    detail: "All ages and levels. Sit down, shake hands, make your next best move.",
    recurring: true,
  },
  {
    when: "On the deck",
    title: "Live Music Afternoons",
    detail: "Local acts and country tunes when the sun is out. Dates announced on Instagram.",
  },
  {
    when: "Keep an eye out",
    title: "Community Nights",
    detail: "Long-table feeds and get-togethers in the valley, now and then.",
  },
];
