<script>



export default {
    data() {
        return {
            adminEmail: "",
            adminPassword: "",
        }
    },
    created() {
        this.checkLogin()
    },
    methods: {

        checkLogin() {
            const storedUser = JSON.parse(localStorage.getItem("user_login"));
            const correctEmail = "jeet@gmail.com";
            const correctPassword = "pass";

            if (storedUser && storedUser.email === correctEmail && storedUser.password === correctPassword) {
                this.$router.push({ name: "home" });
            }
        },

        login() {

            const correctEmail = "jeet@gmail.com";
            const correctPassword = "pass";

            if (this.adminEmail === correctEmail && this.adminPassword === correctPassword) {

                localStorage.setItem("user_login", JSON.stringify({ email: this.adminEmail, password: this.adminPassword }));

                this.$router.push({ name: "home" });

            } else {

                alert("plz enter correct email or password")

            }

        },

    },
}
</script>

<template>
    <div>

        <main
            class="w-full h-[100dvh] overflow-hidden bg-cover relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black/10"
            style="background-image: url('https://images.unsplash.com/photo-1695837410218-8ab4b7dd7da6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80');">


            <div
                class="md:max-w-[75%] max-w-[100%] h-full md:mx-auto w-full relative z-40 flex md:items-center items-end lg:justify-end justify-center">

                <div
                    class="md:p-9 sm:p-6 p-4  bg-white/70 md:rounded-md backdrop-blur-sm space-y-8 w-full md:max-w-lg rounded-t-2xl">

                    <div class="text-center space-y-1">
                        <h4 class="text-2xl">Sign In</h4>
                        <p>Your Social Campaigns</p>
                    </div>

                    <form @submit.prevent="login()" class="w-full block space-y-6">
                        <input type="email" v-model="adminEmail"
                            class="w-full px-3 text-md py-2 rounded bg-[#1c1c1c0d] border border-transparent focus:outline-none"
                            placeholder="Email">
                        <div class="space-y-3">
                            <input type="password" v-model="adminPassword"
                                class="w-full px-3 text-md py-2 rounded bg-[#1c1c1c0d] border border-transparent focus:outline-none"
                                placeholder="password">
                            <p class="block text-right cursor-pointer">Forgot Password?</p>
                        </div>
                        <button type="submit"
                            class="w-full text-center rounded-md px-4 py-2.5 bg-[#1C1C1C] text-white text-lg">Sign
                            In</button>
                    </form>



                </div>


            </div>


        </main>

    </div>
</template>