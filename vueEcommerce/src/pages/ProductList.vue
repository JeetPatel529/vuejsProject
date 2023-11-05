<script>
import axios from 'axios';
import ProductCard from '../subcomponents/ProductCard.vue';

export default {
    components: { ProductCard },
    data() {
        return {
            productList: [],
            category: ""
        }
    },
    created() {
        this.category = this.$route.params.productcategorey
        this.getProductData()
    },
    methods: {
        formatCategoryName(category) {
            return category.replace(/_/g, ' ');
        },
        async getProductData() {
            const response = await axios.get(`http://localhost:8000/product-list`);
            this.productList = response.data;
        },
    },
    computed: {
        filteredProductList() {
            return this.productList.filter(productData => productData.product_tag === this.category);
        },
    },
}
</script>


<template>
    <section class="w-100 border-b container herosection product-category product_shop_page">
        <div class="grid-wrapper-left">
            <div class="sticky">
                <div class="height-full flex-center">
                    <div class="content text-center">
                        <h1> {{ formatCategoryName($route.params.productcategorey) }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-wrapper-right">
            <div class="product-list-grid" :class="{ 'no-data_class': filteredProductList.length === 0 }">
                <template v-if="filteredProductList.length === 0">
                    <div :class="{ 'no-data-contain_class': filteredProductList.length === 0 }">
                        <h2>Oops!</h2>
                        <router-link to="/categories" class="button">More Category</router-link>
                    </div>
                </template>
                <template v-else>
                    <ProductCard v-for="(productData, index) in productList" :key="index" :productData="productData"
                        :category="category" />
                </template>
            </div>
        </div>
    </section>
</template>


<style scoped>
.no-data_class {
    height: 100%;
    grid-template-rows: none;
}

.no-data-contain_class {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: span 2 / span 2;
    gap: 26px;
}
</style>