# Instructions d'utilisation du portfolio

## ✅ Ce qui a été créé

Votre portfolio professionnel est maintenant complet avec :

### 📄 Sections principales
- ✅ Hero avec animation de fond
- ✅ À propos avec statistiques
- ✅ Stack technique organisée par catégories
- ✅ "Ce qui m'intéresse" avec visualisation du flow IA
- ✅ Expériences (timeline moderne)
- ✅ Projets sélectionnés
- ✅ Certifications
- ✅ Participations (hackathons)
- ✅ Formation
- ✅ Contact

### 🎨 Features
- ✅ Navbar sticky avec dark/light mode
- ✅ Footer minimaliste
- ✅ Animations Framer Motion
- ✅ Design responsive
- ✅ SEO optimisé
- ✅ Performance optimisée

## 🚀 Prochaines étapes

### 1. Ajouter votre CV

```bash
# Placez votre CV PDF dans le dossier public/cv/
# Nom attendu : cv-anas-halloumi.pdf
```

### 2. Tester le portfolio

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

### 3. Vérifier que tout fonctionne

- [ ] Navigation fluide entre les sections
- [ ] Dark mode fonctionne correctement
- [ ] Toutes les animations s'affichent
- [ ] Responsive sur mobile/tablet/desktop
- [ ] Les liens email/LinkedIn/GitHub fonctionnent

### 4. Personnaliser les données (si nécessaire)

Tous les fichiers de données sont dans le dossier `data/` :

#### Modifier les projets (`data/projects.ts`)
```typescript
{
  id: "mon-projet",
  title: "Titre du projet",
  description: "Description...",
  category: "AI / GenAI",
  technologies: ["React", "Python"],
  github: "https://github.com/...",  // Optionnel
  demo: "https://...",                // Optionnel
  featured: true,                     // Met en avant le projet
}
```

#### Ajouter une expérience (`data/experience.ts`)
```typescript
{
  id: "nouvelle-exp",
  company: "Entreprise",
  location: "Ville",
  position: "Poste",
  period: "Date – Date",
  description: "Description...",
  technologies: ["Tech1", "Tech2"],
}
```

#### Ajouter une compétence (`data/skills.ts`)
```typescript
{
  category: "Nouvelle catégorie",
  skills: ["Skill 1", "Skill 2"],
}
```

### 5. Personnaliser les couleurs (optionnel)

Modifiez `app/globals.css` :

```css
:root {
  --primary: 262 83% 58%;  /* Changez cette valeur HSL */
}
```

Exemples de couleurs :
- Bleu : `220 90% 56%`
- Vert : `142 76% 36%`
- Orange : `25 95% 53%`
- Rouge : `0 84% 60%`

### 6. Builder et tester la production

```bash
# Builder le projet
npm run build

# Vérifier qu'il n'y a pas d'erreurs
npm run lint

# Tester la version de production
npm start
```

### 7. Déployer sur Vercel

#### Option A : Via l'interface Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez votre repository
4. Vercel détecte automatiquement Next.js
5. Cliquez sur "Deploy"

#### Option B : Via CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

### 8. Configuration du domaine personnalisé

1. Achetez un domaine (ex: anashalloumi.dev)
2. Dans Vercel : Settings → Domains
3. Ajoutez votre domaine
4. Configurez les DNS

## 🎨 Personnalisation avancée

### Changer les fonts

Modifiez `app/layout.tsx` :

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Ajouter Google Analytics

Dans `app/layout.tsx`, ajoutez avant la balise `</body>` :

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

### Ajouter des images aux projets

1. Ajoutez vos images dans `public/images/projects/`
2. Dans `data/projects.ts`, ajoutez :
```typescript
image: "/images/projects/mon-projet.png"
```
3. Dans `components/sections/projects.tsx`, remplacez le placeholder par :
```tsx
{project.image && (
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
)}
```

## 🐛 Résolution de problèmes

### Le dark mode ne fonctionne pas
- Vérifiez que `localStorage` est accessible
- Videz le cache du navigateur
- Vérifiez que les classes Tailwind dark: sont appliquées

### Les animations ne fonctionnent pas
- Vérifiez que framer-motion est installé : `npm list framer-motion`
- Vérifiez que les composants avec animations ont `"use client"`

### Erreurs de build
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install

# Supprimer le cache Next.js
rm -rf .next
npm run build
```

### Les icônes ne s'affichent pas
- Vérifiez que lucide-react est installé : `npm list lucide-react`
- Vérifiez les imports des icônes

## 📧 Support

Si vous avez des questions ou besoin d'aide supplémentaire, n'hésitez pas !

## ✨ Améliorations futures possibles

- [ ] Ajouter un blog
- [ ] Ajouter une page détail pour chaque projet
- [ ] Intégrer un CMS (Sanity, Contentful)
- [ ] Ajouter des animations 3D (Three.js, Spline)
- [ ] Multilingue (FR/EN)
- [ ] Analytics avancés
- [ ] Newsletter
- [ ] Testimonials / Recommandations

Bon courage pour votre recherche de stage PFE ! 🚀
