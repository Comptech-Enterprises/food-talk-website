/**
 * Single source of truth for site copy & imagery.
 * Copy is adapted from the original Food Talk India site.
 * Photography uses royalty-free Unsplash food imagery.
 */

export const nav = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Categories", href: "/#categories" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Socials", href: "/#socials" },
  { label: "Careers", href: "/careers" },
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

export type Reason = {
  id: string;
  title: string;
  copy: string;
};

export const whyUs = {
  eyebrow: "Why Food Talk",
  headline: "Tastemakers you can actually trust.",
  intro:
    "Anyone can post a food photo. We earn attention the harder way — by being honest, being everywhere, and telling stories worth your time.",
  reasons: [
    {
      id: "honest",
      title: "Straight-up honest",
      copy: "No paid fluff, no fake five-stars. If a place isn't worth your money, we'll tell you — that's why people believe us.",
    },
    {
      id: "ground",
      title: "On the ground, always",
      copy: "Real people eating real meals across India, not reviews written from a desk. We taste it before we talk about it.",
    },
    {
      id: "stories",
      title: "Stories, not listicles",
      copy: "We turn food into something you want to watch, read and share — entertainment with real substance behind it.",
    },
    {
      id: "local",
      title: "Deep local knowledge",
      copy: "City by city, lane by lane. From fine dining to the cart on the corner, we know where the good stuff hides.",
    },
  ] as Reason[],
  stats: [
    { value: "2M+", label: "Food lovers trust us" },
    { value: "500+", label: "Places reviewed" },
    { value: "12+", label: "Cities covered" },
    { value: "0", label: "Paid-for reviews" },
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

export type Category = {
  id: string;
  name: string;
  tagline: string;
  tag: string;
  views: string;
  episodes: string;
  image: string;
};

/**
 * Signature content series ("IPs"), shown as vertical reel cards.
 * Swap images/stats for real reel thumbnails when available.
 */
export const categories: Category[] = [
  {
    id: "on-the-radar",
    name: "On the Radar",
    tagline: "New spots before they blow up.",
    tag: "Discover",
    views: "1.2M",
    episodes: "42 reels",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&h=1100&q=80",
  },
  {
    id: "top-10-delhi",
    name: "Top 10 in Delhi",
    tagline: "The city's best, ranked & rated.",
    tag: "Guide",
    views: "890K",
    episodes: "28 reels",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&h=1100&q=80",
  },
  {
    id: "stirred",
    name: "Stirred",
    tagline: "Cocktails, bars & after dark.",
    tag: "Drinks",
    views: "2.1M",
    episodes: "36 reels",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&h=1100&q=80",
  },
  {
    id: "hidden-gems",
    name: "Hidden Gems",
    tagline: "Holes-in-the-wall worth the detour.",
    tag: "Discover",
    views: "640K",
    episodes: "19 reels",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&h=1100&q=80",
  },
  {
    id: "street-eats",
    name: "Street Eats",
    tagline: "Chaat, kebabs & everything between.",
    tag: "Culture",
    views: "3.4M",
    episodes: "51 reels",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f7a16e07?auto=format&fit=crop&w=700&h=1100&q=80",
  },
  {
    id: "the-big-review",
    name: "The Big Review",
    tagline: "No filter. Honest verdicts only.",
    tag: "Guide",
    views: "1.5M",
    episodes: "24 reels",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&h=1100&q=80",
  },
];

export const contact = {
  email: "info@anthem.in",
  phone: "+91 98765 43210",
  address: "Digital Food Talk Pvt. Ltd., New Delhi, India",
};

export const instagram = {
  handle: "foodtalkindia",
  url: "https://instagram.com/foodtalkindia",
  /** Shown until the Graph API token is wired up. Edit freely. */
  fallbackFollowers: 100000,
  fallbackPosts: [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&h=500&q=70",
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&h=500&q=70",
  ],
};

/** Audience & reach breakdown. Placeholder numbers — swap for real ones. */
export const audience = {
  eyebrow: "Audience & Reach",
  headline: "A hungry crowd, everywhere you look.",
  intro:
    "Our community isn't one number — it's food lovers spread across every platform they scroll.",
  channels: [
    { platform: "Instagram", value: "1,00,000+", label: "followers" },
    { platform: "YouTube", value: "250K+", label: "subscribers" },
    { platform: "Monthly reach", value: "5M+", label: "across platforms" },
  ],
};

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
