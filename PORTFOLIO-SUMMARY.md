# 📋 Résumé du Portfolio - Anas Halloumi

## 🎯 Objectif
Portfolio professionnel moderne pour recherche de stage PFE (6 mois, à partir de janvier/février 2027).

## ✨ Caractéristiques principales

### Design
- ✅ Minimaliste et élégant
- ✅ Technologique et professionnel
- ✅ Beaucoup d'espace blanc
- ✅ Animations subtiles et fluides
- ✅ Dark mode + Light mode
- ✅ 100% Responsive

### Sections implémentées
1. **Hero** - Présentation impactante avec badge "Disponible pour PFE"
2. **À propos** - Description + statistiques (3 stages, 5+ projets)
3. **Stack technique** - Compétences organisées par catégories
4. **Ce qui m'intéresse** - Focus sur l'IA avec visualisation du flow
5. **Expériences** - Timeline des 3 stages (Polydesign, 3LM, Aptiv)
6. **Projets** - 4 projets majeurs mis en avant
7. **Certifications** - 8 certifications (Oracle, IBM, Meta, etc.)
8. **Participations** - 2 hackathons
9. **Formation** - Diplôme ingénieur + DEUG
10. **Contact** - Email, LinkedIn, GitHub

### Technologies utilisées
- Next.js 16.4.0 (App Router)
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icônes)

### SEO & Performance
- ✅ Metadata complètes (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap automatique
- ✅ Robots.txt
- ✅ Images optimisées (Next.js Image)
- ✅ Fonts optimisées (Geist Sans & Mono)
- ✅ Respect de prefers-reduced-motion

## 📁 Architecture du code

```
mon-portfolio/
├── app/                     # App Router
│   ├── layout.tsx          # Layout + SEO
│   ├── page.tsx            # Page principale
│   ├── globals.css         # Design system
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Navbar + Footer
│   ├── sections/           # 10 sections du portfolio
│   └── ui/                 # Composants réutilisables
├── data/                   # Données centralisées
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── certifications.ts
│   ├── achievements.ts
│   └── education.ts
└── lib/
    └── utils.ts            # Utilitaires
```

## 🎨 Design System

### Couleurs
- **Primary**: Violet (#8b5cf6) - Pour les accents
- **Background**: Blanc (light) / #0a0a0a (dark)
- **Foreground**: #171717 (light) / #ededed (dark)
- **Muted**: Pour les textes secondaires
- **Border**: Pour les bordures subtiles

### Typographie
- **Sans**: Geist Sans (texte principal)
- **Mono**: Geist Mono (code)
- Tailles : 3xl à 7xl pour les titres, base à xl pour le corps

### Espacements
- Sections : py-16 md:py-24 lg:py-32
- Composants : gap-4 à gap-12
- Container : max-w-7xl

### Animations
- Fade in on scroll
- Stagger animations pour les listes
- Hover effects subtils
- Transitions douces (300-500ms)

## 📊 Contenu actuel

### Expériences
1. **Polydesign** (Août-Sept 2026) - AI Agent chatbot
2. **3LM** (Juin-Juillet 2026) - App web marché énergie
3. **Aptiv** (Juillet-Août 2025) - Digitalisation services internes

### Projets
1. **Assistance juridique intelligente** - RAG + Gemini API
2. **Patrimoine marocain** - Chatbot + OpenStreetMap
3. **Marketplace informatique** - Android + Firebase
4. **Location véhicules** - Laravel + MySQL

### Stack technique
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Spring Boot, FastAPI, Laravel
- **AI/GenAI**: LLM, RAG, AI Agents, LangChain, Gemini API
- **Database**: MySQL, PostgreSQL, Redis
- **DevOps**: Git, Docker, CI/CD

### Certifications
- Oracle Certified Generative AI Professional
- Oracle Certified AI Foundations Associate
- RAG for Generative AI Applications - IBM
- ML with SVM - 365 Data
- SQL Certificate - 365 Data
- React.js - Meta
- Laravel & PHP - Brightcoding

## 🚀 Déploiement

### Pré-requis
- Node.js 20+
- npm ou yarn
- Compte Vercel (gratuit)
- Compte GitHub

### Commandes
```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Production build
npm run start    # Serveur production
npm run lint     # Vérifier le code
```

### Vercel (recommandé)
1. Push sur GitHub
2. Import sur Vercel
3. Deploy automatique
4. Domaine personnalisé (optionnel)

## 📝 À faire avant le déploiement

### Obligatoire
- [ ] Ajouter CV dans `public/cv/cv-anas-halloumi.pdf`
- [ ] Vérifier tous les liens (email, LinkedIn, GitHub)
- [ ] Tester sur mobile, tablet, desktop
- [ ] Vérifier dark mode
- [ ] Tester toutes les animations
- [ ] `npm run build` sans erreurs

### Optionnel
- [ ] Ajouter images aux projets
- [ ] Ajouter liens GitHub aux projets (si publics)
- [ ] Personnaliser la couleur principale
- [ ] Ajouter Google Analytics
- [ ] Configurer domaine personnalisé
- [ ] Ajouter Open Graph image

## 🎯 Différenciateurs

Ce portfolio se distingue par :

1. **Orientation IA claire** - Section dédiée "Ce qui m'intéresse"
2. **Visualisation du flow** - User → AI Agent → Tools → Data → Answer
3. **Design moderne** - Pas de template générique
4. **Performance** - Optimisé pour Core Web Vitals
5. **Expérience utilisateur** - Navigation fluide, animations subtiles
6. **Professionnalisme** - Adapté pour un ingénieur IA

## 📞 Informations de contact

- **Email**: anashllmtct8@gmail.com
- **LinkedIn**: linkedin.com/in/anas-halloumi
- **GitHub**: github.com/anasIRISI
- **Statut**: Disponible stage PFE - 6 mois - 2027
- **Mobilité**: France

## 🎓 Profil

**Anas Halloumi**
Ingénieur IA & Développement Logiciel
Étudiant en dernière année - Université Cadi Ayyad

Spécialisations :
- Intelligence Artificielle (LLM, RAG, AI Agents)
- Développement Web (Full Stack)
- DevOps

---

**Le portfolio est prêt à être déployé ! 🚀**

Pour toute modification future, consultez les fichiers de documentation :
- `README.md` - Documentation technique complète
- `INSTRUCTIONS.md` - Guide d'utilisation détaillé
- `QUICKSTART.md` - Démarrage rapide
