<template>
  <section id="testimonials" class="py-24 md:py-32 px-6 bg-neutral-50 relative overflow-hidden flex flex-col items-center">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Avis clients</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">Témoignages</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Ce que mes clients disent de leur expérience avec ADB Digital
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 relative"
        >
          <!-- Quote icon -->
          <div class="absolute top-6 right-6 text-primary-100">
            <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Content -->
          <p class="text-neutral-700 mb-6 leading-relaxed italic relative z-10">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-primary">
              <span class="text-white font-bold text-lg">{{ testimonial.name.charAt(0) }}</span>
            </div>
            <div>
              <p class="font-bold text-neutral-900">{{ testimonial.name }}</p>
              <p class="text-neutral-600 text-sm">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-20 text-center bg-white rounded-2xl p-10 shadow-card">
        <h3 class="text-2xl font-bold text-neutral-900 mb-6">Prêt à rejoindre mes clients satisfaits ?</h3>
        <p class="text-neutral-600 mb-8 text-lg">Discutons de votre projet et voyons comment je peux vous aider.</p>
        <a
          href="#contact"
          class="inline-block gradient-accent text-white px-10 py-5 rounded-xl font-semibold transition-all hover:scale-105 shadow-primary"
        >
          Commencer votre projet
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    id: 1,
    name: "L'équipe STPF",
    company: 'Sport Tremplin Puisaye Forterre',
    content: 'Merci à Adrien Berard pour l’affiche, jeune entrepreneur dynamique. Nous recommandons ses services pour développer et améliorer votre communication ! '
  },
  {
    id: 2,
    name: 'Mendy Pechour',
    company: 'Le M Coaching',
    content: 'J’avais vraiment besoin d’un site professionnel pour présenter mes offres de coaching et donner une image plus sérieuse à mon activité. Adrien a directement compris ce que je voulais : quelque chose de moderne, clair et efficace.'
  }
]);
</script>

<style scoped>
</style>
