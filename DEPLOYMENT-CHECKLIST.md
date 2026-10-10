# ✅ Checklist de déploiement

## Avant de déployer

### 1. Contenu obligatoire
- [ ] **CV PDF ajouté** dans `public/cv/cv-anas-halloumi.pdf`
- [ ] Informations personnelles vérifiées
- [ ] Email correct : anashllmtct8@gmail.com
- [ ] LinkedIn correct : linkedin.com/in/anas-halloumi
- [ ] GitHub correct : github.com/anasIRISI

### 2. Tests locaux
```bash
# Vérifier TypeScript
npx tsc --noEmit

# Vérifier ESLint
npm run lint

# Builder le projet
npm run build

# Tester la version production
npm start
```

- [ ] ✅ Aucune erreur TypeScript
- [ ] ✅ Aucune erreur ESLint
- [ ] ✅ Build réussi sans warnings critiques
- [ ] ✅ Version production fonctionne

### 3. Tests fonctionnels
Tester sur `http://localhost:3000` :

#### Navigation
- [ ] Navbar sticky fonctionne
- [ ] Menu mobile s'ouvre/ferme correctement
- [ ] Tous les liens de navigation scrollent vers les bonnes sections
- [ ] Le logo ramène en haut de page

#### Dark Mode
- [ ] Toggle dark/light mode fonctionne
- [ ] Thème persiste au rechargement
- [ ] Transition fluide entre les thèmes
- [ ] Tous les textes sont lisibles dans les deux modes

#### Sections
- [ ] Hero s'affiche avec animation de fond
- [ ] Badge "Disponible PFE" visible
- [ ] Tous les boutons du Hero fonctionnent
- [ ] Section About avec statistiques
- [ ] Stack technique bien organisée
- [ ] Section "Ce qui m'intéresse" avec flow
- [ ] Timeline expériences visible
- [ ] Projets s'affichent avec toutes les infos
- [ ] Certifications listées
- [ ] Participations affichées
- [ ] Formation visible
- [ ] Section Contact avec liens actifs

#### Liens
- [ ] Bouton CV ouvre le PDF (ou placeholder si pas encore ajouté)
- [ ] Email ouvre le client email
- [ ] LinkedIn ouvre le profil LinkedIn
- [ ] GitHub ouvre le profil GitHub
- [ ] Liens footer fonctionnent

#### Animations
- [ ] Animations Framer Motion fluides
- [ ] Fade in au scroll
- [ ] Hover effects sur les cartes
- [ ] Scroll indicator animé dans Hero
- [ ] Transitions entre sections

### 4. Tests responsive

#### Mobile (< 640px)
- [ ] Menu hamburger visible et fonctionnel
- [ ] Tout le contenu est lisible
- [ ] Pas de scroll horizontal
- [ ] Boutons assez grands pour être cliqués
- [ ] Images/cartes bien proportionnées

#### Tablet (640px - 1024px)
- [ ] Layout adapté
- [ ] Navigation correcte
- [ ] Cartes projets 2 colonnes

#### Desktop (> 1024px)
- [ ] Layout complet
- [ ] Navigation desktop visible
- [ ] Sections bien espacées
- [ ] Max-width respectée

### 5. Tests navigateurs

Tester sur :
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (si Mac disponible)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS si disponible)

### 6. Performance

Vérifier sur https://pagespeed.web.dev/ après déploiement :
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

### 7. SEO

- [ ] Title contient "Anas Halloumi | AI Engineer"
- [ ] Description présente
- [ ] Open Graph tags présents
- [ ] Sitemap accessible sur /sitemap.xml
- [ ] Robots.txt accessible sur /robots.txt

## Déploiement sur Vercel

### Option 1 : Interface Web (Recommandé)

1. **Préparer le repo GitHub**
```bash
git add .
git commit -m "Portfolio complet prêt pour déploiement"
git push origin main
```

