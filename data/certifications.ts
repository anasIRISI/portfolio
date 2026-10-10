export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "oracle-genai",
    title: "Oracle Certified Generative AI Professional",
    issuer: "Oracle",
  },
  {
    id: "oracle-ai-foundations",
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    id: "rag-ibm",
    title: "RAG for Generative AI Applications",
    issuer: "IBM",
  },
  {
    id: "ml-svm",
    title: "Machine Learning with Support Vector Machines",
    issuer: "365 Data",
  },
  {
    id: "sql-cert",
    title: "SQL Certificate",
    issuer: "365 Data",
  },
  {
    id: "javascript-udemy",
    title: "JavaScript - The Complete Guide",
    issuer: "Udemy",
  },
  {
    id: "react-meta",
    title: "React.js",
    issuer: "Meta",
  },
  {
    id: "laravel-cert",
    title: "Laravel",
    issuer: "Brightcoding",
  },
  {
    id: "php-cert",
    title: "PHP",
    issuer: "Brightcoding",
  },
];
