# ADB Digital - Portfolio Website

Site web one-page professionnel pour ADB Digital, freelance en création de sites web et identité visuelle pour petites entreprises.

## 🚀 Technologies

- **Vue 3** - Framework JavaScript progressif
- **Vite** - Build tool rapide et moderne
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vue Router** - Routing pour les pages légales
- **Firebase/Firestore** - Stockage des leads de contact
- **Google Analytics** - Tracking et analytics

## 📋 Fonctionnalités

### Sections du site
- ✅ **Hero** - Présentation principale avec CTAs
- ✅ **Services** - 3 services (Sites web, Identité visuelle, Réseaux sociaux)
- ✅ **Réalisations** - Portfolio de projets
- ✅ **À propos** - Présentation et valeurs
- ✅ **Témoignages** - Avis clients
- ✅ **Tarifs** - 3 offres de prix
- ✅ **Contact** - Formulaire avec validation

### Fonctionnalités techniques
- ✅ Navigation smooth scroll
- ✅ Header fixe responsive avec menu mobile
- ✅ Formulaire de contact avec validation
- ✅ Sauvegarde des leads dans Firebase
- ✅ SEO optimisé (meta tags, Schema.org)
- ✅ Google Analytics intégré
- ✅ Pages légales (Mentions légales, Politique de confidentialité)
- ✅ Footer complet avec liens sociaux
- ✅ Design responsive (mobile, tablet, desktop)

## 🛠️ Installation

### Prérequis
- Node.js 18+ et npm

### Étapes

1. **Cloner le projet** (si applicable)
   ```bash
   git clone [url-du-repo]
   cd adb
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   ```

   Puis éditer `.env` avec vos vraies valeurs :
   - Firebase (voir `FIREBASE_SETUP.md`)
   - Google Analytics (optionnel)

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le site sera accessible sur `http://localhost:5173`

5. **Build pour production**
   ```bash
   npm run build
   ```

   Les fichiers seront générés dans le dossier `dist/`

6. **Preview du build de production**
   ```bash
   npm run preview
   ```

## 🔧 Configuration

### Firebase (Optionnel mais recommandé)

Pour sauvegarder les leads de contact dans Firebase :
1. Suivre le guide `FIREBASE_SETUP.md`
2. Créer un projet Firebase
3. Configurer Firestore
4. Ajouter les credentials dans `.env`
5. Mettre à jour `src/firebase/config.js` pour utiliser les variables d'environnement

**Note :** Le formulaire fonctionne sans Firebase, mais les leads ne seront pas sauvegardés.

### Google Analytics (Optionnel)

Pour activer le tracking :
1. Créer une propriété GA4 sur https://analytics.google.com
2. Obtenir votre Measurement ID (format: G-XXXXXXXXXX)
3. Ajouter dans `.env` :
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

**Note :** GA ne se charge qu'en production (pas en mode dev).

### Intégration Email (TODO - T11)

Le formulaire est prêt mais l'envoi d'email n'est pas encore configuré. Options :

**Option 1 : EmailJS** (Recommandé)
```bash
npm install @emailjs/browser
```
Puis configurer dans `src/components/ContactSection.vue`

**Option 2 : Formspree**
Simple endpoint POST, voir https://formspree.io

**Option 3 : Backend custom**
API Node.js/PHP avec Nodemailer ou équivalent

## 📁 Structure du projet

```
adb/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants Vue
│   │   ├── HeaderNav.vue
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── AboutSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── PricingSection.vue
│   │   └── ContactSection.vue
│   ├── views/           # Pages/vues
│   │   ├── HomeView.vue
│   │   ├── MentionsLegales.vue
│   │   └── PolitiqueConfidentialite.vue
│   ├── router/          # Configuration Vue Router
│   │   └── index.js
│   ├── firebase/        # Configuration Firebase
│   │   ├── config.js
│   │   └── leads.js
│   ├── utils/           # Utilitaires
│   │   └── analytics.js
│   ├── App.vue          # Composant racine
│   ├── main.js          # Point d'entrée
│   └── style.css        # Styles globaux
├── .env.example         # Template variables d'environnement
├── FIREBASE_SETUP.md    # Guide setup Firebase
├── package.json
└── README.md
```

## 🎨 Personnalisation

### Contenu
- Modifier les textes dans chaque composant de section (`src/components/*Section.vue`)
- Remplacer les images placeholder par de vraies images
- Mettre à jour les informations de contact dans le footer (`src/App.vue`)
- Compléter les mentions légales avec vos vraies informations

### Couleurs
Les couleurs principales sont dans Tailwind CSS :
- Bleu primaire : `blue-600` / `blue-700`
- Pour changer, modifier les classes dans les composants ou configurer Tailwind

### Projets
Modifier le tableau `projects` dans `src/components/ProjectsSection.vue`

### Témoignages
Modifier le tableau `testimonials` dans `src/components/TestimonialsSection.vue`

### Tarifs
Modifier les cartes de tarifs dans `src/components/PricingSection.vue`

## 📱 Responsive Design

Le site est optimisé pour :
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Utilisation des classes Tailwind responsive : `md:`, `lg:`

## 🔍 SEO

### Optimisations incluses
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org LocalBusiness markup
- ✅ Structure sémantique HTML (h1, h2, h3)
- ✅ Canonical URL
- ✅ Lang="fr" sur html

### À faire avant mise en production
- [ ] Créer et ajouter un `og-image.jpg` (1200x630px)
- [ ] Créer un favicon personnalisé
- [ ] Remplacer les URLs placeholder par vos vraies URLs
- [ ] Configurer un fichier `robots.txt`
- [ ] Créer un `sitemap.xml`
- [ ] Soumettre le site à Google Search Console

## 🚢 Déploiement

### Netlify (Recommandé)
1. Connecter votre repo GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Ajouter les variables d'environnement dans Netlify UI

### Vercel
1. Connecter votre repo
2. Framework preset: Vite
3. Ajouter les variables d'environnement

### Autres (OVH, O2Switch, etc.)
1. Build: `npm run build`
2. Upload le contenu du dossier `dist/` via FTP
3. Configurer le serveur web (Apache/Nginx)

## 📝 Checklist avant production

- [ ] Configurer Firebase avec vos vraies credentials
- [ ] Configurer Google Analytics
- [ ] Intégrer l'envoi d'email (EmailJS/Formspree)
- [ ] Remplacer toutes les images placeholder
- [ ] Mettre à jour tous les textes "À compléter"
- [ ] Ajouter votre vrai numéro de téléphone
- [ ] Compléter le SIRET dans les mentions légales
- [ ] Ajouter vos vrais liens sociaux (LinkedIn, GitHub)
- [ ] Créer et ajouter un favicon
- [ ] Créer et ajouter une OG image
- [ ] Tester le formulaire de contact
- [ ] Vérifier la navigation sur mobile
- [ ] Tester sur différents navigateurs
- [ ] Vérifier les performances (Lighthouse)
- [ ] Configurer robots.txt et sitemap.xml

## 🆘 Support

Pour toute question ou problème :
- Consulter `FIREBASE_SETUP.md` pour Firebase
- Vérifier les logs de la console navigateur
- Vérifier que `.env` est bien configuré

## 📄 Licence

Projet privé - ADB Digital © 2025
