<script>

export default {

    props: {
        user_name: String,
        user_email: String,
        user_phonenumber: Number,
        user_pic: String,
    }

}


</script>

<template>
    <li class="w-full border border-solid border-black1 bg-white px-6 py-2.5 rounded-xl">

        <div class="flex items-start justify-between w-full">

            <div class="flex items-center gap-4">

                <div class="w-12 h-12 rounded-full border border-solid border-black1 p-1">
                    <img :src="user_pic" class="w-full h-full rounded-full object-cover">
                </div>

                <div class="space-y-0.5">
                    <h6>{{ user_name }}</h6>
                    <a :href="'mailto:' + user_email" class="color-main text-base cursor-pointer">{{ user_email }}</a>
                </div>

            </div>


            <div>
                <a :href="'tel:' + user_phonenumber" class="color-main text-base cursor-pointer">{{ user_phonenumber }}</a>
            </div>

        </div>

    </li>
</template>