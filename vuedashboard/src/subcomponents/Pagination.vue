<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        },
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.$emit('pagechange', this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit('pagechange', this.currentPage + 1);
            }
        },
    }
};
</script>

<template>
    <div class="w-full flex items-center justify-between">
        <div>
        </div>
        <div class="flex items-center space-x-6">
            <p class="text-md">{{ currentPage }} of {{ totalPages }} pages</p>
            <div class="flex items-center space-x-2">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="py-[6px] px-3 text-base text-center rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="py-[6px] px-3 text-base rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
            </div>
        </div>
    </div>
</template>
