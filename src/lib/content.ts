/**
 * Single source of truth for site copy & imagery.
 * Copy is adapted from the original Food Talk India site.
 * Photography uses royalty-free Unsplash food imagery.
 */

export const nav = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Socials", href: "#socials" },
] as const;

export const hero = {
  lines: ["We Eat.", "We Drink.", "We Talk."],
  subtitle: "India's go-to for food, cocktails and culture with flavour.",
};

export const about = {
  eyebrow: "What We Do",
  headline: "Everything we make is to help people fall in love with fooood.",
  body: "Food Talk India is a digital media house born out of a simple love for food, drinks and all the conversations that follow around it — turning every meal into a story worth sharing.",
  stats: [
    { value: "12+", label: "Cities covered" },
    { value: "500+", label: "Places reviewed" },
    { value: "2M+", label: "Hungry followers" },
  ],
};

export type Milestone = {
  year: string;
  title: string;
  copy: string;
  image: string;
  metric: { value: string; label: string };
};

/**
 * Growth story shown in the interactive timeline.
 * NOTE: these milestones are illustrative placeholders — swap in the
 * real dates, headlines and numbers whenever you have them.
 */
export const milestones: Milestone[] = [
  {
    year: "2016",
    title: "The first bite",
    copy: "Food Talk begins life as an Instagram page — one camera, a big appetite, and honest takes on the city's best-kept culinary secrets.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "1", label: "city, endless cravings" },
  },
  {
    year: "2018",
    title: "Going city-wide",
    copy: "Coverage spreads across Delhi, Mumbai and Bangalore. The community crosses its first 100K followers hungry for where to eat next.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "100K+", label: "community members" },
  },
  {
    year: "2020",
    title: "Lights, camera, tasting",
    copy: "We roll out long-form video and the flagship show format that becomes our signature — turning every review into a story worth watching.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "10M+", label: "video views" },
  },
  {
    year: "2022",
    title: "Raising a glass",
    copy: "A dedicated cocktails & bars vertical launches, pouring drinks, nightlife and after-hours culture into the Food Talk mix.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "6", label: "cities, bar to bar" },
  },
  {
    year: "2024",
    title: "Food Talk Events",
    copy: "The community steps off the screen. Our first live tastings and events bring food lovers together around one very big table.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "20+", label: "live events hosted" },
  },
  {
    year: "2025",
    title: "A full media house",
    copy: "Now part of the Anthem & Explorers Club family, Food Talk reaches millions across India — still driven by that same simple love for fooood.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
    metric: { value: "2M+", label: "followers & counting" },
  },
];

export type Pillar = {
  id: string;
  title: string;
  copy: string;
  image: string;
  tag: string;
};

export const pillars: Pillar[] = [
  {
    id: "discover",
    title: "Discover",
    tag: "New & noteworthy",
    copy: "From new restaurants to bars that are making a wave, we keep our community updated on all things cool & fresh. If it's worth your time, you'll find it here.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "guide",
    title: "Guide",
    tag: "Reviews & know-how",
    copy: "With authentic reviews & lesser-known facts, we help the audience explore the best experiences and ensure every move they make and bite they take is unforgettable.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "entertain",
    title: "Entertain",
    tag: "Video & conversation",
    copy: "With fun videos and candid conversations, we blend entertainment with insightful content. Let's just say it's a meal with a generous side of chatter.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
];

export const socials = [
  { label: "Instagram", handle: "@foodtalkindia", href: "https://instagram.com/foodtalkindia" },
  { label: "YouTube", handle: "Food Talk India", href: "https://youtube.com/@foodtalkindia" },
  { label: "X / Twitter", handle: "@foodtalkindia", href: "https://x.com/foodtalkindia" },
  { label: "Facebook", handle: "Food Talk India", href: "https://facebook.com/foodtalkindia" },
];

/** Circular food photos for the footer marquee. */
export const marqueeImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=70",
];
