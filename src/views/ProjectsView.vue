<template>
  <div class="min-h-screen bg-white">
    <!-- Header avec navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-30 flex items-center justify-center">
            <img src="/logo.png" alt="">
          </div>
        </router-link>

        <router-link
          to="/"
          class="text-neutral-600 hover:text-primary-600 transition-colors flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l'accueil
        </router-link>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-16 px-6 gradient-hero relative overflow-hidden">
      <div class="absolute top-10 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute bottom-10 left-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div class="max-w-6xl mx-auto text-center relative z-10">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
        <h1 class="text-4xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6">
          Mes réalisations
        </h1>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Découvrez les projets web, logos, réseaux sociaux et identités visuelles réalisés pour mes clients
        </p>
      </div>
    </section>

    <!-- Grille de projets -->
    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- Grille responsive -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <ProjectCard
              :title="project.title"
              :type="project.type"
              :image="project.image"
              :description="project.description"
              :slug="project.slug"
            />
          </div>
        </div>

        <!-- Message si aucun projet -->
        <div v-if="projects.length === 0" class="text-center py-20">
          <p class="text-neutral-500 text-lg">Aucun projet à afficher pour le moment.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6 bg-gradient-to-br from-accent-50 to-primary-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Vous avez un projet en tête ?
        </h2>
        <p class="text-xl text-neutral-600 mb-10">
          Discutons ensemble de vos besoins et donnons vie à votre projet digital
        </p>
        <router-link
          to="/#contact"
          class="inline-block gradient-accent text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-accent"
        >
          Parlons de votre projet
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

// SEO Meta tags - using document API as fallback
onMounted(() => {
  document.title = 'Réalisations ADB Digital – Sites web, logos & identité visuelle'

  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
  metaDescription.setAttribute('name', 'description')
  metaDescription.setAttribute('content', 'Découvrez les projets web, logos, réseaux sociaux et identités visuelles réalisés par ADB Digital pour petites entreprises et artisans en Bourgogne.')
  if (!metaDescription.parentElement) {
    document.head.appendChild(metaDescription)
  }
})

// Intersection Observer pour les animations au scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
