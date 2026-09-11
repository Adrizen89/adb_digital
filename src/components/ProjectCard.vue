<template>
  <div
  class="card-container perspective-1000"
  @click="handleClick"
  @mouseenter="handleMouseEnter"
  @mouseleave="handleMouseLeave"
>

    <div
      class="card-inner relative w-full h-full transition-transform duration-600"
      :class="{ 'rotate-y-180': isFlipped }"
    >
      <!-- Face avant -->
      <div class="card-face card-front absolute w-full h-full backface-hidden">
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden border border-neutral-100 h-full flex flex-col">
          <!-- Image -->
          <div class="relative overflow-hidden h-56">
            <img
              :src="image"
              :alt="title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>

            <!-- Badge type -->
            <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-accent-600/90 backdrop-blur-sm">
              {{ type }}
            </div>

            <!-- Icône flip (mobile) -->
            <div class="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center md:hidden">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-neutral-900 mb-2">
              {{ title }}
            </h3>
            <p class="text-sm text-neutral-500 mb-4">{{ type }}</p>

            <!-- Hint hover (desktop only) -->
            <div class="mt-auto pt-4 border-t border-neutral-100">
              <p class="text-xs text-neutral-400 hidden md:block">
                Survolez pour en savoir plus
              </p>
              <p class="text-xs text-neutral-400 md:hidden">
                Appuyez pour en savoir plus
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Face arrière -->
      <div class="card-face card-back absolute w-full h-full backface-hidden rotate-y-180">
        <div class="bg-gradient-to-br from-accent-600 to-accent-800 rounded-2xl shadow-card-hover overflow-hidden border border-accent-700 h-full flex flex-col p-6 text-white">
          <!-- En-tête -->
          <div class="mb-4">
            <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
            <p class="text-sm text-primary-100">{{ type }}</p>
          </div>

          <!-- Description -->
          <div class="flex-1 overflow-y-auto">
            <p class="text-sm leading-relaxed text-primary-50">
              {{ description }}
            </p>
          </div>

          <!-- Bouton -->
          <div class="mt-6 pt-4 border-t border-accent-500">
            <router-link
              :to="`/projects/${slug}`"
              class="inline-flex items-center justify-center gap-2 w-full bg-white text-accent-700 px-6 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors group"
              @click.stop
            >
              Voir le projet
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
})

const isFlipped = ref(false)
const isMobile = ref(false)

// Détection mobile
const checkIfMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// Gestion du clic (mobile)
const handleClick = () => {
  if (isMobile.value) {
    isFlipped.value = !isFlipped.value
  }
}

// Gestion du hover (desktop)
const handleMouseEnter = () => {
  if (!isMobile.value) {
    isFlipped.value = true
  }
}

const handleMouseLeave = () => {
  if (!isMobile.value) {
    isFlipped.value = false
  }
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile)
})

</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  transform-style: preserve-3d;
}

.card-face {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.duration-600 {
  transition-duration: 0.6s;
}

/* Classe pour mobile - désactiver le hover */
@media (max-width: 768px) {
  .card-container:hover .card-inner {
    transform: none;
  }
}
</style>
