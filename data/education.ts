export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const educationData: Education[] = [
  {
    id: "engineering",
    degree: "Diplôme d'ingénieur en Génie Informatique",
    institution: "Université Cadi Ayyad",
    period: "2024 – 2027",
  },
  {
    id: "deug",
    degree: "DEUG en Sciences Mathématiques et Informatiques",
    institution: "Université Abdelmalek Essaâdi",
    period: "2022 – 2024",
  },
];
