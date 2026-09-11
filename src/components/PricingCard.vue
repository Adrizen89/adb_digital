<template>
  <div
    class="relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border h-full flex flex-col"
    :class="{
      'border-primary-300 ring-2 ring-primary-200': highlight,
      'border-neutral-100': !highlight
    }"
  >
    <!-- Badge "Recommandé" si highlight -->
    <div v-if="highlight" class="absolute top-0 right-0">
      <div class="bg-accent-500 text-white text-xs font-semibold px-4 py-2 rounded-bl-xl shadow-lg">
        Le plus choisi
      </div>
    </div>

    <!-- En-tête -->
    <div class="p-8 pb-6" :class="{ 'pt-12': highlight }">
      <h3 class="text-2xl font-bold text-neutral-900 mb-2">
        {{ title }}
      </h3>
      <p class="text-sm text-neutral-500 mb-6">
        {{ subtitle }}
      </p>
      <div class="mb-6">
        <span class="text-4xl font-bold text-primary-700">{{ price }}</span>
      </div>
    </div>

    <!-- Features -->
    <div class="px-8 pb-6 flex-1">
      <h4 class="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
        Inclus
      </h4>
      <ul class="space-y-3">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-3"
        >
          <svg class="w-5 h-5 text-success-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-sm text-neutral-600">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Options (si disponibles) -->
    <div v-if="options && options.length > 0" class="px-8 pb-6 border-t border-neutral-100 pt-6">
      <h4 class="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Options
      </h4>
      <ul class="space-y-2">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="flex items-start gap-2"
        >
          <span class="text-accent-500 shrink-0 mt-1">•</span>
          <span class="text-sm text-neutral-600">{{ option }}</span>
        </li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="p-8 pt-6 mt-auto">
      <button
        @click="handleClick"
        class="w-full py-4 rounded-lg font-semibold transition-all text-center"
        :class="{
          'gradient-accent text-white hover:scale-105 shadow-accent': highlight,
          'bg-accent-50 text-accent-700 hover:bg-accent-100 border-2 border-accent-200': !highlight
        }"
      >
        {{ cta }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { trackEvent } from '../utils/analytics'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    required: true
  },
  options: {
    type: Array,
    default: () => []
  },
  highlight: {
    type: Boolean,
    default: false
  },
  cta: {
    type: String,
    default: 'Demander un devis'
  }
})

const handleClick = () => {
  // Tracking de l'événement
  trackEvent('pricing_cta_click', {
    offer_title: props.title,
    offer_price: props.price
  })

  // Scroll vers la section contact
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
</style>
