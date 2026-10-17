import { BriefcaseBusiness, MapPin, ArrowRight } from "lucide-react";
import { experienceData } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="career">
      <div className="career-intro">
        <p>Trois expériences sur le terrain, de la digitalisation des services<br className="career-desktop-break" /> aux applications d’intelligence artificielle.</p>
        <span className="career-total"><BriefcaseBusiness size={17} aria-hidden="true" />{experienceData.length} stages en entreprise</span>
      </div>
      <ol className="career-timeline" aria-label="Expériences professionnelles, de la plus récente à la plus ancienne">
        {experienceData.map((experience, index) => (
          <li className="career-step" key={experience.id}>
            <aside className="career-date">
              <span className="eyebrow">{String(index + 1).padStart(2, "0")} / STAGE</span>
              <p>{experience.period}</p>
              <span className="career-location"><MapPin size={14} aria-hidden="true" />{experience.location}</span>
            </aside>
            <span className="career-track" aria-hidden="true"><span /></span>
            <article className="career-card" aria-labelledby={`career-${experience.id}`}>
              <header className="career-card-header">
                <div>
                  <h3 id={`career-${experience.id}`}>{experience.company}</h3>
                  <p className="career-role">{experience.position}</p>
                </div>
                <span className="career-type">{experience.id === "aptiv" ? "DÉVELOPPEMENT WEB" : "IA & WEB"}</span>
              </header>
              <div className="career-missions">
                <h4>{experience.focus}</h4>
                <ul>
                  {experience.missions.map(mission => (
                    <li key={mission}><ArrowRight size={14} aria-hidden="true" /><span>{mission}</span></li>
                  ))}
                </ul>
              </div>
              <footer className="career-stack">
                <p className="eyebrow">ENVIRONNEMENT TECHNIQUE</p>
                <ul aria-label={`Technologies utilisées chez ${experience.company}`}>
                  {experience.technologies.map(technology => <li key={technology}>{technology}</li>)}
                </ul>
              </footer>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
