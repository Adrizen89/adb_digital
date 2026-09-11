import { computed } from 'vue';
import { useHead } from '@unhead/vue';

export const SITE_URL = 'https://adbdigital.fr';

const IMAGE_PAR_DEFAUT = '/og-image.jpg';

/**
 * Definit les meta d'une page : titre, description, Open Graph, Twitter Card
 * et URL canonique.
 *
 * @param {Object|Function} source - soit un objet fixe, soit une fonction qui
 *   en retourne un (pour les pages dont le contenu depend de la route).
 *   Champs : { title, description, path, image?, noindex? }
 */
export function usePageHead(source) {
  useHead(
    computed(() => {
      const { title, description, path, image, noindex } =
        typeof source === 'function' ? source() : source;

      const url = `${SITE_URL}${path}`;
      const imageUrl = `${SITE_URL}${image || IMAGE_PAR_DEFAUT}`;

      return {
        title,
        link: [{ rel: 'canonical', href: url }],
        meta: [
          { name: 'description', content: description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:url', content: url },
          { property: 'og:image', content: imageUrl },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          // Les pages legales n'ont pas vocation a etre indexees, mais leurs
          // liens doivent rester suivis.
          ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : [])
        ]
      };
    })
  );
}
