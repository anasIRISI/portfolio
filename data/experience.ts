export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "polydesign",
    company: "Polydesign",
    location: "Tanger",
    position: "Ingénieur IA & Développement Web",
    period: "Août – Septembre 2026",
    description:
      "Développement d'un chatbot intelligent basé sur un AI Agent. Interrogation de données industrielles avec SQL read-only. Exploitation de documents techniques avec RAG.",
    technologies: [
      "Python",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "LLM",
      "RAG",
      "AI Agents",
      "LangChain",
    ],
  },
  {
    id: "3lm",
    company: "3LM",
    location: "Tunis",
    position: "Ingénieur IA & Développement Web",
    period: "Juin – Juillet 2026",
    description:
      "Développement d'une application web intelligente pour le marché belge de l'énergie. Analyse de données énergétiques et optimisation de la consommation.",
    technologies: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "LLM",
      "LangChain",
      "RAG",
    ],
  },
  {
    id: "aptiv",
    company: "Aptiv",
    location: "Tanger",
    position: "Ingénieur en Développement Web",
    period: "Juillet – Août 2025",
    description:
      "Développement d'une application web pour digitaliser les services internes de l'entreprise.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
];
