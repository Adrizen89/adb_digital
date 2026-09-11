<template>
  <header class="fixed top-0 left-0 right-0 glass border-b border-neutral-200 z-50">
    <nav class="max-w-7xl mx-auto px-6 py-5">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#hero" class="w-30">
            <img src="/public/logo.png" alt="">
        </a>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-neutral-700 hover:text-primary-600 focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              @click="smoothScroll"
              class="text-neutral-700 hover:text-accent-600 font-medium transition-colors relative group"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click="smoothScroll"
              class="gradient-accent text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:scale-105 shadow-primary inline-block"
            >
              Demander un devis
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4 bg-white/95 backdrop-blur-sm"
      >
        <ul class="space-y-2">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              @click="smoothScroll"
              class="block text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all py-3 px-4 rounded-lg"
            >
              {{ item.label }}
            </a>
          </li>
          <li class="pt-2">
            <a
              href="#contact"
              @click="smoothScroll"
              class="block gradient-accent text-white px-8 py-4 rounded-lg font-semibold transition-all text-center shadow-primary"
            >
              Demander un devis
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
];

const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const headerHeight = 80; // Adjust based on header height
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu after clicking
    mobileMenuOpen.value = false;
  }
};
</script>

<style scoped>
</style>
