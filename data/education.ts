export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  level: string;
  status: "in-progress" | "completed";
}

export const educationData: Education[] = [
  {
    id: "engineering",
    degree: "Diplôme d'ingénieur en Génie Informatique",
    institution: "FSTG de Marrakech - Université Cadi Ayyad",
    period: "2024 – 2027",
    level: "Cycle ingénieur",
    status: "in-progress",
  },
  {
    id: "deug",
    degree: "DEUG en Sciences Mathématiques et Informatiques",
    institution: "Université Abdelmalek Essaâdi",
    period: "2022 – 2024",
    level: "Études universitaires",
    status: "completed",
  },
  {
    id: "baccalaureat",
    degree: "Baccalauréat Sciences Mathématiques B",
    institution: "Lycée Technique Moulay Youssef - Tanger",
    period: "2022",
    level: "Enseignement secondaire",
    status: "completed",
  },
];
