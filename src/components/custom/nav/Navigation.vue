<script setup lang="ts">
import { HamIcon, Menu, X } from 'lucide-vue-next';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { ref } from 'vue';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Listing', path: '/listing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Home Valuation', path: '#' },
    { name: 'Book a Meeting', path: '#' }
]

const dialogOpen = ref(false);

const toggleDialog = () => {
    dialogOpen.value = !dialogOpen.value;
}

const closeDialog = () => {
    dialogOpen.value = false;
}
</script>

<template>
    <div class="w-full mx-auto fixed top-0 z-20 bg-white">
        <div class="hidden md:flex justify-between mx-5 py-2">
            <div class="font-heading font-bold text-2xl">
                <RouterLink active-class="active" to="/">
                    Ashley Ballezzi
                </RouterLink>

            </div>
            <div>
                <NavigationMenu class="font-heading">
                    <NavigationMenuList>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="" class="hover:underline hover:bg-white"
                                :class="navigationMenuTriggerStyle()">
                                <RouterLink active-class="active" to="/listing">
                                    Listings
                                </RouterLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink class="hover:underline hover:bg-white"
                                :class="navigationMenuTriggerStyle()">
                                <RouterLink active-class="active" to="/contact">
                                    Let's Connect
                                </RouterLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/docs/introduction" class="hover:underline hover:bg-white"
                                :class="navigationMenuTriggerStyle()">
                                <a href="tel:+12 38289779"> 📞 +12 345678</a>

                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>

        </div>
    </div>

    <div class="fixed bg-white w-full top-0 z-50">
        <div class="md:hidden flex justify-between px-4 py-2">
            <div class="font-heading font-bold">
                <RouterLink active-class="active" to="/">
                    Ashley Ballezzi
                </RouterLink>
            </div>

            <div>
                <DropdownMenu :open="dialogOpen" @update:open="dialogOpen = $event">
                    <DropdownMenuTrigger class="outline-none" @click="toggleDialog">
                        <Menu class="h-6 w-6" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent class=" h-screen bg-black/95 mt-2 font-body rounded-none border-none">
                        <div class="flex justify-end p-4">
                            <X class="h-6 w-6 text-gray-300 hover:text-gray-100 cursor-pointer" @click="closeDialog" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <DropdownMenuItem class="border-none focus:bg-transparent" v-for="item in navItems"
                                :key="item.path">
                                <RouterLink :to="item.path"
                                    class="w-full text-base text-gray-300 hover:text-gray-100 py-3 px-6">
                                    {{ item.name }}
                                </RouterLink>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </div>
</template>