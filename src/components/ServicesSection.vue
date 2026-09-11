<template>
  <section id="services" class="py-24 md:py-32 px-6 bg-white relative overflow-hidden flex flex-col items-center">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Ce que je propose</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">Mes Services</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Des solutions digitales complètes pour développer votre présence en ligne
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <!-- Service 1 -->
        <div class="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-accent-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 shadow-primary group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-neutral-900 mb-4">Création de sites web</h3>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Sites vitrines modernes et responsive</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Sites e-commerce avec gestion des produits</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Optimisation SEO pour être visible</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Maintenance et mises à jour</span>
              </li>
            </ul>

            <a href="#contact" class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group/link">
              Demander un devis
              <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-accent-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 shadow-accent group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-neutral-900 mb-4">Identité visuelle & création graphique</h3>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Création de logo et charte graphique</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Design de supports print (flyers, cartes de visite)</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Maquettes et prototypes</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Refonte d'identité visuelle</span>
              </li>
            </ul>

            <a href="#contact" class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group/link">
              Demander un devis
              <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-accent-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mb-6 shadow-accent group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-neutral-900 mb-4">Réseaux sociaux & accompagnement</h3>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Création de visuels pour réseaux sociaux</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Stratégie de contenu adaptée</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Gestion et animation de vos pages</span>
              </li>
              <li class="flex items-start gap-3 text-neutral-600">
                <svg class="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Accompagnement personnalisé</span>
              </li>
            </ul>

            <a href="#contact" class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold group/link">
              En savoir plus
              <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
