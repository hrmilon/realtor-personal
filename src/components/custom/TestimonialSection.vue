<template>
  <section class="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-3xl md:text-4xl text-black mb-8 text-center">What My Clients Say</h2>
      <div class="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory scrollbar-hide">
        <!-- Testimonial 1 -->
        <Card
          class="border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 snap-center min-w-[280px] md:min-w-0 bg-white animate-fade-in">
          <CardHeader class="flex items-center gap-4">
            <Avatar class="border-2 border-black">
              <AvatarImage
                src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
                alt="Client 1" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle class="font-heading text-lg text-black">Jane Doe</CardTitle>
              <div class="flex items-center gap-1 text-yellow-500">
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="font-body text-gray-600 text-sm">
              Working with you was a game-changer! I found my dream home in just two weeks, thanks to your personalized
              approach and exclusive listings. I couldn’t be happier!
            </p>
          </CardContent>
        </Card>

        <!-- Testimonial 2 -->
        <Card
          class="border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 snap-center min-w-[280px] md:min-w-0 bg-white animate-fade-in">
          <CardHeader class="flex items-center gap-4">
            <Avatar class="border-2 border-black">
              <AvatarImage
                src="https://as2.ftcdn.net/jpg/02/24/86/95/1000_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.webp"
                alt="Client 2" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle class="font-heading text-lg text-black">Mark Smith</CardTitle>
              <div class="flex items-center gap-1 text-yellow-500">
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="font-body text-gray-600 text-sm">
              I was hesitant to sell my property, but your no-pressure evaluation gave me confidence. You helped me get
              top dollar for my home—highly recommend your expertise!
            </p>
          </CardContent>
        </Card>

        <!-- Testimonial 3 -->
        <Card
          class="border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 snap-center min-w-[280px] md:min-w-0 bg-white animate-fade-in">
          <CardHeader class="flex items-center gap-4">
            <Avatar class="border-2 border-black">
              <AvatarImage
                src="https://as2.ftcdn.net/jpg/01/34/06/21/1000_F_134062135_SdxKV0haFKE9KQNQpR4srbXkmYN0yi1G.webp"
                alt="Client 3" />
              <AvatarFallback>EL</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle class="font-heading text-lg text-black">Emily Lee</CardTitle>
              <div class="flex items-center gap-1 text-yellow-500">
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
                <Star class="w-4 h-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="font-body text-gray-600 text-sm">
              Your dedication made all the difference! I felt supported every step of the way, and you found me a home
              that perfectly fits my family’s needs. Thank you!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-vue-next"
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>