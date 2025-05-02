<script setup>
import { Button } from "@/components/ui/button"

</script>

<template>
    <div class="container mx-auto">

        <div class="flex flex-col md:flex-row md:mt-10 w-full ">
            <div class="md:w-1/2 mx-4">
                <img src="/ballezzi.jpg" alt="">
            </div>
            <div class="md:w-1/2 flex justify-center items-center">
                <div class="flex flex-col justify-center px-10">
                    <div class="font-heading text-xl">Meet Ballezzi</div>
                    <div class="font-body text-base">
                        Ashley Ballezzi has 6+ years of sales, training, negotiating, problem solving, and customer
                        service
                        experience into the real estate industry. She brings her genuine passion, competitive nature,
                        and
                        great communication skills to the table.
                        <br> <br>
                        Growing up in the real estate / sales industry at such a young age, Ashley always new she would
                        find
                        herself in a career that not only served others, but allowed her to use her strong social skills
                        and
                        her passion for success to become something bigger that would allow her to make a difference.
                        <br>
                    </div>

                    <div class="mt-4">
                        <Button variant="outline"
                            class="font-body text-sm text-black bg-transparent w-[200px] h-16 hover:bg-primary hover:text-white border-black rounded-none hover:border-none">
                            <RouterLink to="/about">Learn More</RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>