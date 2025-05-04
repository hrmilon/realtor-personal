<template>
  <footer class="bg-gray-900 text-gray-400 py-6 mt-auto">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="font-heading text-white text-base mb-4">Contact Us</h3>
          <Button variant="ghost"
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <Phone class="w-4 h-4" />
            <span>+1 123-4567</span>
          </Button>
          <Button variant="ghost"
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <Mail class="w-4 h-4" />
            <span>contact@me.com</span>
          </Button>
        </div>

        <!-- Connect With Me -->
        <div class="space-y-4">
          <h3 class="font-heading text-white text-base mb-4">Connect With Me</h3>
          <Button variant="ghost" asChild
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <RouterLink :to="{ path: '/profile' }">
              <Linkedin class="w-4 h-4" />
              <span>Profile</span>
            </RouterLink>
          </Button>
          <Button variant="ghost" asChild
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <RouterLink :to="{ path: '/listing' }">
              <Home class="w-4 h-4" />
              <span>Listings</span>
            </RouterLink>
          </Button>
        </div>

        <!-- Professional Affiliations -->
        <div class="space-y-4">
          <h3 class="font-heading text-white text-base mb-4">Professional Affiliations</h3>
          <Button variant="ghost" asChild
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <RouterLink :to="{ path: '#' }">
              <!-- <Building2 class="w-4 h-4" /> -->
              <span>
                <!-- <img class="w-20 h-10 bg-white rounded-"
                  src="https://realestateagentpdx.com/wp-content/uploads/2021/07/EXP-Black-square.png" alt="" srcset=""> -->
                  Example 1
              </span>
            </RouterLink>
          </Button>
          <Button variant="ghost" asChild
            class="w-full justify-start gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-body">
            <RouterLink :to="{ path: '#' }">
              <span>
                  Example 2
              </span>
            </RouterLink>
          </Button>
        </div>
      </div>
      <div class="mt-6 text-center text-xs font-body">
        <p>© 2025 (). All rights reserved.</p>
        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 font-body">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { RouterLink } from "vue-router"
import { Phone, Mail, Linkedin, Home, Building2, Award } from "lucide-vue-next"
</script>