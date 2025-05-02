<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ref } from "vue";
import { RouterLink } from "vue-router";




const carouselItem = [
    {
        text: 'Chattanooga',
        image: 'https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m2294610827rd-w2048_h1536.webp',
        url: 'products/1'
    },
    {
        text: 'Pittsburgh',
        image: 'https://ap.rdcpix.com/9b9b2029a7b41aff2ac78f1438e042b6l-m4108336929rd-w480_h360.webp',
        url: 'products/2'
    },
    {
        text: 'South Pittsburg',
        image: 'http://ap.rdcpix.com/a38743c53f65bcc88d83d25ae4fbe41dl-m1750736176rd-w1280_h960.webp',
        url: 'products/3'
    },
    {
        text: 'Rossville',
        image: 'https://ap.rdcpix.com/9b9b2029a7b41aff2ac78f1438e042b6l-m4108336929rd-w480_h360.webp',
        url: 'products/4'
    },
    {
        text: 'Chattanooga',
        image: 'https://ap.rdcpix.com/9b9b2029a7b41aff2ac78f1438e042b6l-m4108336929rd-w480_h360.webp',
        url: 'products/5'
    }
];
let dialogOpen = ref(false);

</script>

<template>

    <div class="flex justify-center mx-16 my-16">
        <Carousel class="relative w-full max-w-4xl" :opts="{
            align: 'start',
        }">
            <div class="font-heading text-xl p-2">Featured Properites</div>
            <CarouselContent>
                <CarouselItem v-for="item in carouselItem" :key="item.text"
                    class="basis-full md:basis-1/2 lg:basis-1/2">
                    <div class="p-1">
                        <Card class="w-full overflow-hidden rounded-none relative group">
                            <!-- Hover overlay -->
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button variant="outline" @click="dialogOpen = true"
                                    class="font-body text-sm text-white bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white border-white rounded-none hover:border-none">
                                    View Details
                                </Button>
                            </div>
                            <img :src="item.image" alt="Image" class="w-full h-64 object-cover" />
                            <CardContent class="p-4">
                                <h2 class="text-lg font-heading font-bold">{{ item.text }}</h2>
                                <h2 class="text-lg font-heading font-bold">$12300</h2>
                                <p class="text-sm font-body text-gray-500">
                                <table class="w-full">
                                    <tr>
                                        <td class="font-heading text-left">Size</td>
                                        <td class="font-body text-right">1500 sqft</td>
                                    </tr>
                                    <tr>
                                        <td class="font-heading text-left">Room</td>
                                        <td class="font-body text-right">2 bed 2 bath</td>
                                    </tr>
                                </table>
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

    <div class="flex justify-center items-center relative">
        <div class="">
            <Button variant="outline"
                class="font-body text-sm text-black bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white border-black rounded-none hover:border-none">
                <RouterLink to="/listing">View All</RouterLink>
            </Button>
        </div>
    </div>



    <Dialog v-model:open="dialogOpen">
        <DialogContent class="sm:max-w-[425px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>123 Maple Street</DialogTitle>
                <DialogDescription>
                    A charming 3-bedroom, 2-bathroom family home in a quiet suburban neighborhood.
                </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4 overflow-y-auto px-6">
                <p>
                    This fully renovated property offers an open-concept living space, updated kitchen with quartz
                    countertops,
                    and energy-efficient appliances. The spacious backyard is perfect for outdoor entertaining, and the
                    home includes a 2-car garage and smart home features throughout. Just a short walk to local schools,
                    parks, and shopping centers. Listed at $425,000, it's a perfect blend of comfort and convenience.
                </p>
            </div>
            <DialogFooter class="p-6 pt-0">
                <Button type="submit">
                    <RouterLink to="/contact">Contact for More Details</RouterLink>
                </Button>
            </DialogFooter>
        </DialogContent>

    </Dialog>






</template>