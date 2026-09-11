<template>
  <section id="hero" class="min-h-screen flex items-center justify-center gradient-hero px-6 py-32 md:py-40 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div class="absolute bottom-20 left-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

    <div class="max-w-6xl mx-auto text-center relative z-10">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card mb-6">
        <span class="w-2 h-2 bg-success-500 rounded-full animate-pulse"></span>
        <span class="text-sm font-medium text-neutral-700">Disponible pour de nouveaux projets</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
        Création de sites web<br/>
        <span class="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
          pour petites entreprises
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        ADB Digital vous accompagne dans votre transformation digitale avec des solutions web
        <span class="font-semibold text-primary-700">sur mesure, accessibles et performantes</span>.
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="#contact"
          class="group gradient-accent text-white px-5 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-primary hover:shadow-lg"
        >
          <span class="flex items-center justify-center gap-2">
            Parler de votre projet
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
        <a
          href="#services"
          class="group bg-white hover:bg-neutral-50 text-accent-700 px-5 py-3 rounded-xl text-lg font-semibold border-2 border-accent-200 hover:border-accent-400 transition-all shadow-card hover:shadow-card-hover"
        >
          <span class="flex items-center justify-center gap-2">
            Voir mes services
            <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
