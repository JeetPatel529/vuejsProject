<script>

import axios from 'axios';

import LayoutWrapper from '../components/LayoutWrapper.vue';
import ProductBox from '../subcomponents/ProductBox.vue';

export default {

    components: {
        LayoutWrapper,
        ProductBox
    },
    data() {
        return {
            productdata: [],
        }
    },
    created() {
        this.getProductData();
    },
    methods: {
        async getProductData() {
            const response = await axios.get(`http://localhost:3000/product-list`)
            this.productdata = response.data;
        }


    }

}
</script>

<template>
    <LayoutWrapper>

        <div class="bg-white rounded-lg border border-solid border-black1 py-6">

            <div class="pb-6 px-8 border-solid border-b border-black1">

                <div class="flex items-center justify-between w-full">
                    <h4 class="text-2xl font-semibold">Product List</h4>
                </div>

            </div>


            <div class="py-6 px-8">

                <ul class="grid grid-cols-2 gap-4">


                    <ProductBox v-for="(data, index) in productdata" :key="index" :data="data" />


                </ul>

            </div>


            <div class="pt-6 px-8 border-solid border-t border-black1"></div>

        </div>



    </LayoutWrapper>
</template>
