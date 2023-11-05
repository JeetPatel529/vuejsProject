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
            valid: true,
            error: '',
        };
    },

}





</script>

<template>
    <input type="text"
        class="w-full border border-solid border-black1 rounded-md px-4 py-2 outline-none text-md color-main placeholder:capitalize placeholder:font-normal focus:border-black placeholder:text-[rgba(28, 28, 28, 0.40)] "
        :placeholder="placeholder" :id="id" :name="name" :value="value" />
</template>