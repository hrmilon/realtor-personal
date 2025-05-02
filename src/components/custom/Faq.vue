<template>
    <section class="bg-white py-8">
      <div class="container mx-auto px-4 flex justify-center">
        <div class="max-w-2xl w-full">
          <h2 class="font-heading text-3xl text-black mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" class="w-full border border-gray-200 rounded-md" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
              <AccordionTrigger class="font-heading text-black hover:text-gray-700 px-4 py-3">
                {{ item.title }}
              </AccordionTrigger>
              <AccordionContent class="font-body text-gray-600 px-4 py-3">
                {{ item.content }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
  
  const defaultValue = 'item-1'
  
  const accordionItems = [
    {
      value: 'item-1',
      title: 'What Makes My Real Estate Expertise Stand Out in a Crowded Market?',
      content:
        'My expertise stands out with my deep market knowledge, a personalized approach, and access to exclusive listings that give you a competitive edge. I use insider tips to help you secure the best deals before they hit the open market, ensuring you’re always one step ahead.'
    },
    {
      value: 'item-2',
      title: 'How Can I Help You Find Your Dream Home Faster?',
      content:
        'I use my exclusive listings and custom search strategies tailored to your lifestyle and preferences. My proactive approach connects you with the perfect property quickly—let me show you how I can streamline your home-buying journey!'
    },
    {
      value: 'item-3',
      title: 'What Should You Do If You’re Unsure About Selling Your Property?',
      content:
        'Don’t worry—I offer a no-pressure property evaluation to assess your home’s current value and optimal selling time. Contact me for a free consultation to explore your options and discover what your property could fetch today.'
    }
  ]
  </script>