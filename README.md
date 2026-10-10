# Portfolio - Anas Halloumi

Portfolio professionnel moderne développé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Technologies utilisées

- **Framework**: Next.js 16.4.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Structure du projet

```
mon-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal avec metadata SEO
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux et design system
│   ├── sitemap.ts           # Génération du sitemap
│   └── robots.ts            # Configuration robots.txt
├── components/
│   ├── layout/              # Composants de layout
│   │   ├── navbar.tsx       # Navigation avec dark mode
│   │   └── footer.tsx       # Footer
│   ├── sections/            # Sections du portfolio
│   │   ├── hero.tsx         # Section hero
│   │   ├── about.tsx        # À propos
│   │   ├── skills.tsx       # Compétences techniques
│   │   ├── ai-focus.tsx     # Focus sur l'IA
│   │   ├── experience.tsx   # Expériences professionnelles
│   │   ├── projects.tsx     # Projets
│   │   ├── certifications.tsx
│   │   ├── achievements.tsx # Participations hackathons
│   │   ├── education.tsx    # Formation
│   │   └── contact.tsx      # Contact
│   └── ui/                  # Composants UI réutilisables
│       ├── badge.tsx
│       ├── button.tsx
│       ├── section-container.tsx
│       └── section-heading.tsx
├── data/                    # Données du portfolio
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── certifications.ts
│   ├── achievements.ts
│   └── education.ts
├── lib/
│   └── utils.ts             # Utilitaires (cn)
└── public/
    └── cv/                  # Dossier pour le CV (PDF)
```

## 🎨 Fonctionnalités

- ✨ Design moderne et minimaliste
- 🌓 Dark mode / Light mode
- 📱 100% Responsive (mobile, tablet, desktop)
- ⚡ Animations fluides avec Framer Motion
- ♿ Respect de `prefers-reduced-motion`
- 🔍 SEO optimisé avec metadata complètes
- 🚀 Performance optimisée
- 📊 Architecture propre et maintenable

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start

# Vérifier le code
npm run lint
```

## 📝 Configuration

### Ajouter votre CV

Placez votre CV PDF dans le dossier `public/cv/` avec le nom `cv-anas-halloumi.pdf`.

### Modifier les données

Toutes les données du portfolio sont centralisées dans le dossier `data/` :

- **Projets** : `data/projects.ts`
- **Expériences** : `data/experience.ts`
- **Compétences** : `data/skills.ts`
- **Certifications** : `data/certifications.ts`
- **Participations** : `data/achievements.ts`
- **Formation** : `data/education.ts`

### Personnaliser les couleurs

Les couleurs sont définies dans `app/globals.css` avec des variables CSS :

```css
:root {
  --primary: 262 83% 58%;  /* Couleur principale (violet) */
  /* ... autres variables */
}
```

## 🚀 Déploiement sur Vercel

1. Push votre code sur GitHub
2. Connectez votre repo à Vercel
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

Ou utilisez la CLI Vercel :

```bash
npm install -g vercel
vercel
```

## 📧 Contact

- **Email**: anashllmtct8@gmail.com
- **LinkedIn**: [Anas Halloumi](https://www.linkedin.com/in/anas-halloumi)
- **GitHub**: [@anasIRISI](https://github.com/anasIRISI)

## 📄 Licence

Ce projet est personnel et destiné à usage privé.
