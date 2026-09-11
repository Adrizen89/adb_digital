/**
 * Genere public/sitemap.xml a partir du router et des donnees projets.
 * Lance automatiquement avant chaque build (npm run build).
 *
 * lastmod = date de derniere modification du fichier source de la page,
 * et non la date du build : un lastmod qui bouge sans que le contenu change
 * est un signal que Google finit par ignorer.
 */
import { writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { projects } from '../src/data/projects.js';

const SITE_URL = 'https://adbdigital.fr';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const lastmod = (file) => statSync(resolve(root, file)).mtime.toISOString().slice(0, 10);

const pages = [
  { path: '/', source: 'src/views/HomeView.vue' },
  { path: '/projects', source: 'src/data/projects.js' },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    source: 'src/data/projects.js',
  })),
  { path: '/mentions-legales', source: 'src/views/MentionsLegales.vue' },
  { path: '/politique-confidentialite', source: 'src/views/PolitiqueConfidentialite.vue' },
];

const urls = pages
  .map(
    ({ path, source }) =>
      `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod(source)}</lastmod>\n  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
console.log(`sitemap.xml : ${pages.length} URL generees`);
