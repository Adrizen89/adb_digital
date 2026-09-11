<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-30 flex items-center justify-center">
            <img src="/logo.png" alt="">
          </div>
        </router-link>

        <router-link
          to="/projects"
          class="text-neutral-600 hover:text-primary-600 transition-colors flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </router-link>
      </div>
    </header>

    <!-- Projet non trouvé -->
    <div v-if="!project" class="pt-32 pb-20 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-neutral-900 mb-6">Projet non trouvé</h1>
        <p class="text-xl text-neutral-600 mb-10">
          Désolé, le projet que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <router-link
          to="/projects"
          class="inline-block gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Voir tous les projets
        </router-link>
      </div>
    </div>

    <!-- Contenu du projet -->
    <div v-else>
      <!-- Hero -->
      <section class="pt-32 pb-16 px-6 gradient-hero">
        <div class="max-w-5xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card mb-6">
            <span class="text-sm font-medium text-accent-600">{{ project.type }}</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            {{ project.title }}
          </h1>

          <p class="text-xl text-neutral-600 max-w-3xl">
            {{ project.description }}
          </p>
        </div>
      </section>

      <!-- Image principale -->
      <section class="py-16 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <!-- Contexte & Objectifs -->
      <section class="py-16 px-6 bg-neutral-50">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contexte -->
            <div>
              <h2 class="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Contexte
              </h2>
              <p class="text-neutral-600 leading-relaxed">
                {{ project.context }}
              </p>
            </div>

            <!-- Objectifs -->
            <div>
              <h2 class="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Objectifs
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="(objective, index) in project.objectives"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <span class="w-6 h-6 bg-success-100 text-success-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span class="text-neutral-600">{{ objective }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Solution apportée -->
      <section class="py-16 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
            <span class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
            Solution apportée
          </h2>
          <p class="text-lg text-neutral-600 leading-relaxed">
            {{ project.solution }}
          </p>

          <!-- Technologies utilisées -->
          <div v-if="project.technologies && project.technologies.length > 0" class="mt-8">
            <h3 class="text-xl font-semibold text-neutral-900 mb-4">Technologies utilisées</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Galerie -->
      <section v-if="project.gallery && project.gallery.length > 0" class="py-16 px-6 bg-neutral-50">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-neutral-900 mb-10 text-center">Captures d'écran</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="(image, index) in project.gallery"
              :key="index"
              class="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <img
                :src="image"
                :alt="`${project.title} - Capture ${index + 1}`"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Résultats -->
      <section class="py-16 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-neutral-900 mb-10 flex items-center gap-3">
            <span class="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center text-success-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            Résultats obtenus
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(result, index) in project.results"
              :key="index"
              class="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl border border-primary-100"
            >
              <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                {{ index + 1 }}
              </div>
              <p class="text-neutral-700 font-medium">{{ result }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="py-24 px-6 bg-gradient-to-br from-accent-600 to-accent-800 text-white">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Vous voulez un projet comme celui-ci ?
          </h2>
          <p class="text-xl text-accent-100 mb-10">
            Discutons ensemble de vos besoins et créons quelque chose d'exceptionnel
          </p>
          <router-link
            to="/#contact"
            class="inline-block bg-white text-accent-700 px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discutons-en ensemble
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectBySlug } from '../data/projects.js'
import { usePageHead } from '../utils/seo'

const route = useRoute()
const router = useRouter()

// Récupérer le projet via le slug
const project = computed(() => {
  const slug = route.params.slug
  return getProjectBySlug(slug)
})

// Meta propres a chaque realisation : le titre reprend le type de projet,
// ce qui donne a chaque fiche sa propre requete cible.
usePageHead(() => {
  if (!project.value) {
    return {
      title: 'Réalisation introuvable — ADB Digital',
      description: 'Cette réalisation n’existe pas ou a été déplacée.',
      path: route.path,
      noindex: true
    }
  }

  return {
    title: `${project.value.title} — ${project.value.type} | ADB Digital`,
    description: project.value.description,
    path: `/projects/${project.value.slug}`,
    image: project.value.image
  }
})
</script>

<style scoped>
</style>
