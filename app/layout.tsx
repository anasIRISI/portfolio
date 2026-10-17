import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./academic.css";
import "./experience.css";
import "./education.css";
import "./certification-domains.css";
import "./about.css";
import "./home-hero.css";
import "./themes.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
  colorScheme: "dark",
};

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
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script id="portfolio-theme-init" dangerouslySetInnerHTML={{ __html: `(() => { let theme = 'dark'; try { if (localStorage.getItem('anas-portfolio-theme') === 'light') theme = 'light'; } catch {} document.documentElement.dataset.theme = theme; document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#ffffff' : '#080808'); document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme); })();` }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}



