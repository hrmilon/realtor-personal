<template>
  <section class="bg-gray-50 py-8 mt-10">
    <div class="container mx-auto px-4">
      <div class="max-w-sm mx-auto">
        <Card class="border-gray-200 shadow-md">
          <CardHeader class="pb-4">
            <CardTitle class="font-heading text-xl text-black">Contact Us</CardTitle>
            <CardDescription class="font-body text-gray-600 text-sm">
              Reach out to discuss your real estate needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form @submit.prevent="handleSubmit" class="space-y-3">
              <div class="space-y-1">
                <Label for="name" class="font-body text-gray-700 text-sm">Name</Label>
                <Input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your Name"
                  class="font-body text-sm border-gray-300 focus:ring-black focus:border-black"
                />
              </div>
              <div class="space-y-1">
                <Label for="email" class="font-body text-gray-700 text-sm">Email</Label>
                <Input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="font-body text-sm border-gray-300 focus:ring-black focus:border-black"
                />
              </div>
              <div class="space-y-1">
                <Label for="phone" class="font-body text-gray-700 text-sm">Phone</Label>
                <Input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  class="font-body text-sm border-gray-300 focus:ring-black focus:border-black"
                />
              </div>
              <div class="space-y-1">
                <Label for="message" class="font-body text-gray-700 text-sm">Message</Label>
                <Textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Your message"
                  class="font-body text-sm border-gray-300 focus:ring-black focus:border-black min-h-[80px]"
                />
              </div>
              <Button
                type="submit"
                class="w-full font-body text-sm bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ref } from "vue"

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const handleSubmit = () => {
  console.log("Form submitted:", form.value)
  form.value = { name: "", email: "", phone: "", message: "" }
}
</script>