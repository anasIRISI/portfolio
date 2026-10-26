export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  categories?: Array<"AI" | "Web" | "Mobile">;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  gallery?: string[];
}

export const projectsData: Project[] = [
  {
    id: "medical-assistant",
    title: "Assistant Médical IA",
    description: "Application web d’assistance médicale associant une interface React à un backend Spring Boot. L’intégration d’un LLM via l’API Gemini apporte une assistance conversationnelle dans un espace pensé pour accompagner les consultations. Le projet explore l’usage de l’IA générative dans un parcours métier médical.",
    category: "AI / GenAI",
    technologies: ["React.js", "Spring Boot", "LLM", "Gemini API"],
    image: "/Assistant Médical IA.png",
    featured: true,
  },
  {
    id: "sgai",
    title: "SGAI – Système de Gestion des Absences Intelligent",
    description:
      "Une solution de gestion des absences scolaires qui associe une application web d’administration à une application Android de consultation et de pointage. Le web centralise les établissements, classes, étudiants et enseignants, avec suivi des absences, historiques et statistiques d’assiduité. Sur mobile, l’enseignant scanne la classe : la reconnaissance faciale compare les visages aux profils enregistrés pour identifier les étudiants, enregistrer leurs présences et déterminer les absences.",
    category: "AI / Web / Mobile",
    categories: ["AI", "Web", "Mobile"],
    technologies: [
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "Android (Java)",
      "Python",
      "FastAPI",
      "DeepFace",
      "OpenCV",
      "Intelligence Artificielle",
    ],
    image: "/sgai-gestion-absences.png",
    featured: false,
  },
  {
    id: "legal-assistant",
    title: "Plateforme d'assistance juridique intelligente",
    description:
      "Mizan Legal AI facilite l’exploration de documents juridiques. L’application combine recherche documentaire et génération de réponses contextualisées grâce au RAG : les informations des documents alimentent les réponses du modèle. React, Spring Boot et PostgreSQL structurent l’application, avec l’API Gemini pour la génération.",
    image: "/Mizan Legal AI _ la loi simplement.png",
    category: "AI / GenAI",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "Gemini API", "RAG"],
    featured: true,
  },
  {
    id: "heritage-platform",
    title: "Plateforme de valorisation du patrimoine marocain",
    description:
      "Une application pour découvrir le patrimoine marocain à travers ses monuments historiques. La cartographie OpenStreetMap permet de localiser les lieux, tandis qu’un chatbot basé sur un LLM accompagne leur exploration. Une interface React communique avec une API Django REST pour réunir découverte culturelle et assistance intelligente.",
    image: "/Plateforme de valorisation du patrimoine marocain.png",
    category: "AI / Web",
    technologies: ["React.js", "Django REST API", "OpenStreetMap API", "LLM"],
    featured: true,
  },
  {
    id: "marketplace",
    title: "Marketplace de matériel informatique",
    description:
      "Une marketplace Android dédiée à l’achat et à la vente de matériel informatique. Le parcours réunit authentification, consultation et gestion des annonces, avec Firestore pour les données, Firebase Authentication pour les comptes et FCM pour les notifications. Cloudinary prend en charge les visuels des produits.",
    image: "/Marketplace de matériel informatique.png",
    gallery: ["/Marketplace de matériel informatique.png", "/Marketplace de matériel informatique (1).png"],
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
      "Une plateforme de location automobile qui relie réservation côté client et gestion des véhicules côté administrateur. Développée avec Laravel et MySQL, elle organise les espaces métier et intègre des notifications pour accompagner le suivi des réservations. L’interface utilise JavaScript et Tailwind CSS.",
    image: "/Application de location auto française.png",
    category: "Web",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    featured: false,
  },
];
