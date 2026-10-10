# 🚀 Quick Start Guide

## Étapes rapides pour lancer votre portfolio

### 1. Installer les dépendances (si ce n'est pas déjà fait)
```bash
npm install
```

### 2. Ajouter votre CV
Placez votre fichier CV PDF dans :
```
public/cv/cv-anas-halloumi.pdf
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Vérifier la compilation TypeScript
```bash
npx tsc --noEmit
```

### 5. Builder pour la production
```bash
npm run build
```

### 6. Déployer sur Vercel
```bash
# Option 1 : Via l'interface web
# 1. Push sur GitHub
# 2. Allez sur vercel.com
# 3. Import votre repo
# 4. Deploy

# Option 2 : Via CLI
npm install -g vercel
vercel
```

## 🎨 Personnalisation rapide

### Changer la couleur principale
Éditez `app/globals.css`, ligne avec `--primary` :
```css
--primary: 262 83% 58%;  /* Violet par défaut */
```

### Modifier vos informations
Tous les fichiers sont dans le dossier `data/` :
- `projects.ts` - Vos projets
- `experience.ts` - Vos expériences
- `skills.ts` - Vos compétences
- `certifications.ts` - Vos certifications
- `achievements.ts` - Vos participations hackathons
- `education.ts` - Votre formation

### Changer les liens sociaux
Éditez :
- `components/sections/contact.tsx` (section contact)
- `components/layout/footer.tsx` (footer)

## ✅ Checklist avant déploiement

- [ ] CV ajouté dans `public/cv/`
- [ ] Informations personnelles vérifiées
- [ ] Liens sociaux fonctionnent
- [ ] `npm run build` réussit sans erreurs
- [ ] Testé sur mobile/tablet/desktop
- [ ] Dark mode fonctionne
- [ ] Toutes les animations s'affichent

## 🆘 Problèmes courants

**Erreur "Module not found"**
```bash
npm install
```

**Port 3000 déjà utilisé**
```bash
npm run dev -- -p 3001
```

**Erreurs TypeScript**
```bash
npx tsc --noEmit
```

C'est tout ! Votre portfolio est prêt. 🎉
