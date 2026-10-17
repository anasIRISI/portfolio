export interface Achievement {
  id: string;
  title: string;
  event: string;
  date?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "gemini-hack",
    title: "2e prix",
    event: "Gemini Hack Night",
  },
  {
    id: "patrimoine-hack",
    title: "Participation",
    event: 'Hackathon "Mémoire, Patrimoine, Innovation"',
  },
  {
    id: "skill-up",
    title: "Participation",
    event: "Skill Up",
  },
  {
    id: "dev4day",
    title: "Participation",
    event: "DEV4DAY",
  },
];
