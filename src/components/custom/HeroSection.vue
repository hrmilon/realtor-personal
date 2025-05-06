<script setup>
import { Button } from "@/components/ui/button"
import { computed, ref } from "vue";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSiteStore } from "@/stores/siteStore";

let isClicked = ref(false);

let bgImage = [
    "https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m893569012rd-w2048_h1536.webp",
    "https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m3106941553rd-w2048_h1536.webp",
    "https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m2294610827rd-w2048_h1536.webp"
]

let randomBg = ref(bgImage[Math.floor(Math.random() * bgImage.length)]);

let siteStore = useSiteStore();
const siteData = computed(() => siteStore.getSiteData)
const hasError = computed(() => siteStore.hasError)

</script>

<template>
    <div class="w-full h-screen relative">
        <video class="hidden md:block absolute top-0 left-0 w-full h-full object-cover brightness-[.6]" autoplay muted
            poster="https://ap.rdcpix.com/22660d531f7bdcff4cd7dbb2dfbaaa49l-m893569012rd-w2048_h1536.webp" playsinline
            loop>
            loop>
            <source src="https://res.cloudinary.com/dutdq9qzm/video/upload/v1745991251/realtor.mp4" type="video/mp4" />
            Your browser does not support the video.
        </video>

        <div class="md:hidden relative bg-cover bg-center w-full h-screen brightness-[.6]"
            :style="{ backgroundImage: `url(${randomBg})` }">
        </div>

        <!-- for further reference -->
        <!-- <div
            class="absolute inset-0 text-white flex flex-col justify-center items-center space-y-4 md:space-y-3 p-2 md:p-4">
            <div class="flex flex-col items-center text-center">
                <div class="text-xl md:text-xl font-body font-bold md:text-white">
                    Helping Serve Chattanooga, TN & North Georgia
                </div>
                <div class="text-base font-heading">
                    Top-rated agent helping families buy & sell with confidence.
                </div>
            </div>
            <div class="mt-4">
                <Button @click="isClicked = true" variant="outline"
                    class="font-body text-sm text-white bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white hover:border-none rounded-none">Book
                    a
                    Consultation</Button>
            </div>
        </div> -->

        <div
            class="absolute inset-0 text-white flex flex-col justify-center items-center space-y-4 md:space-y-3 p-2 md:p-4">
            <div class="flex flex-col items-center text-center">
                <div
                    class="text-xl md:text-xl font-body font-bold [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)] md:text-white">
                    <!-- Helping Serve Chattanooga, TN & North Georgia -->
                    {{ siteData?.topheading || '' }}
                </div>
                <div class="text-base font-heading  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
                    <!-- Top-rated agent helping families buy & sell with confidence. -->
                    {{ siteData?.subheading || '' }}

                </div>
            </div>
            <div class="mt-4">
                <Button @click="isClicked = true" variant="outline"
                    class="font-body text-sm text-white bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white hover:border-none rounded-none">Book
                    a
                    Consultation</Button>
            </div>
        </div>


    </div>


    <!-- modal for showing booking form -->
    <Dialog v-model:open="isClicked">

        <DialogContent class="sm:max-w-[425px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
            <DialogHeader class="p-6 pb-0">
                <DialogTitle>Book Appointment</DialogTitle>
                <DialogDescription>
                    Please fill in your details to schedule an appointment.
                </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4 overflow-y-auto px-6">
                <form class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="name">Name</Label>
                        <Input id="name" required placeholder="Enter your full name" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" required placeholder="Enter your email" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="datetime">Preferred Date/Time</Label>
                        <Input id="datetime" type="datetime-local" required />
                    </div>

                    <div class="grid gap-2">
                        <Label for="message">Message (Optional)</Label>
                        <Textarea id="message" placeholder="Any special requests or notes?" rows="3" />
                    </div>
                </form>
            </div>
            <DialogFooter class="p-6 pt-0">
                <Button type="submit">
                    Book Appointment
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

</template>
