<script>

export default {

    props: {
        options: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            selectDropdownOpen: false,
            selectedOption: null,
            selectedOptionVal: null
        }
    },

    methods: {
        toggleDropdown() {
            this.selectDropdownOpen = !this.selectDropdownOpen;
        },
        selectOption(option) {
            this.selectedOption = option.label;
            this.selectedOptionVal = option.value;
            this.selectDropdownOpen = false;
            this.$emit('option-selected', this.selectedOptionVal);
        },
        clearSelection() {
            this.selectedOption = null;
            this.selectDropdownOpen = false;
        },
    },

}

</script>


<template>
    <div class="w-full border border-solid border-black1 flex items-center justify-between py-2 px-4 rounded-md relative">
        <p @click="toggleDropdown" class="w-full capitalize color-black3"
            :class="{ 'color-main': selectedOption !== null }">
            {{ selectedOption ? selectedOption : 'Select Option' }}
        </p>
        <div class="flex items-center space-x-2">
            <button @click="clearSelection" v-if="selectedOption">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#191C1F" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M15 9L9 15" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M15 15L9 9" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <button @click="toggleDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 9L12 16.5L4.5 9" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div v-if="selectDropdownOpen"
            class="w-full absolute top-full rounded-md bg-white shadow-md py-1 left-0 mt-2 border border-solid border-black1 max-h-[250px] overflow-y-auto">
            <ul class="w-full">
                <li v-for="(option, index) in options" :key="index.value" @click="selectOption(option)"
                    class="block px-4 py-1.5 hover:bg-slate-100 cursor-pointer capitalize">{{ option.label }}</li>
            </ul>
        </div>
    </div>
</template>