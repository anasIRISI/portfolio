"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Terminal, Menu, X, BrainCircuit, Code2, Database, Workflow } from "lucide-react";
import { SiReact, SiNextdotjs, SiPython, SiSpringboot, SiDocker, SiGit, SiPostgresql, SiLaravel, SiTensorflow, SiTypescript, SiFastapi, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { AcademicJourney, CommunityHighlights } from "@/components/sections/academic-highlights";
import { CertificationShowcase } from "@/components/sections/certification-showcase";

import { SkillDomains } from "@/components/sections/skill-domains";

const navigation = [["À propos", "about"], ["Projets", "projects"], ["Compétences", "skills"], ["Parcours", "experience"], ["Contact", "contact"]];
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
function Heading({ label, title, accent }: { label: string; title: string; accent: string }) {
  return <header className="section-title"><p className="eyebrow">{label}</p><h2>{title} <em>{accent}</em></h2></header>;
}
export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const selectedProjects = projectsData.filter(project => filter === "Tous" || (filter === "Intelligence artificielle" ? project.category.includes("AI") : project.category === filter));
  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className="site-header">
      <a href="#home" className="wordmark" aria-label="Anas Halloumi, accueil"><Terminal size={20} /> anas_halloumi<span className="orange">.</span></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{navigation.map(([name, id]) => <a key={id} href={`#${id}`}>{name}</a>)}</nav>
      <a href="/cv/cv-anas-halloumi.pdf" target="_blank" rel="noreferrer" className="header-cv">Mon CV <ArrowUpRight size={16} /></a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Navigation mobile" onKeyDown={event => { if (event.key === "Escape") setMenuOpen(false); }}>{navigation.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}<ArrowUpRight /></a>)}</nav>}
    </header>
    <main id="main">
      <section className="hero-section wrap" id="home">
        <div className="hero-topline"><span className="eyebrow">IA & DÉVELOPPEMENT LOGICIEL</span><span className="availability"><i /> Stage PFE · Janvier 2027</span></div>
        <div className="hero-layout">
          <div className="hero-copy"><p className="intro-name">Bonjour, moi c’est Anas Halloumi.</p><h1>Du code.<br />De l’intelligence.<br /><em>De l’impact.</em></h1><p className="hero-description">Étudiant ingénieur en génie informatique, je conçois des applications qui relient intelligence artificielle et besoins concrets.</p><div className="actions"><a className="action primary" href="#projects">Explorer mes projets <ArrowUpRight size={19} /></a><a className="text-link" href="/cv/cv-anas-halloumi.pdf" download>Télécharger mon CV <Download size={17} /></a></div></div>
          <div className="portrait-frame"><Image src="/Photos/photo-portfollio.png" alt="Portrait d’Anas Halloumi" fill priority sizes="(max-width: 760px) 90vw, 40vw" /><div className="portrait-caption"><span>ANAS HALLOUMI</span><span>Futur ingénieur · Maroc</span></div><span className="portrait-index">01 / LE PROFIL</span></div>
        </div>
        <div className="hero-bottom"><span>REACT / SPRING BOOT / PYTHON / GEN AI</span><a href="#about">Découvrir mon univers <ArrowDown size={16} /></a></div>
      </section>
      <section className="about-section wrap section-space" id="about"><div><p className="eyebrow">01 — À PROPOS</p><h2>Curieux par nature.<br /><em>Ingénieur en devenir.</em></h2></div><div className="about-copy"><p>En dernière année du cycle d’ingénieur en Génie Informatique à l’Université Cadi Ayyad, je m’intéresse à ce qui se passe entre une idée et une application utile.</p><p>Mon terrain de jeu : l’IA générative, les applications web et le DevOps. Des documents juridiques aux données industrielles, j’aime transformer des problèmes concrets en solutions logicielles.</p><p>Je recherche un <strong>stage PFE de 6 mois à partir de janvier 2027</strong>, en IA et développement logiciel.</p><div className="profile-facts"><span><b>03</b> expériences en entreprise</span><span><b>05</b> projets à découvrir</span><span><b>2027</b> diplôme d’ingénieur</span></div><div className="personal-note">Arabe · langue maternelle / Français · DELF B2 / Anglais · B1<br />En dehors du code : échecs, natation et kick-boxing.</div></div></section>
      <section className="wrap section-space" id="projects"><Heading label="02 — UNE SÉLECTION DE MES TRAVAUX" title="Des idées devenues" accent="projets." /><div className="projects-toolbar"><p>De l’IA générative aux applications métier.</p><div className="filters" aria-label="Filtrer les projets">{["Tous", "Intelligence artificielle", "Web", "Mobile"].map(name => <button key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}</div></div><p className="sr-only" role="status">{selectedProjects.length} projets affichés</p><div className="project-grid">{selectedProjects.map(project => <article className={`project-card ${project.id === "medical-assistant" ? "featured-project" : ""}`} key={project.id}><div className={`project-visual ${project.category === "Mobile" ? "mobile-project" : ""}`}>{(project.gallery || [project.image!]).map((src, index) => <div className="project-image" key={src}><Image src={src} alt={`${project.title} — aperçu ${index + 1}`} fill sizes="(max-width: 760px) 90vw, 60vw" /></div>)}<span className="project-category">{project.category}</span></div><div className="project-info"><div className="project-title-line"><span className="eyebrow">{String(projectsData.indexOf(project) + 1).padStart(2, "0")} / {project.id === "medical-assistant" ? "PROJET À LA UNE" : "PROJET PERSONNEL"}</span><Code2 size={19} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><a className="project-preview" href={project.image} target="_blank" rel="noreferrer">Voir l’aperçu en grand <ArrowUpRight size={16} /></a></div></article>)}</div></section>
      <section className="wrap section-space" id="skills"><Heading label="03 — MES COMPÉTENCES" title="Boîte à outils" accent="technique." /><p className="section-lead">Une boîte à outils construite par la pratique,<br />l’expérimentation et des projets réels.</p><div className="toolkit">{toolkit.map(({ name, icon: Icon }) => <div className="tool-cell" key={name}><span>{name}</span><Icon aria-hidden="true" /></div>)}</div><SkillDomains /></section>
      <section className="wrap section-space" id="experience"><Heading label="04 — MON PARCOURS" title="Apprendre. Construire." accent="Évoluer." /><ExperienceTimeline /><AcademicJourney /></section>
      <section className="wrap section-space" id="certifications"><Heading label="05 — APPRENDRE EN CONTINU" title="Certifications &" accent="distinctions." /><CertificationShowcase /><CommunityHighlights /></section>
      <section className="contact-section" id="contact"><div className="wrap"><p className="eyebrow">ET SI ON CONSTRUISAIT LA SUITE ENSEMBLE ?</p><h2>Une idée.<br />Une opportunité.<br /><em>Parlons-en.</em><ArrowUpRight className="contact-arrow" /></h2><div className="contact-bottom"><div><p>Stage PFE · 6 mois · À partir de janvier 2027</p><a className="email-link" href="mailto:anashllmtct8@gmail.com">anashllmtct8@gmail.com <ArrowUpRight size={24} /></a></div><a className="action primary" href="/cv/cv-anas-halloumi.pdf" download>Télécharger mon CV <Download size={18} /></a></div><div className="social-links"><a href="https://github.com/anasIRISI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/anas-halloumi" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="tel:+212708041275">+212 708 04 12 75 <ArrowUpRight size={16} /></a></div></div></section>
    </main><footer className="wrap site-footer"><a href="#home">anas_halloumi<span className="orange">.</span></a><span>© 2026 Anas Halloumi</span><a href="#home">Retour en haut ↑</a></footer>
  </>;
}






