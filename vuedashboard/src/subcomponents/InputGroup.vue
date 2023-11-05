<script>



export default {
    props: {
        placeholder: String,
        id: String,
        name: String,
        leftsideicon: Object,
        rightsideicon: String,
    },


    data() {
        return {
            // value: ""
        }
    },


}





</script>

<template>
    <div class="w-full border border-solid border-black1 rounded-md overflow-hidden flex items-center">
        <div class="w-fit px-2 py-2 flex items-center justify-center">
            <img :src="leftsideicon">
        </div>
        <input type="text"
            class="w-full px-2 py-2 outline-none text-md color-main placeholder:capitalize focus:border-black"
            :placeholder="placeholder" :id="id" :name="name" />
        <div class="w-fit px-2 py-2 flex items-center justify-center"> {{ rightsideicon }} </div>
    </div>
</template>