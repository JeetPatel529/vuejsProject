<script>

import axios from 'axios';


import CategoryRight from '../subcomponents/CategoryRight.vue';
import CategoryLeft from '../subcomponents/CategoryLeft.vue';

export default {
    components: {
        CategoryRight,
        CategoryLeft
    },
    data() {
        return {
            categories: [],
        };
    },
    created() {
        this.getCategory();
    },
    methods: {
        async getCategory() {
            const response = await axios.get(`http://localhost:3000/collection`);
            this.categories = response.data;
        }
    },
}
</script>


<template>
    <section class="w-100 border-b container herosection">
        <div class="grid-wrapper-left">
            <div class="sticky">
                <div class="height-full flex-center">
                    <div class="content text-center">
                        <h1>Choose a Сategory</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-wrapper-right">

            <div v-for="(category, index) in categories" :key="index"
                :class="{ 'border-b': index !== categories.length - 1 }">

                <CategoryRight :category="category" :index="index" />

                <CategoryLeft :category="category" :index="index" />

            </div>

        </div>
    </section>
</template>


<style scoped>
.border-b {
    border-bottom: 1px solid #000;
}
</style>