<script>
import axios from 'axios';

import Users from '../subcomponents/user/Users.vue'
import LayoutWrapper from '../components/LayoutWrapper.vue';

const url = `${import.meta.env.API_URL}`;

export default {

    components: {
        Users,
        LayoutWrapper
    },

    data() {
        return {
            user_list: [],
        }
    },

    created() {
        this.userData();
    },

    methods: {

        async userData() {
            try {
                const response = await axios.get(`https://jeetpatel529.github.io/vuejsProject/json/user.json`);

                this.user_list = response.data.user;

            } catch (error) {
                console.error(error);
            }
        }


    },

}




</script>

<template>
    <LayoutWrapper>
        <ul class="grid grid-cols-2 gap-x-7 gap-y-4">

            <Users :user_name="user.user_name" :user_email="user.user_email" :user_phonenumber="user.user_phonenumber"
                :user_pic="user.user_pic" v-for="user in user_list" :key="user.id" />

        </ul>
    </LayoutWrapper>
</template>