import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        siteData: null,
        isError: false,
    }),
    actions: {
        async fetchSiteData(slug) {
            this.isError = false; // Reset error state before fetching
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/site/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch site data');
                }
                this.siteData = await response.json();
                console.log(this.siteData);
                
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
