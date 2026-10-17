"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const filters = ["Tous", "Intelligence artificielle", "Web", "Mobile"];

export function ProjectShowcase() {
  const [filter, setFilter] = useState("Tous");
  const selected = projectsData.filter(project => filter === "Tous" || (filter === "Intelligence artificielle" ? project.category.includes("AI") : project.category === filter));

  return (
    <>
      <div className="projects-toolbar">
        <p>De l’IA générative aux applications métier.</p>
        <div className="filters" role="group" aria-label="Filtrer les projets">
          {filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}
        </div>
      </div>
      <p className="sr-only" role="status">{selected.length} {selected.length === 1 ? "projet affiché" : "projets affichés"}</p>
      <div className="project-grid">
        {selected.map(project => {
          const images = project.gallery || (project.image ? [project.image] : []);
          const featured = project.id === "medical-assistant";
          return (
            <article className={`project-card ${featured ? "featured-project" : ""}`} key={project.id} aria-labelledby={`project-${project.id}`}>
              <div className={`project-visual ${project.category === "Mobile" ? "mobile-project" : ""}`}>
                {images.map((src, index) => (
                  <a className="project-image" href={src} target="_blank" rel="noreferrer" key={src} aria-label={`Agrandir l’aperçu ${index + 1} de ${project.title} (nouvel onglet)`}>
                    <Image src={src} alt={`${project.title} — aperçu ${index + 1}`} fill sizes={project.category === "Mobile" ? "(max-width: 900px) 35vw, 20vw" : "(max-width: 900px) 90vw, 55vw"} />
                  </a>
                ))}
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <p className="eyebrow">{String(projectsData.indexOf(project) + 1).padStart(2, "0")} / {featured ? "PROJET À LA UNE" : "PROJET PERSONNEL"}</p>
                <h3 id={`project-${project.id}`}>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`Technologies du projet ${project.title}`} role="list">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
                {project.image && <a className="project-preview" href={project.image} target="_blank" rel="noreferrer">Voir l’aperçu en grand <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> de {project.title} (nouvel onglet)</span></a>}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
