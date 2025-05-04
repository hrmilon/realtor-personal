<script setup>
import { RouterLink } from 'vue-router';
import HeroSection from '@/components/custom/HeroSection.vue';
import BioData from '@/components/custom/BioData.vue';
import ListingSection from '@/components/custom/ListingSection.vue';
import SocialSection from '@/components/custom/SocialSection.vue';
import NewsLetter from '@/components/custom/NewsLetter.vue';
import Faq from '@/components/custom/Faq.vue';
import TestimonialSection from '@/components/custom/TestimonialSection.vue';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


</script>
<template>
  <main>
    <div>
      <!-- <HeroSection />
      <BioData />
      <ListingSection />
      <TestimonialSection />
      <SocialSection />
      <NewsLetter />
      <Faq /> -->

      <div
        class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center h-screen flex flex-col justify-center items-center">
        <h1 class="text-5xl font-extrabold mb-6">Welcome to Your Next Big Step!</h1>
        <p class="text-xl mb-8 max-w-2xl">
          I specialize in creating high-converting websites tailored to your business needs. Let's make your vision a
          reality!
        </p>
        <a href="mailto:habib.r.milon@gmail.com"
          class="bg-white text-blue-500 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition mb-6">
          Get Started Today
        </a>
        <p class="text-lg">
          Email: <a href="mailto:habib.r.milon@gmail.com"
            class="underline hover:text-gray-200">habib.r.milon@gmail.com</a>
        </p>
        <p class="text-lg mt-2">
          Instagram: <a href="https://instagram.com/hrmilon99" target="_blank"
            class="underline hover:text-gray-200">hrmilon</a>
        </p>
      </div>
    </div>
  </main>
</template>
<style></style>
