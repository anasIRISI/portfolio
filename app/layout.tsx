import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./academic.css";
import "./experience.css";
import "./education.css";
import "./certification-domains.css";
import "./about.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Halloumi | AI Engineer & Software Developer",
  description:
    "Portfolio d'Anas Halloumi, ingénieur IA et développeur logiciel spécialisé en IA générative, LLM, RAG, AI Agents et développement web.",
  keywords: [
    "Anas Halloumi",
    "AI Engineer",
    "Software Developer",
    "Intelligence Artificielle",
    "Generative AI",
    "LLM",
    "RAG",
    "AI Agents",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Anas Halloumi" }],
  creator: "Anas Halloumi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://anashalloumi.dev",
    title: "Anas Halloumi | AI Engineer & Software Developer",
    description:
      "Portfolio d'Anas Halloumi, ingénieur IA et développeur logiciel spécialisé en IA générative, LLM, RAG, AI Agents et développement web.",
    siteName: "Anas Halloumi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Halloumi | AI Engineer & Software Developer",
    description:
      "Portfolio d'Anas Halloumi, ingénieur IA et développeur logiciel spécialisé en IA générative, LLM, RAG, AI Agents et développement web.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}



