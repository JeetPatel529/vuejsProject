<script>

import axios from 'axios';

import LayoutWrapper from '../components/LayoutWrapper.vue';
import ProductBox from '../subcomponents/ProductBox.vue';
import Pagination from '../subcomponents/Pagination.vue';

export default {

    components: {
        LayoutWrapper,
        ProductBox,
        Pagination
    },
    data() {
        return {
            productdata: [],
            currentPage: 1,
            itemsPerPage: 6,
            totalPages: 0
        }
    },
    created() {
        this.getProductData();
    },
    methods: {

        async getProductData(pageNumber = 1) {
            const response = await axios.get(`https://jeetpatel529.github.io/vuejsProject/json/product_data.json`, {
                params: {
                    _page: pageNumber,
                    _limit: this.itemsPerPage
                }
            });

            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.itemsPerPage);

            this.productdata = response.data.product_list;

            console.log(response.data.product_list)

            this.currentPage = pageNumber;
        },

        updatePage(newPage) {
            this.currentPage = newPage;
            this.getProductData(newPage);
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


            <div class="pt-6 px-8 border-solid border-t border-black1">

                <Pagination :currentPage="currentPage" :totalPages="totalPages" v-on:pagechange="updatePage" />

            </div>

        </div>



    </LayoutWrapper>
</template>