2. **Sur Vercel**
- [ ] Aller sur https://vercel.com
- [ ] Se connecter avec GitHub
- [ ] Cliquer "New Project"
- [ ] Importer le repo `mon-portfolio`
- [ ] Vérifier les paramètres :
  - Framework Preset: Next.js
  - Root Directory: ./
  - Build Command: next build
  - Output Directory: .next
- [ ] Cliquer "Deploy"

3. **Attendre le déploiement**
- [ ] Build réussi (vert)
- [ ] Site accessible sur l'URL Vercel

### Option 2 : CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Suivre les instructions
# - Set up and deploy? Y
# - Which scope? [votre compte]
# - Link to existing project? N
# - What's your project's name? mon-portfolio
# - In which directory is your code located? ./
# - Want to override settings? N
```

- [ ] Déploiement terminé
- [ ] URL de production reçue

## Après déploiement

### 1. Vérifications immédiates
- [ ] Site accessible sur l'URL Vercel
- [ ] HTTPS activé automatiquement
- [ ] Toutes les sections s'affichent
- [ ] Dark mode fonctionne
- [ ] Liens fonctionnent

### 2. Tests sur mobile réel
- [ ] Tester sur votre téléphone
- [ ] Navigation fluide
- [ ] Responsive correct
- [ ] Animations fluides

### 3. Performance
- [ ] Tester sur https://pagespeed.web.dev/
- [ ] Vérifier Core Web Vitals
- [ ] Lighthouse score

### 4. Partage
- [ ] Partager le lien sur LinkedIn pour vérifier preview
- [ ] Tester Open Graph avec https://www.opengraph.xyz/
- [ ] Envoyer le lien par email pour vérifier

### 5. Domaine personnalisé (Optionnel)

Si vous avez un domaine :
- [ ] Acheter domaine (ex: anashalloumi.dev)
- [ ] Dans Vercel : Settings → Domains
- [ ] Ajouter le domaine
- [ ] Configurer DNS chez le registrar
- [ ] Attendre propagation DNS (24-48h max)
- [ ] Vérifier HTTPS sur domaine personnalisé

## Configuration post-déploiement

### Analytics (Optionnel)

#### Google Analytics
1. Créer propriété GA4
2. Obtenir ID (G-XXXXXXXXXX)
3. Ajouter dans `app/layout.tsx` :
```tsx
import Script from 'next/script'

// Dans le <body>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Variables d'environnement (Si nécessaire)

Dans Vercel Dashboard :
- Settings → Environment Variables
- Ajouter les variables nécessaires

## Maintenance

### Mise à jour du contenu
1. Modifier les fichiers dans `/data`
2. Commit et push
3. Vercel redéploie automatiquement

### Mise à jour du CV
1. Remplacer `public/cv/cv-anas-halloumi.pdf`
2. Commit et push
3. Vercel redéploie

### Monitoring
- [ ] Configurer alertes Vercel
- [ ] Vérifier analytics régulièrement
- [ ] Surveiller performances

## 🎉 Checklist finale

- [ ] ✅ Site déployé et accessible
- [ ] ✅ CV accessible
- [ ] ✅ Tous les liens fonctionnent
- [ ] ✅ Responsive testé
- [ ] ✅ Performance > 90
- [ ] ✅ SEO optimisé
- [ ] ✅ Partageable sur réseaux sociaux
- [ ] ✅ Prêt pour candidatures PFE

## 📧 Utilisation pour candidatures

Vous pouvez maintenant :
- ✅ Ajouter l'URL dans votre CV
- ✅ Partager sur LinkedIn
- ✅ Inclure dans vos emails de candidature
- ✅ Ajouter dans vos profils (GitHub, etc.)

**Exemple de phrase pour email :**
> "Vous pouvez consulter mon portfolio en ligne pour découvrir mes projets et compétences : [URL]"

---

**Bon courage pour votre recherche de stage PFE ! 🚀**
