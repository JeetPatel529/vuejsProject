<script>
export default {
    props: {
        productData: Object,
        category: String,
    }
}
</script>


<template>
    <router-link
        :to="{ name: 'product', params: { productname: productData.product_name.replace(/\s/g, ''), productId: productData.id } }"
        class="product-card" v-if="productData.product_tag === category">
        <img :src="productData.product_img">
        <div class="product-details">
            <h5>{{ productData.product_name }}</h5>
            <p>Price ${{ productData.product_price[0].product_sellprice }}</p>
        </div>
    </router-link>
</template>