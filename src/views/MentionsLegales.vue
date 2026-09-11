<template>
  <div class="min-h-screen bg-gray-50 py-20 px-4">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Informations légales</h2>
        <p class="text-gray-700 mb-4">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique,
          il est précisé aux utilisateurs du site ADB Digital l'identité des différents intervenants dans le cadre de sa
          réalisation et de son suivi.
        </p>

        <h3 class="text-xl font-semibold text-gray-900 mb-2">Éditeur du site</h3>
        <p class="text-gray-700 mb-2">
          <strong>Raison sociale :</strong> ADB Digital - Adrien Bérard<br />
          <strong>Statut :</strong> Auto-entrepreneur / Micro-entreprise<br />
          <strong>SIRET :</strong> 937 548 915 00019<br />
          <strong>SIREN :</strong> 937 548 915<br />
          <strong>Adresse :</strong> 2Bis les Joubins, 89120 Perreux, France<br />
          <strong>Email :</strong> <a href="mailto:adb.info.dev@gmail.com" class="text-blue-600 hover:underline">adb.info.dev@gmail.com</a><br />
          <strong>Téléphone :</strong> <a href="tel:+33644389554" class="text-blue-600 hover:underline">06 44 38 95 54</a>
        </p>

        <h3 class="text-xl font-semibold text-gray-900 mb-2 mt-6">Directeur de la publication</h3>
        <p class="text-gray-700">
          Adrien Bérard
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
        <p class="text-gray-700">
          <strong>Hébergeur :</strong> Hostinger International Ltd<br />
          <strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
          <strong>Téléphone :</strong> +357 24 030 182<br />
          <strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">www.hostinger.fr</a>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
        <p class="text-gray-700 mb-4">
          L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive
          d'ADB Digital, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
        </p>
        <p class="text-gray-700">
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents
          éléments est strictement interdite sans l'accord exprès par écrit d'ADB Digital.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Limitation de responsabilité</h2>
        <p class="text-gray-700 mb-4">
          ADB Digital ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur,
          lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications
          techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
        </p>
        <p class="text-gray-700">
          ADB Digital ne pourra également être tenue responsable des dommages indirects consécutifs à l'utilisation du site.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Liens hypertextes</h2>
        <p class="text-gray-700">
          Le site ADB Digital peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet.
          Les liens vers ces autres ressources vous font quitter le site ADB Digital. Il est possible de créer un lien
          vers la page de présentation de ce site sans autorisation expresse d'ADB Digital.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Données personnelles</h2>
        <p class="text-gray-700">
          Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter
          notre <router-link to="/politique-confidentialite" class="text-blue-600 hover:underline">Politique de confidentialité</router-link>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable</h2>
        <p class="text-gray-700">
          Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable,
          le tribunal compétent sera celui du ressort du siège social d'ADB Digital.
        </p>
      </section>

      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Retour à l'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePageHead } from '../utils/seo';

// Page legale : utile aux visiteurs, sans interet dans l'index de Google.
usePageHead({
  title: 'Mentions légales — ADB Digital',
  description: "Mentions légales du site ADB Digital : éditeur, hébergeur, propriété intellectuelle et conditions d’utilisation.",
  path: '/mentions-legales',
  noindex: true
});
</script>

<style scoped>
</style>
