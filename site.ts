export const site = {
  name: "Elias Vane",
  firstName: "Elias",
  role: "Web Designer / Digital Experience Designer",
  email: "hello@eliasvane.design",
  location: "Lisbon · Working worldwide",
  timezone: "GMT+1",
  since: 2015,
} as const;

export const mailto = (subject: string, body?: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

export const primaryMailto = mailto(
  "New project enquiry",
  `Hi Elias,\n\nI'd like to talk about a new project.\n\nProject: \nTimeline: \nBudget range: \n\nThanks,\n`,
);

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Product = {
  id: string;
  index: string;
  name: string;
  family: string;
  tagline: string;
  target: string;
};

export const products: Product[] = [
  {
    id: "aura",
    index: "01",
    name: "Aura One",
    family: "Audio",
    tagline: "Adaptive listening, designed around silence.",
    target: "#project-aura",
  },
  {
    id: "halo",
    index: "02",
    name: "Halo Pad",
    family: "Power",
    tagline: "A charging surface that disappears into the desk.",
    target: "#project-halo",
  },
  {
    id: "pulse",
    index: "03",
    name: "Pulse",
    family: "Mobile",
    tagline: "A daily health companion with a calm interface.",
    target: "#project-pulse",
  },
  {
    id: "vero",
    index: "04",
    name: "Vero Studio",
    family: "Hardware",
    tagline: "A creative machine and the system around it.",
    target: "#project-vero",
  },
  {
    id: "lumen",
    index: "05",
    name: "Lumen",
    family: "Intelligence",
    tagline: "An AI workspace that explains its thinking.",
    target: "#project-lumen",
  },
];

export type ProjectMeta = {
  role: string;
  year: string;
  scope: string;
  outcome: string;
};

export const services = [
  {
    index: "01",
    title: "Web Design",
    body: "Editorial, brand-led websites with a clear narrative from the first scroll to the final call to action.",
  },
  {
    index: "02",
    title: "UI/UX Design",
    body: "Interface systems, flows and states designed for real usage — not just for a portfolio shot.",
  },
  {
    index: "03",
    title: "Landing Pages",
    body: "High-conversion single-page experiences built around one message and one decisive action.",
  },
  {
    index: "04",
    title: "Product Websites",
    body: "Launch pages that present hardware and software like the considered products they are.",
  },
  {
    index: "05",
    title: "Interactive Web Experiences",
    body: "Scroll choreography, motion systems and micro-interactions that stay fast on every device.",
  },
  {
    index: "06",
    title: "Responsive Web Design",
    body: "One design language that holds its precision from a 320px phone to a 6K studio display.",
  },
];

export const stats = [
  { value: "10+", label: "Years designing for the web" },
  { value: "60+", label: "Products & sites shipped" },
  { value: "4", label: "Continents worked across" },
];

export const principles = [
  {
    title: "Clarity first",
    body: "Every screen answers one question. If a detail doesn't help the visitor decide, it goes.",
  },
  {
    title: "Motion with meaning",
    body: "Animation is used to explain hierarchy and continuity — never as decoration.",
  },
  {
    title: "Built to ship",
    body: "Design files are engineered: tokens, states, breakpoints and handoff developers enjoy.",
  },
];

export const processSteps = [
  { step: "01", title: "Discovery", body: "Goals, audience, positioning and the one thing the site must achieve." },
  { step: "02", title: "Direction", body: "Art direction, typography and a visual language explored in real layouts." },
  { step: "03", title: "Design", body: "Full responsive system — every state, breakpoint and interaction documented." },
  { step: "04", title: "Delivery", body: "Build support, QA on real devices, and a launch that feels effortless." },
];
