<script setup>
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import SlugHome from '@/views/SlugHome.vue';

import { RouterLink } from 'vue-router';
import HeroSection from '@/components/custom/HeroSection.vue';
import BioData from '@/components/custom/BioData.vue';
import ListingSection from '@/components/custom/ListingSection.vue';
import SocialSection from '@/components/custom/SocialSection.vue';
import NewsLetter from '@/components/custom/NewsLetter.vue';
import Faq from '@/components/custom/Faq.vue';
import TestimonialSection from '@/components/custom/TestimonialSection.vue';
import Navigation from '@/components/custom/nav/Navigation.vue';
import Footer from '@/components/custom/nav/Footer.vue';

import { useSiteStore } from '@/stores/siteStore';

const route = useRoute();
const slug = route.params.slug;
const siteStore = useSiteStore();
const siteData = computed(() => siteStore.getSiteData)
const hasError = computed(() => siteStore.hasError)


onMounted(() => {
    siteStore.fetchSiteData(slug);
});
</script>
<template>
    <!-- this page act like app.vue -->


    <!-- if site doesn't found through slug -->
    <div class="mt-10">
        <div v-if="hasError">
            <div class="text-center mt-10">
                <h1 class="text-4xl font-bold text-red-500">Oops! You seem lost...</h1>
                <p class="text-lg text-gray-700 mt-4">This isn't the page you're looking for. 🛸</p>
                <RouterLink to="/"
                    class="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
                    Take me home!
                </RouterLink>
            </div>
        </div>

        <!-- site has found render the content -->
        <div v-else>
            <header>
                <div class="wrapper">
                    <Navigation />
                </div>
            </header>
            <RouterView />
            <Footer />
        </div>
    </div>

</template>
