<template>
  <section id="about" class="py-24 md:py-32 px-6 bg-white relative overflow-hidden flex flex-col items-center">
    <!-- Background decoration -->
    <div class="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Qui suis-je ?</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">À propos d'ADB Digital</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Un accompagnement personnalisé pour votre réussite digitale
        </p>
      </div>

      <div class="max-w-4xl mx-auto mb-24 text-center">
        <div class="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
          <span class="w-2 h-2 bg-primary-600 rounded-full"></span>
          <span class="text-sm font-medium text-primary-700">Développeur Web Freelance</span>
        </div>

        <h3 class="text-3xl font-bold text-neutral-900 mb-6">Bonjour, je suis Adrien</h3>

        <p class="text-neutral-600 mb-4 leading-relaxed text-lg">
          Développeur web freelance passionné, je mets mon expertise au service des <span class="font-semibold text-primary-700">petites entreprises et artisans</span> qui souhaitent développer leur présence en ligne.
        </p>

        <p class="text-neutral-600 mb-6 leading-relaxed text-lg">
          Avec ADB Digital, je propose des solutions web accessibles, performantes et adaptées à vos besoins réels. Mon objectif : vous aider à <span class="font-semibold text-accent-600">gagner en visibilité</span> et à attirer de nouveaux clients grâce au digital.
        </p>

        <p class="text-neutral-600 leading-relaxed mb-8 text-lg">
          Basé en Bourgogne, j'interviens principalement dans l'<span class="font-semibold text-neutral-800">Yonne (89)</span> et les départements limitrophes, mais je travaille aussi avec des clients partout en France grâce au digital.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <a href="#contact" class="gradient-accent text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-primary">
            Travaillons ensemble
          </a>
          <a href="#projects" class="bg-white hover:bg-neutral-50 text-accent-700 px-8 py-4 rounded-lg font-semibold border-2 border-accent-200 hover:border-accent-400 transition-all">
            Voir mes réalisations
          </a>
        </div>
      </div>

      <!-- Valeurs -->
      <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-10 md:p-16">
        <h3 class="text-3xl font-bold text-neutral-900 mb-16 text-center">Mes valeurs</h3>

        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center group">
            <div class="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-primary group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-neutral-900 mb-3">Proximité</h4>
            <p class="text-neutral-600 leading-relaxed">
              Un interlocuteur unique disponible et à l'écoute de vos besoins. Une relation de confiance sur le long terme.
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-accent group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-neutral-900 mb-3">Accessibilité</h4>
            <p class="text-neutral-600 leading-relaxed">
              Des solutions digitales accessibles à tous, tant par leur prix que par leur simplicité d'utilisation.
            </p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-primary group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-neutral-900 mb-3">Efficacité</h4>
            <p class="text-neutral-600 leading-relaxed">
              Des projets livrés dans les délais avec un focus sur les résultats concrets pour votre activité.
            </p>
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
