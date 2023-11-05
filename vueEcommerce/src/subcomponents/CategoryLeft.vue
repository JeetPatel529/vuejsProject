<script>
export default {
    props: {
        category: Object,
        index: Number,
    }
}
</script>

<template>
    <div class="shop-card-category" v-if="(index + 1) % 2 === 0">
        <router-link :to="{ name: 'productlist', params: { productcategorey: category.value } }" class="card-category-img">
            <img :src="category.image">
        </router-link>
        <div class="card-category">
            <div class="content-card">
                <h3 class="text-center">{{ category.label }}</h3>
                <router-link :to="{ name: 'productlist', params: { productcategorey: category.value } }"
                    class="link link-icon-left">
                    <p> Shop now </p>
                    <img
                        src="https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a2b0c7cd074ceda248eb82_arrow-right.svg">
                </router-link>
            </div>
        </div>
    </div>
</template>