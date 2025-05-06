import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
const apiEndpoint = import.meta.env.VITE_BACKEND;

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        siteData: null,
        isError: false,
    }),
    actions: {
        async fetchSiteData(slug) {
            this.isError = false; // Reset error state before fetching
            try {
                const response = await fetch(`${apiEndpoint}/api/site/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch site data');
                }
                this.siteData = await response.json();
                // console.log(this.siteData);

            } catch (error) {
                this.isError = true;
            }
        },
    },
    getters: {
        hasSiteData: (state) => Boolean(state.siteData),
        getSiteData: (state) => state.siteData,
        hasError: (state) => state.isError
    },
});
