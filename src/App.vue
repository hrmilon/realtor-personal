<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/custom/nav/Navigation.vue';
import Footer from './components/custom/nav/Footer.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <Navigation />
    </div>
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped></style>
