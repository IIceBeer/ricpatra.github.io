export type HandleCard = {
  badge: string;
  copy: string;
  href?: string;
  name: string;
  network: string;
  variant: "youtube" | "instagram" | "x" | "discord";
};

export const storyCards = [
  {
    number: "18",
    title: "Starting young",
    copy:
      "Ric Patra is at the beginning of the journey. The idea is simple: show up, create honestly, and keep getting better in public."
  },
  {
    number: "01",
    title: "Building from zero",
    copy:
      "This portfolio is not about pretending the story is finished. It is about documenting the first steps with style, intent, and consistency."
  },
  {
    number: "24/7",
    title: "Creator mindset",
    copy:
      "YouTube leads the way while Instagram and X carry the daily pulse. Discord is planned as the next live community move."
  }
];

export const handleCards: HandleCard[] = [
  {
    badge: "Primary",
    network: "YouTube",
    name: "@ricpatra",
    href: "https://www.youtube.com/@ricpatra",
    copy: "The main stage for videos, experiments, and the public journey.",
    variant: "youtube"
  },
  {
    badge: "Live",
    network: "Instagram",
    name: "@ricpatra",
    href: "https://www.instagram.com/ricpatra/",
    copy: "Behind the scenes, visual drops, and fast everyday moments.",
    variant: "instagram"
  },
  {
    badge: "Live",
    network: "X",
    name: "@ricpatra",
    href: "https://x.com/ricpatra",
    copy: "Quick thoughts, updates, and the running voice of the brand.",
    variant: "x"
  },
  {
    badge: "Soon",
    network: "Discord",
    name: "Community Opening",
    copy: "A future room for the early supporters, live talk, and direct community energy.",
    variant: "discord"
  }
];

export const collaborationItems = [
  "Creator collaborations",
  "Brand features and sponsored content",
  "Campaign concepts with a young voice",
  "Cross-platform storytelling support"
];

export const hirePageItems = [
  "Creator partnerships",
  "Campaign launches with Gen Z energy",
  "Story-led social content",
  "Video-first creative collaborations"
];
