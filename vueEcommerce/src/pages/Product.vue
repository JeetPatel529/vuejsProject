<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            productData: "",
            productId: "",
        };
    },
    created() {
        this.getProductData();
        this.productId = this.$route.params.productId;
        console.log(this.productId);
    },
    methods: {
        async getProductData() {
            const response = await axios.get(`http://localhost:3000/product-list`);
            this.productData = response.data;
        }
    },
    components: { RouterLink }
}
</script>


<template>
    <section v-for="(data, index) in productData" :key="index">
        <div class="w-100 container  product-page" v-if="data.id == productId">
            <div class="grid-wrapper-left border-b">
                <div class="product-img">
                    <img :src="data.product_img">
                </div>
            </div>
            <div class="grid-wrapper-right border-b">
                <div class="content-small">
                    <div class="product-category-name">
                        <router-link to="/" class="overline">Fresh Flowers</router-link>
                        <b class="overline">/</b>
                        <p class="overline">{{ data.product_name }}</p>
                    </div>
                    <div class="product-name">
                        <h3>{{ data.product_name }}</h3>
                        <span class="overline">-</span>
                        <h3>${{ data.product_price[0].product_sellprice }}</h3>
                    </div>
                    <p class="product-description">{{ data.product_details }}</p>

                    <div class="product-quantity">
                        <p class="subtitle">Quantity</p>
                        <div class="quantity-box">
                            <button class="decrement">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                                    <path d="M5.25 12.75v-1.5h13.5v1.5Z"></path>
                                </svg>
                            </button>
                            <input type="number" value="1" max="99">
                            <button class="increment">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                                    <path d="M11.25 18.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>


                    <p class="subtitle">Price options</p>
                    <form actions="#">
                        <div class="radio-button">
                            <input type="radio" id="radio1" checked="">
                            <label for="radio1">
                                <p>One time purchase. Price</p>
                                <p>$55</p>
                            </label>
                        </div>
                        <div class="radio-button">
                            <input type="radio" id="radio2">
                            <label for="radio2">
                                <p>Subscribe now, and save 25% on this order.</p>
                            </label>
                        </div>
                    </form>


                    <button class="button w-100 link openDrawer">add to basket</button>


                </div>
            </div>
        </div>
    </section>
</template>