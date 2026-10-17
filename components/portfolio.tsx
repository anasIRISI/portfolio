import { ArrowUpRight, Download, BrainCircuit, Database, Workflow } from "lucide-react";
import { SiReact, SiNextdotjs, SiPython, SiSpringboot, SiDocker, SiGit, SiPostgresql, SiLaravel, SiTensorflow, SiTypescript, SiFastapi, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PortfolioHeader } from "@/components/layout/portfolio-header";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { AcademicJourney, CommunityHighlights } from "@/components/sections/academic-highlights";
import { CertificationShowcase } from "@/components/sections/certification-showcase";
import { SkillDomains } from "@/components/sections/skill-domains";
import { AboutProfile } from "@/components/sections/about-profile";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { HomeHero } from "@/components/sections/home-hero";

const toolkit = [
  { name: "React", icon: SiReact }, { name: "Spring Boot", icon: SiSpringboot },
  { name: "Python", icon: SiPython }, { name: "LLM & RAG", icon: BrainCircuit },
  { name: "Next.js", icon: SiNextdotjs }, { name: "Java", icon: FaJava },
  { name: "FastAPI", icon: SiFastapi }, { name: "Laravel", icon: SiLaravel },
  { name: "PostgreSQL", icon: SiPostgresql }, { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: SiDocker }, { name: "Git", icon: SiGit },
  { name: "TensorFlow", icon: SiTensorflow }, { name: "TypeScript", icon: SiTypescript },
  { name: "AI Agents", icon: Workflow }, { name: "SQL", icon: Database },
];

function Heading({ id, label, title, accent }: { id: string; label: string; title: string; accent: string }) {
  return <header className="section-title"><p className="eyebrow">{label}</p><h2 id={id}>{title}{" "}<em>{accent}</em></h2></header>;
}

export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <PortfolioHeader />
      <main id="main" tabIndex={-1}>
        <HomeHero />
        <AboutProfile />
        <section className="wrap section-space" id="projects" aria-labelledby="projects-title">
          <Heading id="projects-title" label="02 — UNE SÉLECTION DE MES TRAVAUX" title="Des idées devenues" accent="projets." />
          <ProjectShowcase />
        </section>
        <section className="wrap section-space" id="skills" aria-labelledby="skills-title">
          <Heading id="skills-title" label="03 — MES COMPÉTENCES" title="Boîte à outils" accent="technique." />
          <p className="section-lead">Une boîte à outils construite par la pratique,<br />l’expérimentation et des projets réels.</p>
          <div className="toolkit">{toolkit.map(({ name, icon: Icon }) => <div className="tool-cell" key={name}><span>{name}</span><Icon aria-hidden="true" /></div>)}</div>
          <SkillDomains />
        </section>
        <section className="wrap section-space" id="experience" aria-labelledby="experience-title">
          <Heading id="experience-title" label="04 — MON PARCOURS" title="Apprendre. Construire." accent="Évoluer." />
          <ExperienceTimeline />
          <AcademicJourney />
        </section>
        <section className="wrap section-space" id="certifications" aria-labelledby="certifications-title">
          <Heading id="certifications-title" label="05 — APPRENDRE EN CONTINU" title="Certifications &" accent="distinctions." />
          <CertificationShowcase />
          <CommunityHighlights />
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <p className="eyebrow">ET SI ON CONSTRUISAIT LA SUITE ENSEMBLE ?</p>
            <h2 id="contact-title">Une idée.<br />Une opportunité.<br /><em>Parlons-en.</em><ArrowUpRight className="contact-arrow" aria-hidden="true" /></h2>
            <div className="contact-bottom">
              <div><p>Stage PFE · 6 mois · À partir de janvier 2027</p><a className="email-link" href="mailto:anashllmtct8@gmail.com"><span>anashllmtct8@gmail.com</span><ArrowUpRight size={24} aria-hidden="true" /></a></div>
              <a className="action primary" href="/cv/cv-anas-halloumi.pdf" download>Télécharger mon CV <Download size={18} aria-hidden="true" /></a>
            </div>
            <address className="social-links">
              <a href="https://github.com/anasIRISI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>
              <a href="https://www.linkedin.com/in/anas-halloumi" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span></a>
              <a href="tel:+212708041275">+212 708 04 12 75 <ArrowUpRight size={16} aria-hidden="true" /></a>
            </address>
          </div>
        </section>
      </main>
      <footer className="wrap site-footer"><a href="#home">anas_halloumi<span className="orange">.</span></a><span>© 2026 Anas Halloumi</span><a href="#home">Retour en haut ↑</a></footer>
    </>
  );
}

