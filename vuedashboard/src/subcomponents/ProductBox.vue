<script>
export default {
    props: {
        data: Object,
    }
}
</script>


<template>
    <li class="border border-solid border-black1 rounded-md overflow-hidden group cursor-pointer">
        <div class="relative pt-[56%]">
            <img :src="data.product_img" class="absolute inset-0 w-full h-full object-cover rounded-md">
            <div class="absolute bottom-0 left-0 border-t border-r border-solid border-black1 z-20">
                <div class="bg-white px-4 py-1 flex items-center justify-center rounded-tr-md">
                    <p class="text-lg">{{ data.product_tag.replace(/[_/]/g, ' ') }}</p>
                </div>
            </div>
            <div class="absolute top-0 right-0 border-b border-l border-solid border-black1 z-20">
                <div class="bg-white px-6 py-1 flex items-center justify-center rounded-bl-md">
                    <p class="text-lg">${{ data.product_price[0].product_sellprice }}</p>
                </div>
            </div>
            <div class="absolute top-0 -left-[250px]  z-20  group-hover:left-0 transition-all ease-in-out duration-700">
                <h4 class="text-white font-semibold text-2xl px-2 py-0.5">{{ data.product_name }}
                </h4>
            </div>
            <div class="absolute inset-0 w-full h-full bg-black bg-opacity-10 group-hover:bg-opacity-60 transition-all">
            </div>
        </div>
    </li>
</template>