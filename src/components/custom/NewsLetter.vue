<template>
    <section class="bg-gradient-to-b from-white to-gray-100 py-10 md:py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h2
            class="font-heading text-3xl md:text-4xl text-black mb-4 uppercase tracking-tight leading-tight md:leading-none"
          >
            Receive Exclusive Listings in Your Inbox
          </h2>
          <CardDescription class="font-body text-gray-600 text-base md:text-lg mb-6 md:mb-8">
            Are you interested in buying a home? Look no further than working with a real estate expert.
          </CardDescription>
          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center bg-white p-6 md:p-8 rounded-lg shadow-lg transform -skew-y-1"
          >
            <div class="flex-1">
              <Input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="NAME"
                class="font-body text-sm uppercase border-black focus:ring-black focus:border-black placeholder:text-gray-400 rounded-md py-3 md:py-4 transition-all duration-300"
              />
            </div>
            <div class="flex-1">
              <Input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="EMAIL"
                class="font-body text-sm uppercase border-black focus:ring-black focus:border-black placeholder:text-gray-400 rounded-md py-3 md:py-4 transition-all duration-300"
              />
            </div>
            <Button
              type="submit"
              class="font-body text-sm uppercase bg-black text-white hover:bg-gray-900 hover:scale-105 transition-all duration-300 px-6 py-3 md:py-4 rounded-md w-full sm:w-auto"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { CardDescription } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { ref } from "vue"
  
  const form = ref({
    name: "",
    email: ""
  })
  
  const handleSubmit = () => {
    console.log("Form submitted:", form.value)
    form.value = { name: "", email: "" }
  }
  </script>
  
  <style>
  /* Ensure Tailwind animations are enabled in your tailwind.config.js */
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>