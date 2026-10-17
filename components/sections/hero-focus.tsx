"use client";

import { useState } from "react";
import { ArrowUpRight, BrainCircuit, Code2, GitBranch } from "lucide-react";

const focuses = [
  { id: "ai", label: "IA générative", icon: BrainCircuit, title: "Des données aux réponses.", description: "Des agents IA qui interrogent les données et exploitent les documents.", stack: ["Python", "LLM", "RAG"], href: "#projects", link: "Découvrir mes projets IA" },
  { id: "web", label: "Web", icon: Code2, title: "De l’interface à l’API.", description: "Des applications métier qui relient une interface claire à une logique solide.", stack: ["React", "Spring Boot", "FastAPI"], href: "#projects", link: "Explorer mes applications" },
  { id: "devops", label: "DevOps", icon: GitBranch, title: "Du code au déploiement.", description: "Versionner, conteneuriser et automatiser pour accompagner le développement.", stack: ["Git", "Docker", "CI/CD"], href: "#skills", link: "Voir mes compétences" },
];

export function HeroFocus() {
  const [selected, setSelected] = useState(0);
  const [animate, setAnimate] = useState(false);
  const focus = focuses[selected];
  const Icon = focus.icon;

  return (
    <div className="hero-focus">
      <div className="focus-controls" role="group" aria-label="Explorer mes domaines">
        {focuses.map((item, index) => (
          <button type="button" key={item.id} aria-pressed={selected === index} aria-controls="hero-focus-panel" onClick={event => { setAnimate(event.detail > 0); setSelected(index); }}>{item.label}</button>
        ))}
      </div>
      <div id="hero-focus-panel" className="focus-panel" aria-live="polite" aria-atomic="true">
        <div className="focus-content" key={focus.id} data-motion={animate}>
          <div className="focus-heading"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><h2>{focus.title}</h2></div>
          <p>{focus.description}</p>
          <ul className="focus-stack" aria-label="Technologies" role="list">{focus.stack.map(technology => <li key={technology}>{technology}</li>)}</ul>
          <a href={focus.href}>{focus.link}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  );
}
