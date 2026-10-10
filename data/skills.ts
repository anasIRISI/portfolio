export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Langages",
    skills: [
      "Python",
      "Java",
      "PHP",
      "C",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "FastAPI",
      "Laravel",
      "REST API",
    ],
  },
  {
    category: "AI / GenAI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "LLM",
      "RAG",
      "AI Agents",
      "LangChain",
      "Prompt Engineering",
      "Gemini API",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "SQL", "Redis"],
  },
  {
    category: "DevOps",
    skills: ["Git", "GitLab", "Docker", "CI/CD"],
  },
];
