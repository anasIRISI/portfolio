import { Braces, PanelsTopLeft, Server, BrainCircuit, Database, GitBranch } from "lucide-react";
import { skillsData } from "@/data/skills";

const domains = [
  { icon: Braces, description: "Les fondations de mes applications." },
  { icon: PanelsTopLeft, description: "Des interfaces claires et réactives." },
  { icon: Server, description: "La logique métier et les API." },
  { icon: BrainCircuit, description: "Des modèles aux applications intelligentes." },
  { icon: Database, description: "Structurer, interroger et exploiter les données." },
  { icon: GitBranch, description: "Versionner, automatiser et déployer." },
];

export function SkillDomains() {
  return (
    <div className="skill-domains">
      {skillsData.map((group, index) => {
        const { icon: Icon, description } = domains[index];
        return (
          <article className={`domain-card ${group.category === "AI / GenAI" ? "domain-ai" : ""}`} key={group.category}>
            <header className="domain-header">
              <span className="domain-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="domain-index" aria-hidden="true">0{index + 1}</span>
            </header>
            <h3>{group.category}</h3>
            <p className="domain-description">{description}</p>
            <ul className="domain-technologies" aria-label={`Compétences ${group.category}`}>
              {group.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <footer className="domain-footer"><span>{String(group.skills.length).padStart(2, "0")}</span> compétences</footer>
          </article>
        );
      })}
    </div>
  );
}
