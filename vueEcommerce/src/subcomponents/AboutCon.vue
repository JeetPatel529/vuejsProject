<script>
export default {
    props: {
        title: String,
        subTitle: String,
    }
}
</script>


<template>
    <div class="sticky content">
        <h3 class="title">{{ title }}</h3>
        <p class="sub-title">{{ subTitle }}</p>
    </div>
</template>