<template>
  <div class="min-h-screen bg-gray-50 py-20 px-4">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

      <p class="text-gray-700 mb-8">
        <strong>Date de dernière mise à jour :</strong> {{ currentDate }}
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
        <p class="text-gray-700 mb-4">
          ADB Digital accorde une grande importance à la protection de vos données personnelles. Cette politique de
          confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données lorsque
          vous utilisez notre site web.
        </p>
        <p class="text-gray-700">
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
          vous disposez de droits sur vos données personnelles.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
        <p class="text-gray-700">
          Le responsable du traitement des données est :<br />
          <strong>ADB Digital - Adrien Bérard</strong><br />
          Email : <a href="mailto:contact@adb-digital.fr" class="text-blue-600 hover:underline">contact@adb-digital.fr</a>
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
        <p class="text-gray-700 mb-4">
          Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Prénom et nom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Type de projet souhaité</li>
          <li>Message / Description de votre projet</li>
          <li>Date et heure de la soumission</li>
        </ul>
        <p class="text-gray-700">
          Nous collectons également des données de navigation via Google Analytics (si activé) : pages visitées,
          durée de visite, type d'appareil, etc.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Finalité du traitement</h2>
        <p class="text-gray-700 mb-4">Vos données personnelles sont collectées pour les finalités suivantes :</p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Répondre à vos demandes de contact et de devis</li>
          <li>Gérer la relation client</li>
          <li>Améliorer nos services</li>
          <li>Respecter nos obligations légales</li>
          <li>Analyser le trafic et l'utilisation du site (données anonymisées)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Base légale du traitement</h2>
        <p class="text-gray-700">
          Le traitement de vos données repose sur les bases légales suivantes :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li><strong>Consentement :</strong> En remplissant le formulaire de contact, vous consentez au traitement de vos données</li>
          <li><strong>Exécution d'un contrat :</strong> Pour répondre à votre demande de devis</li>
          <li><strong>Intérêt légitime :</strong> Pour améliorer nos services</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
        <p class="text-gray-700">
          Vos données sont conservées pendant une durée de <strong>3 ans</strong> à compter de notre dernier contact.
          Passé ce délai, vos données sont supprimées, sauf obligation légale de conservation.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Destinataires des données</h2>
        <p class="text-gray-700 mb-4">
          Vos données personnelles sont destinées exclusivement à :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>ADB Digital (Adrien Bérard) pour le traitement de votre demande</li>
          <li>Firebase (Google) pour le stockage sécurisé des données</li>
          <li>Notre prestataire d'hébergement web</li>
        </ul>
        <p class="text-gray-700 mt-4">
          Nous ne vendons, ne louons, ni ne partageons vos données avec des tiers à des fins commerciales.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Transferts de données hors UE</h2>
        <p class="text-gray-700">
          Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de l'Union Européenne,
          notamment via Firebase (Google). Ces transferts sont encadrés par des clauses contractuelles types approuvées
          par la Commission Européenne.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Vos droits</h2>
        <p class="text-gray-700 mb-4">
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
          <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
          <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
          <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement</li>
          <li><strong>Droit à la portabilité :</strong> Vous pouvez recevoir vos données dans un format structuré</li>
          <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
          <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
        </ul>
        <p class="text-gray-700">
          Pour exercer ces droits, contactez-nous à :
          <a href="mailto:contact@adb-digital.fr" class="text-blue-600 hover:underline">contact@adb-digital.fr</a>
        </p>
        <p class="text-gray-700 mt-4">
          Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
          (<a href="https://www.cnil.fr" target="_blank" class="text-blue-600 hover:underline">www.cnil.fr</a>).
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
        <p class="text-gray-700 mb-4">
          Notre site utilise des cookies pour améliorer votre expérience de navigation :
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
          <li><strong>Cookies analytiques :</strong> Google Analytics pour mesurer l'audience (si activé)</li>
        </ul>
        <p class="text-gray-700 mt-4">
          Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Sécurité</h2>
        <p class="text-gray-700">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
          contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
          Les données sont stockées sur des serveurs sécurisés (Firebase) avec chiffrement.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Modifications</h2>
        <p class="text-gray-700">
          Cette politique de confidentialité peut être modifiée à tout moment. La version en vigueur est celle
          publiée sur le site. Nous vous encourageons à consulter régulièrement cette page.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
        <p class="text-gray-700">
          Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
          vous pouvez nous contacter à :<br />
          <strong>Email :</strong> <a href="mailto:contact@adb-digital.fr" class="text-blue-600 hover:underline">contact@adb-digital.fr</a><br />
          <strong>Téléphone :</strong> <a href="tel:+33644389554" class="text-blue-600 hover:underline">06 44 38 95 54</a>
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
import { computed } from 'vue';

const currentDate = computed(() => {
  return new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
</script>

<style scoped>
</style>
