<script>

export default {

    props: {
        label: String,
        requiredText: String,
    }
}






</script>

<template>
    <label :for="label" class="text-base capitalize text-black block cursor-pointer pl-1 font-medium ">{{ label }} <span
            class="text-rose-600 text-base"> {{ requiredText }} </span>
    </label>
</template>