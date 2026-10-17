"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";

const navigation = [
  ["À propos", "about"],
  ["Projets", "projects"],
  ["Compétences", "skills"],
  ["Parcours", "experience"],
  ["Formation", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <a href="#home" className="wordmark" aria-label="Anas Halloumi, accueil" onClick={() => setMenuOpen(false)}>
        <Terminal size={20} aria-hidden="true" /><span>anas_halloumi<span className="orange">.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navigation.map(([name, id]) => <a key={id} href={`#${id}`}>{name}</a>)}
      </nav>
      <ThemeSwitcher />
      <a href="/cv/cv-anas-halloumi.pdf" target="_blank" rel="noreferrer" className="header-cv">
        Mon CV <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (PDF, nouvel onglet)</span>
      </a>
      <button type="button" ref={triggerRef} className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Navigation mobile" hidden={!menuOpen}>
        {navigation.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
      </nav>
    </header>
  );
}
