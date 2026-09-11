# ADB Digital — site vitrine

Site one-page de ADB Digital (Adrien Bérard), freelance en création de sites web et
identité visuelle pour petites entreprises et artisans dans l'Yonne.

**En production : [adbdigital.fr](https://adbdigital.fr)** — déployé automatiquement à chaque push sur `main`.

## Stack

- **Vue 3** (Composition API, `<script setup>`) + **Vue Router**
- **Vite 7** — build et serveur de développement
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **unhead** — meta tags par page
- Google Analytics (optionnel, chargé seulement si la variable est définie)

Aucune dépendance backend : le site est entièrement statique.

## Démarrage

```bash
npm install
npm run dev
```

Node 20.19+ ou 22.12+ (exigence de Vite 7).

Copier `.env.example` vers `.env` si vous voulez activer Google Analytics.
Sans `.env`, le site fonctionne normalement, sans suivi d'audience.

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run build` | build de production vers `dist/` (régénère le sitemap au passage) |
| `npm run preview` | prévisualise le build — **ne teste pas le `.htaccess`**, voir plus bas |
| `npm run sitemap` | régénère `public/sitemap.xml` seul |
| `./scripts/test-prod.sh` | teste le build sous un vrai Apache (routes, redirections, en-têtes) |
| `./scripts/test-prod.sh --serve` | idem, mais laisse le serveur tourner sur `:8899` |
| `./scripts/test-prod.sh --stop` | arrête ce serveur |

## Structure

```
adb/
├── .github/workflows/deploy.yml   # build + déploiement FTPS vers Hostinger
├── public/
│   ├── .htaccess                  # fallback SPA, redirection www, cache, gzip
│   ├── robots.txt
│   ├── sitemap.xml                # généré — ne pas éditer à la main
│   ├── og-image.jpg               # visuel des partages sociaux (1200×630)
│   ├── logo.png
│   └── projects/                  # images du portfolio
├── scripts/
│   ├── generate-sitemap.js        # sitemap depuis src/data/projects.js
│   └── test-prod.sh               # test du build sous Apache
├── src/
│   ├── components/                # sections de la page d'accueil
│   ├── views/                     # pages routées
│   ├── data/
│   │   ├── projects.js            # portfolio — source du sitemap
│   │   └── pricing.js             # offres tarifaires
│   ├── router/index.js
│   ├── utils/analytics.js
│   ├── App.vue                    # layout + footer
│   └── style.css                  # palette et utilitaires Tailwind
└── index.html                     # meta SEO, Open Graph, Schema.org
```

## Routes

| Route | Page |
|---|---|
| `/` | accueil (hero, services, réalisations, à propos, témoignages, tarifs, contact) |
| `/projects` | toutes les réalisations |
| `/projects/:slug` | détail d'une réalisation |
| `/mentions-legales` | mentions légales |
| `/politique-confidentialite` | politique de confidentialité |

## Formulaire de contact

Le formulaire n'appelle aucun service externe. À la validation, il ouvre le
logiciel de messagerie du visiteur avec un message pré-rempli (`mailto:`).

L'adresse destinataire est la constante `CONTACT_EMAIL`, en tête de
`src/components/ContactSection.vue`.

Le formulaire ne se vide pas après soumission : si aucun client mail ne s'ouvre
— cas fréquent avec un webmail non associé — le visiteur doit retrouver son texte.
Un message de repli affiche alors l'adresse et le téléphone.

> Historique : le formulaire passait auparavant par Firebase (archivage des leads)
> et EmailJS (notification). Les deux ont été retirés. Firebase pesait à lui seul
> 222 Ko, soit plus que tout le reste du site, pour un unique `addDoc` non critique.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : build, contrôle
d'intégrité de `dist/`, puis envoi en FTPS vers Hostinger. Déclenchement manuel
possible depuis l'onglet *Actions*.

Secrets GitHub attendus (*Settings → Secrets and variables → Actions*) :

| Secret | Rôle |
|---|---|
| `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` | accès FTP Hostinger (hPanel) |
| `VITE_GA_MEASUREMENT_ID` | identifiant Google Analytics — optionnel |

Variable optionnelle `FTP_SERVER_DIR` si la destination n'est pas `/public_html/`.

Le workflow refuse de déployer si `index.html`, `.htaccess`, `robots.txt`,
`sitemap.xml` ou `og-image.jpg` manquent à l'appel dans `dist/`.

**En cas d'échec `Timeout (control socket)`** : c'est la connexion FTP, pas la
configuration. Hostinger limite les connexions rapprochées — attendre une minute
et relancer le run.

## Points d'attention

### `npm run preview` ne teste pas le routage

Le serveur de Vite applique son propre fallback SPA : toutes les routes
répondront `200` même si le `.htaccess` est absent ou cassé. Pour tester le
routage réel, utiliser `./scripts/test-prod.sh`, qui sert `dist/` via un vrai Apache.

### Le dossier `public/projects/` et la route `/projects`

Ils portent le même nom. Le `.htaccess` n'exclut du fallback que les *fichiers*
existants, jamais les répertoires : sans cela, `/projects` renvoie un 403 Apache
au lieu d'afficher la page. Ne pas ajouter de condition `-d` à cette règle.

### Le sitemap est généré

`public/sitemap.xml` est réécrit à chaque build depuis `src/data/projects.js` :
ajouter un projet suffit à le faire apparaître. Le `lastmod` reprend la date de
modification du fichier source, et non celle du build — un `lastmod` qui bouge
sans changement de contenu finit par être ignoré par Google.

## Personnalisation

| Quoi | Où |
|---|---|
| Réalisations | `src/data/projects.js` (`slug` = URL de la fiche) |
| Tarifs | `src/data/pricing.js` |
| Témoignages | `src/components/TestimonialsSection.vue` |
| Couleurs | `src/style.css` — `--color-primary-*`, `--color-accent-*`, `--color-neutral-*` |
| Coordonnées | `src/App.vue` (footer), `src/components/ContactSection.vue` |
| Mentions légales | `src/views/MentionsLegales.vue` |
| SEO, Open Graph, Schema.org | `index.html` |

Après modification des coordonnées, penser à `index.html` : le bloc Schema.org
reprend l'email, le téléphone, l'adresse et les profils sociaux.

## Licence

Projet privé — ADB Digital © 2026
