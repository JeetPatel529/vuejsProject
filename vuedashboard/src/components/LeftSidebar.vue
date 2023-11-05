<script>
    export default {
        data() {
            return {
                recentlyOpened: [],
                showSubLinks: -1,
            };
        },
        created() {
            const savedPages = localStorage.getItem('recentlyOpenedPages')
            if (savedPages) {
                this.recentlyOpened = JSON.parse(savedPages)
            }

            this.$router.afterEach((to, from) => {

                this.recentlyOpened.push({ name: to.name, path: to.path })

                if (this.recentlyOpened.length > 3) {
                    this.recentlyOpened.shift()
                }

                localStorage.setItem('recentlyOpenedPages', JSON.stringify(this.recentlyOpened))
            })
        },
        methods: {
            toggleDropdown(index) {
                if (this.showSubLinks === index) {
                    this.showSubLinks = -1;
                } else {
                    this.showSubLinks = index;
                }
            },
        },
    }
</script>

<template>
    <aside class="sidebars leftSideBar leftSideBar_active">

        <div class="w-full h-full flex flex-col  justify-between space-y-12">

            <div class="flex flex-col items-start space-y-6">

                <div class="w-full p-1 flex items-center space-x-3">

                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                        class="w-10 h-10 rounded-full">

                    <p class="text-lg ">Jeet Patel</p>

                </div>

                <div class="block w-full">

                    <div class="flex items-center w-full">
                        <p class="cursor-pointer px-1.5 py-1  color-black2 color-white2">
                            Favorites
                        </p>
                    </div>

                    <ul class="list-disc mt-2 pl-8 space-y-1 Favorites-pages_section">
                        <li>
                            <a href="#" class="block text-md">Overview</a>
                        </li>
                        <li>
                            <a href="#" class="block text-md">Projects</a>
                        </li>
                    </ul>


                </div>

                <div class="block w-full">


                    <p class="cursor-pointer px-1.5 py-1 color-black2 color-white2 mb-1">Dashboards</p>

                    <ul class="sidebar_navBar space-y-1">
                        <li>
                            <router-link to="/" active-class="nav_link_active"
                                class="flex items-center gap-1.5 text-md px-1 py-1 rounded-lg  nav_link">
                                <div class="w-4 h-6"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M7.50002 2.92969V8.55469L2.62502 11.3672C2.29959 9.61066 2.61183 7.79565 3.50554 6.24885C4.39925 4.70205 5.81572 3.52504 7.50002 2.92969Z"
                                        class="fill-[#1C1C1C] dark:fill-white" fill-opacity="0.1" />
                                    <path
                                        d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM17.0578 5.97812C17.0508 5.96406 17.0437 5.94922 17.0351 5.93516C17.0266 5.92109 17.0195 5.90938 17.0109 5.89688C16.2946 4.67328 15.2706 3.65834 14.0408 2.95282C12.8109 2.24729 11.4179 1.87572 9.99999 1.875C9.83423 1.875 9.67526 1.94085 9.55805 2.05806C9.44084 2.17527 9.37499 2.33424 9.37499 2.5V9.67422L3.21796 13.2602C3.14651 13.3016 3.08398 13.3567 3.03398 13.4225C2.98398 13.4882 2.9475 13.5632 2.92665 13.6431C2.9058 13.723 2.901 13.8062 2.91251 13.888C2.92403 13.9698 2.95164 14.0485 2.99374 14.1195C3.89708 15.6578 5.28156 16.856 6.93353 17.5293C8.58549 18.2025 10.4131 18.3134 12.1344 17.8448C13.8556 17.3762 15.3748 16.3541 16.4575 14.9364C17.5401 13.5186 18.1261 11.7839 18.125 10C18.1268 8.58916 17.7588 7.20247 17.0578 5.97812ZM10.625 3.15313C11.6162 3.24437 12.5759 3.54965 13.4376 4.04791C14.2994 4.54617 15.0428 5.22552 15.6164 6.03906L10.625 8.94609V3.15313ZM9.99999 16.875C8.90891 16.8722 7.834 16.6111 6.86323 16.113C5.89247 15.6149 5.05345 14.894 4.41484 14.0094L10.3055 10.5789L10.3226 10.568L16.2422 7.12031C16.7253 8.16777 16.9372 9.31996 16.8582 10.4708C16.7792 11.6216 16.4119 12.734 15.7902 13.7057C15.1684 14.6773 14.3122 15.4768 13.3003 16.0307C12.2885 16.5845 11.1535 16.8749 9.99999 16.875Z"
                                        class="fill-[#1C1C1C] dark:fill-white" />
                                </svg>
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/user-list" active-class="nav_link_active"
                                class="flex items-center gap-1.5 text-md px-1 py-1 rounded-lg nav_link">
                                <div class="w-4 h-6"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14"
                                    fill="none">
                                    <path
                                        d="M15.875 2.625H9.20859L7.04141 1C6.82472 0.838324 6.56176 0.750671 6.29141 0.75H2.125C1.79348 0.75 1.47554 0.881696 1.24112 1.11612C1.0067 1.35054 0.875 1.66848 0.875 2V12.625C0.875 12.9565 1.0067 13.2745 1.24112 13.5089C1.47554 13.7433 1.79348 13.875 2.125 13.875H15.875C16.2065 13.875 16.5245 13.7433 16.7589 13.5089C16.9933 13.2745 17.125 12.9565 17.125 12.625V3.875C17.125 3.54348 16.9933 3.22554 16.7589 2.99112C16.5245 2.7567 16.2065 2.625 15.875 2.625ZM2.125 2H6.29141L7.95859 3.25L6.29141 4.5H2.125V2ZM15.875 12.625H2.125V5.75H6.29141C6.56176 5.74933 6.82472 5.66168 7.04141 5.5L9.20859 3.875H15.875V12.625Z"
                                        class="fill-[#1C1C1C] dark:fill-white" />
                                </svg>
                                User List
                            </router-link>
                        </li>
                        <li>
                            <div class="flex items-center gap-1.5 text-md px-1 py-1 rounded-lg cursor-pointer"
                                @click="toggleDropdown(1)">
                                <div class="w-4 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        :class="{ 'rotate-90' : showSubLinks === 1 }" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                                            class="fill-[#1C1C1C] dark:fill-white" fill-opacity="0.2" />
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.5 4.375V6.25H2.5V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375Z"
                                        class="fill-[#1C1C1C] dark:fill-white" fill-opacity="0.1" />
                                    <path
                                        d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM16.875 4.375V5.625H3.125V4.375H16.875ZM16.875 15.625H3.125V6.875H16.875V15.625ZM13.75 8.75C13.75 9.74456 13.3549 10.6984 12.6517 11.4017C11.9484 12.1049 10.9946 12.5 10 12.5C9.00544 12.5 8.05161 12.1049 7.34835 11.4017C6.64509 10.6984 6.25 9.74456 6.25 8.75C6.25 8.58424 6.31585 8.42527 6.43306 8.30806C6.55027 8.19085 6.70924 8.125 6.875 8.125C7.04076 8.125 7.19973 8.19085 7.31694 8.30806C7.43415 8.42527 7.5 8.58424 7.5 8.75C7.5 9.41304 7.76339 10.0489 8.23223 10.5178C8.70107 10.9866 9.33696 11.25 10 11.25C10.663 11.25 11.2989 10.9866 11.7678 10.5178C12.2366 10.0489 12.5 9.41304 12.5 8.75C12.5 8.58424 12.5658 8.42527 12.6831 8.30806C12.8003 8.19085 12.9592 8.125 13.125 8.125C13.2908 8.125 13.4497 8.19085 13.5669 8.30806C13.6842 8.42527 13.75 8.58424 13.75 8.75Z"
                                        class="fill-[#1C1C1C] dark:fill-white" />
                                </svg>
                                Product Pages
                            </div>
                            <div v-if="showSubLinks === 1">
                                <ul class="pl-12 space-y-1">
                                    <li>
                                        <router-link to="/product-list" active-class="nav_link_active"
                                            class="flex items-center gap-1.5 text-md px-2 py-1 rounded-lg nav_link">
                                            Product List
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/add-product" active-class="nav_link_active"
                                            class="flex items-center gap-1.5 text-md px-2 py-1 rounded-lg nav_link">
                                            Add Product
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>




                </div>


            </div>






        </div>



    </aside>
</template>