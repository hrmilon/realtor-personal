<script setup>
import { RouterLink } from 'vue-router';

const loadInstagramEmbed = () => {
  const script = document.createElement('script');
  script.src = '//www.instagram.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
};

// loadInstagramEmbed();


</script>
<template>
  <main>
    <div>
      <HeroSection />
      <SocialSection />
      <BioData />
      <ListingSection />
    </div>
  </main>
</template>
