<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<div class="fixed bottom-4 right-4 z-50 animate-[float_3s_ease-in-out_infinite]">
  <a href="/" target="_blank"
    class="text-xs px-3 py-1.5 bg-neutral-900 text-white rounded-full shadow-sm hover:bg-neutral-800 hover:shadow-md transition duration-300 ease-in-out">
    ⚡ Ready to go live?
  </a>
</div>

  <RouterView />
</template>
<style>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

</style>