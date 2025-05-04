import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ShadcnView from '@/views/ShadcnView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    // {
    //   path: '/shadcn',
    //   name: 'shadcn',
    //   component: () => import('../views/ShadcnView.vue'),
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactView.vue'),
    // },
    // {
    //   path: '/listing',
    //   name: 'listing',
    //   component: () => import('../views/ListingView.vue'),
    // },


    //auto facing and matching through the slug
    {
      path: '/site',
      component: () => import('../views/SitePageView.vue'),
      children: [
        {
          path: ':slug',
          name: 'homeSlug',
          component: () => import('../views/SlugHome.vue'),
        },
        {
          path: ':slug/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: ':slug/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue'),
        },
        {
          path: ':slug/listing',
          name: 'listing',
          component: () => import('../views/ListingView.vue'),
        }
      ]
    }

  ],
})

export default router
