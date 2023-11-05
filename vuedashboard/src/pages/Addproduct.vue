<script>

import axios from 'axios';


import Input from '../subcomponents/Input.vue';
import Label from '../subcomponents/Label.vue';
import TextareaBox from '../subcomponents/Textarea.vue';
import InputGroup from '../subcomponents/InputGroup.vue';
import Select from '../subcomponents/Select.vue';
import LayoutWrapper from '../components/LayoutWrapper.vue';

export default {

    components: {
        Input,
        Label,
        TextareaBox,
        InputGroup,
        LayoutWrapper,
        Select,
    },


    data() {
        return {
            dollarIcon: ('../assets/icons/dollar.svg'),
            productName: "",
            discountPrice: "",
            sellingPrice: "",
            addDiscount: false,
            productDetails: "",
            selectedOptionVal: "",
            selectedVal: "",
            productImg: "",
            ProductTags: [],
        }
    },


    created() {
        this.fetchProductCollection();
    },

    methods: {

        async fetchProductCollection() {
            try {
                const response = await axios.get(`http://localhost:8000/collection`);

                this.ProductTags = response.data;

            } catch (error) {
                console.error(error);
            }
        },

        onOptionSelected(value) {
            this.selectedOptionVal = value;
        },

        async getdata() {

            try {

                const data = await axios.post(`http://localhost:3000/product-list`, {
                    "product_name": this.productName,
                    "product_img": this.productImg,
                    "product_price": [
                        {
                            "product_sellprice": this.sellingPrice,
                            "product_disprice": this.discountPrice
                        }
                    ],
                    "product_details": this.productDetails,
                    "product_tag": this.selectedOptionVal
                });
                if (data.status === 201) {
                    
                }
                else {

                }

            } catch (error) {
                console.error('Error:', error);
            }
        }



    }

}

</script>

<template>
    <LayoutWrapper>
        <div class="bg-white border border-solid border-black1 py-12 rounded-lg px-6">
            <div class="space-y-12">

                <div class="space-y-2 max-w-md">
                    <h2 class="text-2xl font-bold capitalize color-main">Add product</h2>
                    <p class="text-base color-main">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim
                        esse
                        similique!
                    </p>
                </div>

                <form class="block space-y-6" @submit.prevent="getdata()">

                    <div class="space-y-1.5">
                        <Label label="Product img url" requiredText="" />
                        <Input placeholder="enter product img Url" id="Product img url" name="Product img url"
                            :value="productImg" @input="event => productImg = event.target.value" />
                    </div>

                    <div class="grid grid-cols-2 gap-x-7 gap-y-6">

                        <div class="space-y-1.5">
                            <Label label="Product Name" requiredText="*" />
                            <Input placeholder="enter product name" id="Product Name" name="Product Name"
                                :value="productName" @input="event => productName = event.target.value" />
                        </div>

                        <div class="space-y-1.5"></div>

                        <div class="space-x-1.5 grid grid-cols-1" :class="{ 'grid-cols-2': addDiscount == true }">

                            <div class="space-y-1.5" v-if="addDiscount">

                                <Label label="Discount Price" requiredText="*" />

                                <div class="flex items-center border border-solid border-black1 rounded-md">

                                    <div class="px-2 h-full flex items-center justify-center">
                                        <img src="../assets/icons/dollar.svg">
                                    </div>

                                    <Input type="number" placeholder="enter Price" id="Discount Price" name="Discount Price"
                                        :value="discountPrice" class="border-none px-[8px]"
                                        @input="event => discountPrice = event.target.value" />

                                    <div class="px-2 h-full flex items-center justify-center cursor-pointer"
                                        title="Delete Discount Price" @click="addDiscount = false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none">
                                            <path d="M18.75 5.25L5.25 18.75" stroke="#191C1F" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.75 18.75L5.25 5.25" stroke="#191C1F" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                            </div>

                            <div class="space-y-1.5">

                                <Label label="Selling Price" requiredText="*" />

                                <div class="flex items-center border border-solid border-black1 rounded-md">

                                    <div class="px-2 h-full flex items-center justify-center">
                                        <img src="../assets/icons/dollar.svg">
                                    </div>

                                    <Input type="number" placeholder="enter Price" id="Selling Price" name="Selling Price"
                                        :value="sellingPrice" class="border-none px-[8px]"
                                        @input="event => sellingPrice = event.target.value" />

                                    <div class="px-2 h-full flex items-center justify-center cursor-pointer"
                                        title="Add Discount Price" @click="addDiscount = true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none">
                                            <path d="M18.75 5.25L5.25 18.75" stroke="#191C1F" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M7.125 9.75C8.57475 9.75 9.75 8.57475 9.75 7.125C9.75 5.67525 8.57475 4.5 7.125 4.5C5.67525 4.5 4.5 5.67525 4.5 7.125C4.5 8.57475 5.67525 9.75 7.125 9.75Z"
                                                stroke="#191C1F" stroke-width="1.5" stroke-miterlimit="10" />
                                            <path
                                                d="M16.875 19.5C18.3247 19.5 19.5 18.3247 19.5 16.875C19.5 15.4253 18.3247 14.25 16.875 14.25C15.4253 14.25 14.25 15.4253 14.25 16.875C14.25 18.3247 15.4253 19.5 16.875 19.5Z"
                                                stroke="#191C1F" stroke-width="1.5" stroke-miterlimit="10" />
                                        </svg>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="space-y-1.5">
                            <Label label="Product categories" requiredText="*" />
                            <Select :options="ProductTags" @option-selected="onOptionSelected" />
                        </div>

                        <div class="space-y-1.5 col-span-2">
                            <Label label="Product Details" requiredText="*" />
                            <TextareaBox placeholder="enter product details" id="Product Details" name="Product Details"
                                :value="productDetails" @input="event => productDetails = event.target.value" />
                        </div>

                    </div>

                    <button type="submit"
                        class="w-fit border border-solid border-black1 py-1.5 px-6 rounded-md text-base capitalize">Add
                        product</button>

                </form>

            </div>

        </div>
    </LayoutWrapper>
</template>
