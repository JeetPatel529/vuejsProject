<script>

import LeftSidebar from './LeftSidebar.vue'
import MainHeader from './MainHeader.vue'

export default {
    components: {
        MainHeader,
        LeftSidebar
    }
}


</script>


<template>
    <img src="" alt="">

    <main class="w-full flex h-[100dvh] overflow-hidden  items-stretch bg-white dark:bg-[#1C1C1C]">
        <LeftSidebar />
        <section class="w-full main_Content h-full">
            <MainHeader />
            <div class="w-full h-full overflow-auto pt-4 pb-20  bg-white1">
                <div class="max-w-[1200px] mx-auto px-2">
                    <slot></slot>
                </div>
            </div>
        </section>
    </main>
</template>