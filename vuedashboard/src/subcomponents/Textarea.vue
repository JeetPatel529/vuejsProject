<script>


export default {
    props: {
        placeholder: String,
        id: String,
        name: String,
        value: String,
    },


    data() {
        return {
            // value: ""
        }
    },


}





</script>

<template>
    <textarea :name="name" :placeholder="placeholder" :id="id" :value="value"
        class="w-full border border-solid border-black1 rounded-md px-4 py-2 outline-none text-md color-main placeholder:capitalize focus:border-black min-h-[150px] resize-none"></textarea>
</template>