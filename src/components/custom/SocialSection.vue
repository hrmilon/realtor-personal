<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Skeleton } from "@/components/ui/skeleton"
import { useSiteStore } from '@/stores/siteStore';

// TODO: Add a loading state to the skeletons

let stoppedLoading = ref(true);
const route = useRoute();

const loadInstagramEmbed = async () => {
    // Remove existing embed.js if present
    const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (existingScript) {
        existingScript.remove();
    }

    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
            // Wait for DOM update and then process embeds
            setTimeout(() => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
                resolve();
            }, 300);
        };
        document.body.appendChild(script);
    });
};

onMounted(async () => {
     loadInstagramEmbed();
});

// Re-run embed script on route changes with delay
watch(() => route.path, async () => {
    await loadInstagramEmbed();
});


let siteStore = useSiteStore();
const siteData = computed(() => siteStore.getSiteData)
const hasError = computed(() => siteStore.hasError)
</script>

<template>

    <div class="container mx-auto py-10">
        <div class="font-heading  text-xl items-center justify-center flex mb-3">Featured on Social</div>

        <!-- NOT FUCNTIONAL -->
        <div v-if="stoppedLoading = false"
            class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4">
            <div class="flex flex-col space-y-3">
                <Skeleton class="h-[125px] w-[250px] rounded-xl" />
                <div class="space-y-2">
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                </div>
            </div>

            <div class="flex flex-col space-y-3">
                <Skeleton class="h-[125px] w-[250px] rounded-xl" />
                <div class="space-y-2">
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                </div>
            </div>
        </div>

        <div v-else class="flex flex-col md:flex-row justify-center items-center md:space-x-4">
            <div>
                <blockquote class="instagram-media" :data-instgrm-permalink="siteData?.reels" data-instgrm-version="14"
                    style="width:100%; max-width:400px; margin:auto;">
                </blockquote>
            </div>

            <div>
                <blockquote class="instagram-media" :data-instgrm-permalink="siteData?.reels"
                    data-instgrm-version="14" style="width:100%; max-width:400px; margin:auto;">
                </blockquote>
            </div>
        </div>
    </div>
</template>