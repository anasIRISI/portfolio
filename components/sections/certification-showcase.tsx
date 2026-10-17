import { BrainCircuit, Braces, Database, Layers, Network } from "lucide-react";
import { SiJavascript, SiReact, SiLaravel, SiPhp } from "react-icons/si";
import { certificationsData } from "@/data/certifications";

const featuredIds = ["oracle-genai", "oracle-ai-foundations", "rag-ibm"];
const specializations = ["IA générative", "Fondamentaux de l’IA", "Recherche augmentée · RAG"];
const groups = [
  { id: "data", title: "Data & Machine Learning", description: "Modélisation et exploration des données.", icon: Database, ids: ["ml-svm", "sql-cert"] },
  { id: "web", title: "Développement web", description: "Des interfaces aux applications côté serveur.", icon: Braces, ids: ["javascript-udemy", "react-meta", "laravel-cert", "php-cert"] },
];
const certificateIcons = {
  "ml-svm": Network,
  "sql-cert": Database,
  "javascript-udemy": SiJavascript,
  "react-meta": SiReact,
  "laravel-cert": SiLaravel,
  "php-cert": SiPhp,
};

export function CertificationShowcase() {
  return (
    <div className="certification-showcase">
      <div className="certification-intro">
        <p>Approfondir mes connaissances, puis les mettre en pratique.<br />Un parcours entre intelligence artificielle, data et développement.</p>
        <span className="certification-count"><strong>{certificationsData.length.toString().padStart(2, "0")}</strong> certifications</span>
      </div>
      <div className="featured-certifications">
        {featuredIds.map((id, index) => {
          const certification = certificationsData.find(item => item.id === id)!;
          const Icon = index === 2 ? Layers : BrainCircuit;
          return (
            <article className="featured-credential" key={id}>
              <div className="credential-topline">
                <span className={`issuer-wordmark issuer-${certification.issuer.toLowerCase()}`}>{certification.issuer}</span>
                <Icon size={25} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <div className="credential-body">
                <p className="eyebrow">{specializations[index]}</p>
                <h3>{certification.title}</h3>
              </div>
              <div className="credential-footer"><span>CERTIFICATION</span><span aria-hidden="true">0{index + 1}</span></div>
            </article>
          );
        })}
      </div>
      <div className="certificate-collections" id="certification-domains">
        {groups.map(({ id, title, description, icon: Icon, ids }) => (
          <section className="certificate-collection" key={id} aria-labelledby={`certificates-${id}`}>
            <header className="certificate-collection-heading">
              <span className="certificate-collection-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span>
              <h3 id={`certificates-${id}`}>{title}</h3>
              <p>{description}</p>
              <span className="certificate-collection-count">{ids.length} certifications</span>
            </header>
            <ul className="certificate-tiles" role="list">
              {ids.map(certificateId => {
                const certification = certificationsData.find(item => item.id === certificateId)!;
                const CertificateIcon = certificateIcons[certificateId as keyof typeof certificateIcons];
                return (
                  <li className="certificate-tile" key={certificateId}>
                    <article aria-labelledby={`certificate-${certificateId}`}>
                      <span className={`certificate-symbol certificate-symbol-${certificateId}`}><CertificateIcon size={25} aria-hidden="true" /></span>
                      <div className="certificate-tile-copy">
                        <p className="certificate-tile-issuer"><span className="sr-only">Organisme : </span>{certification.issuer}</p>
                        <h4 id={`certificate-${certificateId}`}>{certification.title}</h4>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
