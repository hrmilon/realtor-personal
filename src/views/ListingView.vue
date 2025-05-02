<template>
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-10">
      <Card
        v-for="(item, index) in listings"
        :key="index"
        class="w-full overflow-hidden rounded-none relative group"
      >
        <!-- Hover overlay -->
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
        >
          <Button
            variant="outline"
            @click="dialogOpen = true"
            class="font-body text-sm text-white bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white border-white rounded-none hover:border-none"
          >
            View Details
          </Button>
        </div>
  
        <img :src="item.image" alt="Image" class="w-full h-64 object-cover" />
  
        <CardContent class="p-4">
          <h2 class="text-lg font-heading font-bold">{{ item.text }}</h2>
          <h2 class="text-lg font-heading font-bold">${{ item.price }}</h2>
          <div class="text-sm font-body text-gray-500 mt-2">
            <table class="w-full">
              <tr>
                <td class="font-heading text-left">Size</td>
                <td class="font-body text-right">{{ item.size }} sqft</td>
              </tr>
              <tr>
                <td class="font-heading text-left">Room</td>
                <td class="font-body text-right">{{ item.rooms }}</td>
              </tr>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Card, CardContent } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'
  
  const dialogOpen = ref(false)
  
  const listings = ref([
    {
      image: 'http://ap.rdcpix.com/a38743c53f65bcc88d83d25ae4fbe41dl-m1750736176rd-w1280_h960.webp',
      text: 'Chattanooga',
      price: 12300,
      size: 1500,
      rooms: '2 bed 2 bath',
    },
    {
      image: 'https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m2294610827rd-w2048_h1536.webp',
      text: 'Pittsburg',
      price: 45000,
      size: 3200,
      rooms: '4 bed 3 bath',
    },
    {
      image: 'https://ap.rdcpix.com/9b9b2029a7b41aff2ac78f1438e042b6l-m4108336929rd-w480_h360.webp',
      text: 'Rossville',
      price: 45000,
      size: 3200,
      rooms: '4 bed 3 bath',
    },
    {
      image: 'http://ap.rdcpix.com/a38743c53f65bcc88d83d25ae4fbe41dl-m1750736176rd-w1280_h960.webp',
      text: 'Luxury Villa',
      price: 45000,
      size: 3200,
      rooms: '4 bed 3 bath',
    },
    {
      image: 'https://ap.rdcpix.com/9b9b2029a7b41aff2ac78f1438e042b6l-m4108336929rd-w480_h360.webp',
      text: 'Luxury Villa',
      price: 45000,
      size: 3200,
      rooms: '4 bed 3 bath',
    },
    {
      image: 'http://ap.rdcpix.com/a38743c53f65bcc88d83d25ae4fbe41dl-m1750736176rd-w1280_h960.webp',
      text: 'Luxury Villa',
      price: 45000,
      size: 3200,
      rooms: '4 bed 3 bath',
    },  
   
  ])
  </script>
  