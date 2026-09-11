<script setup>
import { usePageHead } from '../utils/seo';
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import PricingSection from '../components/PricingSection.vue'
import ContactSection from '../components/ContactSection.vue'

usePageHead({
  title: 'ADB Digital — Création de sites web pour petites entreprises | Freelance Web Yonne',
  description:
    "ADB Digital accompagne les petites entreprises et artisans de l'Yonne dans leur transformation digitale : création de sites web, identité visuelle et gestion des réseaux sociaux.",
  path: '/'
});
</script>

<template>
  <main class="pt-20">
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <AboutSection />
    <TestimonialsSection />
    <PricingSection />
    <ContactSection />
  </main>
</template>

<style scoped>
</style>
