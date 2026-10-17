import { ArrowUpRight, CalendarDays, Languages, Compass } from "lucide-react";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";

const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "DELF B2" },
  { name: "Anglais", level: "Niveau B1" },
];

export function AboutProfile() {
  return (
    <section className="profile-section wrap section-space" id="about" aria-labelledby="profile-title">
      <div className="profile-introduction">
        <header>
          <p className="eyebrow">01 — À PROPOS</p>
          <h2 id="profile-title">Curieux par nature.<br /><em>Ingénieur en devenir.</em></h2>
          <p className="profile-signature">Anas Halloumi <span aria-hidden="true">/</span> Génie Informatique</p>
        </header>
        <div className="profile-story">
          <p>En dernière année du cycle d’ingénieur en Génie Informatique à l’<strong>Université Cadi Ayyad</strong>, je transforme des idées en applications utiles.</p>
          <p>Des documents juridiques aux données industrielles, j’aime relier les possibilités de l’intelligence artificielle à des besoins concrets. Mon approche associe développement logiciel, expérimentation et attention portée aux usages.</p>
          <ul className="profile-interests" aria-label="Domaines d’intérêt">
            {["IA générative", "Applications web", "DevOps"].map(domain => <li key={domain}>{domain}</li>)}
          </ul>
        </div>
      </div>

      <aside className="profile-opportunity" aria-labelledby="profile-pfe-title">
        <span className="profile-calendar"><CalendarDays size={25} strokeWidth={1.5} aria-hidden="true" /></span>
        <div className="profile-opportunity-copy">
          <p className="eyebrow">À LA RECHERCHE D’UN STAGE PFE</p>
          <h3 id="profile-pfe-title">Construire la suite, au sein de votre équipe.</h3>
          <p><strong>6 mois · À partir de janvier 2027</strong><span>IA & développement logiciel</span></p>
        </div>
        <a className="profile-contact" href="#contact">Échangeons <ArrowUpRight size={18} aria-hidden="true" /></a>
      </aside>

      <dl className="profile-numbers">
        <div><dt>Expériences en entreprise</dt><dd>{String(experienceData.length).padStart(2, "0")}</dd></div>
        <div><dt>Projets à découvrir</dt><dd>{String(projectsData.length).padStart(2, "0")}</dd></div>
        <div><dt>Diplôme d’ingénieur prévu</dt><dd>2027</dd></div>
      </dl>

      <div className="profile-personal">
        <section className="profile-panel" aria-labelledby="profile-languages-title">
          <header><Languages size={21} strokeWidth={1.5} aria-hidden="true" /><h3 id="profile-languages-title">Pour échanger</h3><span>Langues</span></header>
          <ul className="profile-languages">
            {languages.map(language => <li key={language.name}><span>{language.name}</span><span>{language.level}</span></li>)}
          </ul>
        </section>
        <section className="profile-panel profile-beyond" aria-labelledby="profile-beyond-title">
          <header><Compass size={21} strokeWidth={1.5} aria-hidden="true" /><h3 id="profile-beyond-title">En dehors du code</h3></header>
          <p>La curiosité ne s’arrête pas à l’écran.</p>
          <ul aria-label="Centres d’intérêt"><li>Échecs</li><li>Natation</li><li>Kick-boxing</li></ul>
        </section>
      </div>
    </section>
  );
}
