<template>
  <section id="pricing" class="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- En-tête de section -->
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Tarifs</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">
          Des offres simples et adaptées à vos besoins
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Des solutions accessibles pour les petites entreprises, artisans et indépendants
        </p>
      </div>

      <!-- Grille des offres -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <PricingCard
          v-for="offer in activeOffers"
          :key="offer.id"
          :title="offer.title"
          :price="offer.price"
          :subtitle="offer.subtitle"
          :features="offer.features"
          :options="offer.options"
          :highlight="offer.highlight"
          :cta="offer.cta"
        />
      </div>

      <!-- CTA Section -->
      <div class="max-w-3xl mx-auto text-center bg-linear-to-br from-accent-50 to-primary-50 rounded-2xl p-12 border border-primary-100">
        <div class="mb-6">
          <svg class="w-16 h-16 mx-auto text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
          Vous ne savez pas quelle offre choisir ?
        </h3>
        <p class="text-lg text-neutral-600 mb-8">
          Expliquez-moi votre projet, je vous réponds rapidement avec un devis personnalisé
        </p>

        <a
          href="#contact"
          class="inline-block gradient-accent text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-primary"
        >
          Demander un devis personnalisé
        </a>

        <p class="text-sm text-neutral-500 mt-6">
          Réponse sous 24h • Devis gratuit • Sans engagement
        </p>
      </div>

      <!-- Note -->
      <p class="text-center text-neutral-600 mt-12 max-w-2xl mx-auto text-sm">
        <span class="font-semibold">Tous les tarifs sont indicatifs</span> et peuvent varier selon la complexité de votre projet.
        Les hébergements, noms de domaine et éventuels plugins premium sont facturés séparément.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import PricingCard from './PricingCard.vue'
import { getActivePricing } from '../data/pricing.js'

// Filtrer uniquement les offres actives
const activeOffers = computed(() => getActivePricing())
</script>

<style scoped>
</style>
