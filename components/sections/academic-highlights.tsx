import { GraduationCap, Trophy, Users, ArrowUpRight, Landmark, Check, BookOpen } from "lucide-react";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";

export function AcademicJourney() {
  return (
    <section className="academic-journey" id="education" aria-labelledby="education-title">
      <header className="subsection-heading">
        <div>
          <p className="eyebrow">FORMATION</p>
          <h3 id="education-title">Des fondations solides.<br /><em>Une ambition qui grandit.</em></h3>
        </div>
        <p className="subsection-description">Des mathématiques à l’informatique,<br />un parcours tourné vers l’ingénierie.</p>
      </header>
      <ol className="diploma-grid" aria-label="Formation, de la plus récente à la plus ancienne">
        {educationData.map(education => {
          const inProgress = education.status === "in-progress";
          return (
            <li className={inProgress ? "diploma-item diploma-featured" : "diploma-item"} key={education.id}>
              <article className="diploma-card" aria-labelledby={`diploma-${education.id}`}>
                <div className="diploma-meta">
                  <span className="diploma-icon" aria-hidden="true">
                    {inProgress ? <GraduationCap size={30} strokeWidth={1.4} /> : <BookOpen size={24} strokeWidth={1.4} />}
                  </span>
                  <p className="diploma-period">{education.period}</p>
                  <span className="diploma-status">
                    {inProgress ? <span className="diploma-status-dot" aria-hidden="true" /> : <Check size={13} aria-hidden="true" />}
                    {inProgress ? "En cours · dernière année" : "Diplôme obtenu"}
                  </span>
                </div>
                <div className="diploma-body">
                  <p className="eyebrow">{education.level}</p>
                  <h4 id={`diploma-${education.id}`}>{education.degree}</h4>
                  <p className="diploma-school"><Landmark size={17} strokeWidth={1.4} aria-hidden="true" /><span>{education.institution}</span></p>
                  {inProgress && (
                    <a className="diploma-cv" href="/cv/cv-anas-halloumi.pdf" target="_blank" rel="noreferrer">
                      Découvrir mon parcours complet <span className="diploma-file-type">CV · PDF</span><ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function CommunityHighlights() {
  const award = achievementsData.find(achievement => achievement.id === "gemini-hack")!;
  const participations = achievementsData.filter(achievement => achievement.id !== award.id);

  return (
    <section className="community-highlights" id="distinctions" aria-labelledby="community-title">
      <header className="subsection-heading">
        <div>
          <p className="eyebrow">DISTINCTIONS & PARTICIPATIONS</p>
          <h3 id="community-title">Au-delà du code.<br /><em>L’esprit collectif.</em></h3>
        </div>
        <p className="subsection-description">Des rencontres, des défis et des occasions de partager autour de la technologie.</p>
      </header>
      <div className="community-grid">
        <article className="prize-card">
          <div className="prize-topline"><span className="eyebrow">DISTINCTION</span><Trophy size={26} strokeWidth={1.3} aria-hidden="true" /></div>
          <div className="prize-number" aria-label={award.title}>2<sup>e</sup><span>prix</span></div>
          <div className="prize-caption"><h4>{award.event}</h4><p>Hackathon · Intelligence artificielle</p></div>
        </article>
        <div className="participation-list">
          {participations.map((participation, index) => (
            <article className="participation-row" key={participation.id}>
              <span className="participation-index" aria-hidden="true">0{index + 1}</span>
              <div><span className="eyebrow">{participation.title}</span><h4>{participation.event}</h4></div>
              <Users size={22} strokeWidth={1.3} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
