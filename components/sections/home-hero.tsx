import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { HeroFocus } from "@/components/sections/hero-focus";

export function HomeHero() {
  return (
    <section className="home-hero wrap" id="home" aria-labelledby="hero-title">
      <div className="home-topline">
        <span className="eyebrow">LE CODE COMME OUTIL. L’IA COMME POSSIBILITÉ.</span>
        <a className="home-availability" href="#contact"><span aria-hidden="true" /> Stage PFE · Janvier 2027 <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <div className="home-composition">
        <div className="home-copy">
          <p className="home-name"><span className="home-name-line" aria-hidden="true" /> Bonjour, moi c’est Anas Halloumi.</p>
          <h1 id="hero-title">Du code.<br />De l’intelligence.<br /><em>De l’impact.</em></h1>
          <p className="home-description">Étudiant ingénieur en génie informatique, je transforme des idées en applications utiles, entre <strong>développement logiciel</strong> et <strong>intelligence artificielle.</strong></p>
          <div className="actions">
            <a className="action primary" href="#projects">Explorer mes projets <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a className="text-link" href="/cv/cv-anas-halloumi.pdf" download>Mon CV <Download size={17} aria-hidden="true" /></a>
          </div>
          <p className="home-note">À la recherche d’un stage PFE de 6 mois en IA & développement logiciel.</p>
        </div>
        <div className="home-visual">
          <div className="home-profile">
            <div className="home-portrait">
              <Image src="/Photos/photo-portfollio.png" alt="Portrait d’Anas Halloumi" fill priority sizes="(max-width: 600px) 104px, (max-width: 900px) 210px, 260px" />
            </div>
            <div className="home-profile-caption"><span>Anas Halloumi</span><p>Étudiant ingénieur<br />IA & développement logiciel</p></div>
            <span className="home-corner" aria-hidden="true">&lt;/&gt;</span>
          </div>
          <HeroFocus />
        </div>
      </div>
      <div className="home-bottom"><span>CONCEVOIR <span aria-hidden="true">/</span> DÉVELOPPER <span aria-hidden="true">/</span> EXPÉRIMENTER</span><a href="#about">Un peu plus sur moi <ArrowDown size={16} aria-hidden="true" /></a></div>
    </section>
  );
}
