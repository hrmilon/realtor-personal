<script setup>
import { Button } from "@/components/ui/button"
import { useSiteStore } from "@/stores/siteStore";
import { computed } from "vue";

let siteStore = useSiteStore();
const siteData = computed(() => siteStore.getSiteData)
const hasError = computed(() => siteStore.hasError)
</script>

<template>
    <div class="container mx-auto">

        <div class="flex flex-col md:flex-row mt-4 md:mt-10 w-full ">
            <div class="md:w-1/2 mx-4">
                <!-- <img class="w-[500px] h-[520px] md:w-[490px] md:h-[500px]" src="/ballezzi.jpg" alt=""> -->
                <img class="w-[500px] h-[520px] md:w-[490px] md:h-[500px]"
                    :src="siteData?.image || 'https://images.unsplash.com/photo-1556888335-95371827d5fb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                    :alt="siteData?.name || 'Make Real Estate Easy'">

            </div>
            <div class="md:w-1/2 flex justify-center items-center">
                <div class="flex flex-col justify-center px-10">
                    <div class="font-heading text-xl">Meet {{ siteData?.name || '' }}</div>
                    <div class="font-body text-base">
                        {{ siteData?.name || '' }} brings extensive experience in sales, training, negotiating,
                        problem-solving, and customer service to the real estate industry. With a genuine passion, a
                        competitive spirit, and excellent communication skills, they are dedicated to delivering
                        exceptional results.
                        <br> <br>
                        Having developed a strong foundation in the real estate and sales industry, {{ siteData?.name ||
                            '' }} has always been driven by a desire to serve others, leverage their social skills, and
                        pursue success. Their commitment to making a meaningful impact is at the core of everything they
                        do.
                        <br>
                    </div>

                    <div class="mt-4">
                        <Button variant="outline"
                            class="font-body text-sm text-black bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white border-black rounded-none hover:border-none">
                            <RouterLink :to="{ name: 'about' }">Learn More</RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>