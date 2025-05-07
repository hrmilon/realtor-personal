```vue
<template>
  <main>
    <div>
      <!-- Hero Section -->
      <div
        class="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40 z-0"></div>

        <!-- Hero Content -->
        <div class="text-center z-10">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight motion-safe:animate-[fadeInUp_0.6s_ease-out]">
            Elevate Your Real Estate Vision
          </h1>
          <p
            class="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed motion-safe:animate-[fadeInUp_0.6s_ease-out_200ms]">
            Crafting bespoke, high-converting websites for real estate professionals. Transform your brand with elegance
            and functionality.
          </p>
          <button @click="openModal"
            class="inline-block bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-700 transition-transform transform hover:scale-105 motion-safe:animate-[fadeInUp_0.6s_ease-out_400ms]">
            Start Your Journey
          </button>
          <div class="mt-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_600ms]">
            <p class="text-base sm:text-lg">
              Email:
              <a href="mailto:habib.r.milon@gmail.com"
                class="underline hover:text-amber-300 transition">habib.r.milon@gmail.com</a>
            </p>
            <p class="text-base sm:text-lg mt-2">
              Instagram:
              <a href="https://instagram.com/milon.web" target="_blank"
                class="underline hover:text-amber-300 transition">hrmilon</a>
            </p>
            <p class="text-base sm:text-lg mt-2">
              Agency Website:
              <a href="https://devexist.vercel.app/" target="_blank"
                class="underline hover:text-amber-300 transition">
                Visit Our Agency
              </a>
            </p>

          </div>
        </div>
      </div>

      <!-- Portfolio Section -->
      <section class="bg-gray-100 py-16 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight motion-safe:animate-[fadeInUp_0.6s_ease-out]">
              Signature Real Estate Websites
            </h2>
            <p
              class="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed motion-safe:animate-[fadeInUp_0.6s_ease-out_200ms]">
              A curated selection of stunning, high-converting websites crafted to elevate real estate brands.
            </p>
          </div>

          <!-- Portfolio Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <!-- Portfolio Item 1 -->
            <div
              class="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 motion-safe:animate-[fadeInUp_0.6s_ease-out_400ms]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Estates Website" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Luxury Estates</h3>
                <p class="text-gray-600 text-sm">
                  A sleek, modern website for a premium real estate agency, featuring advanced property filters and
                  immersive visuals.
                </p>
              </div>
              <div class="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <!-- Portfolio Item 2 -->
            <div
              class="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 motion-safe:animate-[fadeInUp_0.6s_ease-out_600ms]">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Urban Realty Website" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Urban Realty</h3>
                <p class="text-gray-600 text-sm">
                  A dynamic platform for city-based realtors, with seamless MLS integration and responsive design.
                </p>
              </div>
              <div class="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <!-- Portfolio Item 3 -->
            <div
              class="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 motion-safe:animate-[fadeInUp_0.6s_ease-out_800ms]">
              <img
                src="https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coastal Properties Website" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Coastal Properties</h3>
                <p class="text-gray-600 text-sm">
                  A visually captivating website for beachfront listings, optimized for lead generation and user
                  engagement.
                </p>
              </div>
              <div class="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <!-- More Projects Hint -->
          <div class="text-center mt-12 motion-safe:animate-[fadeInUp_0.6s_ease-out_1000ms]">
            <p class="text-lg sm:text-xl text-gray-600 font-light">
              This is just the beginning. Countless other real estate visions have been brought to life with the same
              passion and precision.
            </p>
            <button @click="openModal"
              class="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 motion-safe:animate-[fadeInUp_0.6s_ease-out_400ms]">
              Create Your Website Now
            </button>
          </div>
        </div>
      </section>

      <!-- Contact Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <div
          class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative motion-safe:animate-[fadeIn_0.3s_ease-out]">
          <!-- Close Button -->
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Modal Content -->
          <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h2>
          <form @submit.prevent="onSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input v-model="name" type="text" id="name" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your first and last name" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email Address</label>
              <input v-model="email" type="email" id="email" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="john@doe.com" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea v-model="message" id="message" required rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your message..."></textarea>
            </div>
            <div>
              <button type="submit"
                class="w-full bg-amber-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105"
                :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Send Message' }}
              </button>
            </div>

            <!-- Notification -->
            <div v-if="showNotification" class="mt-4">
              <div :class="[
                'p-3 rounded-md flex items-center gap-2',
                error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
              ]">
                <svg v-if="error" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ errorMessage }}</span>
                <button @click="resetStates" class="ml-auto text-current hover:text-gray-900 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';

// Modal state
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
  error.value = ''; // Reset error message
  submitted.value = false; // Reset submission state
};
const closeModal = () => {
  isModalOpen.value = false;
  name.value = '';
  email.value = '';
  message.value = '';
  error.value = '';
  submitted.value = false;
};

// Form state
const name = ref('');
const email = ref('');
const message = ref('');
const error = ref('');
const submitted = ref(false);
const isSubmitting = ref(false);

// Form submission
const onSubmit = async () => {
  isSubmitting.value = true;
  resetStates();

  try {
    const response = await fetch('https://formcarry.com/s/wBN3wdo9paj', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });

    const data = await response.json();

    if (data.code === 200) {
      submitted.value = true;
      resetForm();
    } else if (data.code === 422) {
      error.value = data.message;
    } else {
      error.value = data.message;
    }
  } catch (err) {
    error.value = err.message ? err.message : 'An error occurred. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};

// Helper functions
const resetStates = () => {
  submitted.value = false;
  error.value = '';
};

const resetForm = () => {
  name.value = '';
  email.value = '';
  message.value = '';
};

const showNotification = computed(() => submitted.value || error.value);

// Computed property for error message
const errorMessage = computed(() =>
  error.value ? error.value : 'Thanks for reaching out! We will get back to you soon.'
);
</script>
```