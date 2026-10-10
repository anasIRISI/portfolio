export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "legal-assistant",
    title: "Plateforme d'assistance juridique intelligente",
    description:
      "Application web d'analyse de documents juridiques avec génération de réponses contextualisées grâce au RAG et à l'IA générative.",
    category: "AI / GenAI",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "Gemini API", "RAG"],
    featured: true,
  },
  {
    id: "heritage-platform",
    title: "Plateforme de valorisation du patrimoine marocain",
    description:
      "Application permettant de localiser et explorer les monuments historiques marocains avec un chatbot intelligent pour accompagner les utilisateurs.",
    category: "AI / Web",
    technologies: ["React.js", "Django REST API", "OpenStreetMap API", "LLM"],
    featured: true,
  },
  {
    id: "marketplace",
    title: "Marketplace de matériel informatique",
    description:
      "Application mobile permettant l'achat et la vente de matériel informatique avec authentification, gestion des produits et notifications.",
    category: "Mobile",
    technologies: [
      "Java",
      "Android Studio",
      "Firebase Firestore",
      "Firebase Authentication",
      "FCM",
      "Cloudinary",
    ],
    featured: false,
  },
  {
    id: "vehicle-rental",
    title: "Application web de location et gestion de véhicules",
    description:
      "Plateforme de réservation et de gestion de véhicules avec espaces client et administrateur et système de notifications.",
    category: "Web",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    featured: false,
  },
];
