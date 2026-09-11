<template>
  <section id="projects" class="py-24 md:py-32 px-6 bg-neutral-50 relative overflow-hidden flex flex-col items-center">
    <!-- Background decoration -->
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">Réalisations</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Découvrez quelques projets réalisés pour mes clients
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-accent-200"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <!-- Badge type -->
            <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-accent-600/90 backdrop-blur-sm">
              {{ project.type }}
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-neutral-600 mb-6">{{ project.description }}</p>

            <router-link
              :to="`/projects/${project.slug}`"
              class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold text-sm group/link"
            >
              Voir le projet
              <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-20 text-center">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"
        >
          Voir tous mes projets
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>

        <p class="text-neutral-600 mb-8 text-lg">Vous avez un projet en tête ?</p>
        <a
          href="#contact"
          class="inline-block gradient-accent text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-primary"
        >
          Discutons-en ensemble
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { getFeaturedProjects } from '../data/projects.js'

const projects = computed(() => getFeaturedProjects())
</script>

<style scoped>
</style>
