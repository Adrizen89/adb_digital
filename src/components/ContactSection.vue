<template>
  <section id="contact" class="py-24 md:py-32 px-6 bg-neutral-50 relative overflow-hidden flex flex-col items-center">
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-accent-600 font-semibold text-sm uppercase tracking-wider">Contactez-moi</span>
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">Parlons de votre projet</h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Je vous réponds sous 24h. Discutons ensemble de vos besoins et trouvons la meilleure solution pour votre entreprise.
        </p>
      </div>

      <div v-if="submitStatus === 'success'" class="bg-success-50 border-2 border-success-500 rounded-2xl p-6 mb-8 shadow-card">
        <div class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-success-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <p class="text-success-800 text-center font-semibold">
            Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
          </p>
        </div>
      </div>

      <div v-if="submitStatus === 'error'" class="bg-red-50 border-2 border-red-500 rounded-2xl p-6 mb-8 shadow-card">
        <div class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <p class="text-red-800 text-center font-semibold">
            Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
          </p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-card-hover p-10 md:p-12 border border-neutral-100">
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label for="firstName" class="block text-neutral-700 font-semibold mb-2">
              Prénom *
            </label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              required
              class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.firstName }"
            />
            <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
          </div>

          <div>
            <label for="lastName" class="block text-neutral-700 font-semibold mb-2">
              Nom *
            </label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              required
              class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.lastName }"
            />
            <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
          </div>
        </div>

        <div class="mb-8">
          <label for="email" class="block text-neutral-700 font-semibold mb-3">
            Email *
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <div class="mb-8">
          <label for="phone" class="block text-neutral-700 font-semibold mb-3">
            Téléphone (optionnel)
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        <div class="mb-8">
          <label for="projectType" class="block text-neutral-700 font-semibold mb-3">
            Type de projet *
          </label>
          <select
            id="projectType"
            v-model="formData.projectType"
            required
            class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            :class="{ 'border-red-500': errors.projectType }"
          >
            <option value="">Sélectionnez un type de projet</option>
            <option value="site-web">Site web</option>
            <option value="logo-identite">Logo / Identité visuelle</option>
            <option value="reseaux-sociaux">Réseaux sociaux</option>
            <option value="autre">Autre</option>
          </select>
          <p v-if="errors.projectType" class="text-red-500 text-sm mt-1">{{ errors.projectType }}</p>
        </div>

        <div class="mb-8">
          <label for="message" class="block text-neutral-700 font-semibold mb-3">
            Message *
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="6"
            class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            :class="{ 'border-red-500': errors.message }"
            placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full gradient-accent text-white py-5 rounded-xl text-lg font-semibold transition-all hover:scale-[1.02] shadow-accent disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
            Envoyer mon message
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span v-else class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </span>
        </button>

        <p class="text-neutral-500 text-sm text-center mt-4">
          * Champs obligatoires
        </p>
      </form>

      <div class="mt-16 grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl p-6 shadow-card text-center border border-neutral-100">
          <div class="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-neutral-900 mb-1">Email</h3>
          <a href="mailto:adb.info.dev@gmail.com" class="text-neutral-600 hover:text-neutral-700 text-sm">
            adb.info.dev@gmail.com
          </a>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-card text-center border border-neutral-100">
          <div class="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="font-bold text-neutral-900 mb-1">Téléphone</h3>
          <a href="tel:+33644389554" class="text-neutral-600 hover:text-neutral-700 text-sm">
            06 44 38 95 54
          </a>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-card text-center border border-neutral-100">
          <div class="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="font-bold text-neutral-900 mb-1">Localisation</h3>
          <p class="text-neutral-600 text-sm">Yonne (89), Bourgogne</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { saveLead } from '../firebase/leads';
import { trackEvent } from '../utils/analytics';

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
});

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  projectType: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(''); // '', 'success', 'error'

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '');

  // Validate firstName
  if (!formData.firstName.trim()) {
    errors.firstName = 'Le prénom est requis';
    isValid = false;
  }

  // Validate lastName
  if (!formData.lastName.trim()) {
    errors.lastName = 'Le nom est requis';
    isValid = false;
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'L\'email est requis';
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = 'L\'email n\'est pas valide';
    isValid = false;
  }

  // Validate projectType
  if (!formData.projectType) {
    errors.projectType = 'Veuillez sélectionner un type de projet';
    isValid = false;
  }

  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'Le message est requis';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  console.log('=== FORM SUBMISSION STARTED ===');

  if (!validateForm()) {
    console.log('Validation failed');
    return;
  }

  console.log('Validation passed');
  isSubmitting.value = true;
  submitStatus.value = '';

  try {
    // Save lead to Firebase (non-blocking - don't fail the submission if Firebase fails)
    console.log('Attempting to save to Firebase...');
    try {
      await saveLead(formData);
      console.log('Lead saved to Firebase successfully');
    } catch (firebaseError) {
      // Log the error but don't block the submission
      console.warn('Firebase save failed (non-critical):', firebaseError);
    }

    // Send email via EmailJS using direct API call (avoids CSP issues)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'SET' : 'NOT SET' });

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey ||
        serviceId === 'your_service_id' ||
        templateId === 'your_template_id' ||
        publicKey === 'your_public_key') {
      console.warn('EmailJS not configured. Please set up your EmailJS credentials in .env file');
      // Still show success to user and save to Firebase
      submitStatus.value = 'success';

      // Track contact form submission
      trackEvent('contact_form_submit', {
        project_type: formData.projectType
      });

      // Reset form
      Object.keys(formData).forEach(key => formData[key] = '');
      console.log('=== FORM SUBMISSION COMPLETED (no email config) ===');
      return;
    }

    // Prepare template params for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Non renseigné',
      project_type: formData.projectType,
      message: formData.message,
      to_name: 'Adrien Bérard'
    };

    console.log('Sending email with params:', templateParams);

    // Send email using fetch API to avoid CSP eval issues
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    });

    console.log('EmailJS response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS error response:', errorText);
      throw new Error(`EmailJS API error: ${response.status} - ${errorText}`);
    }

    // EmailJS returns plain text "OK" on success, not JSON
    const result = await response.text();
    console.log('Email sent successfully:', result);

    submitStatus.value = 'success';

    // Track contact form submission
    trackEvent('contact_form_submit', {
      project_type: formData.projectType
    });

    // Reset form
    Object.keys(formData).forEach(key => formData[key] = '');

    console.log('=== FORM SUBMISSION COMPLETED SUCCESSFULLY ===');

  } catch (error) {
    console.error('=== ERROR SUBMITTING FORM ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    console.log('isSubmitting set to false');
  }
};
</script>

<style scoped>
</style>
