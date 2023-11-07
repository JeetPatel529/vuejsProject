<script>

import LeftSidebar from './LeftSidebar.vue'
import MainHeader from './MainHeader.vue'

export default {
    components: {
        MainHeader,
        LeftSidebar
    },
    created() {
        this.checkLogin();
    },
    methods: {
        checkLogin() {
            const storedUser = JSON.parse(localStorage.getItem("user_login"));
            const correctEmail = "jeet@gmail.com";
            const correctPassword = "pass";

            if (storedUser && storedUser.email === correctEmail && storedUser.password === correctPassword) {

            } else {

                this.$router.push({ name: "sign-in" });

            }
        },

    },
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