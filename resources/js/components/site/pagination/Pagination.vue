<template>
    <div class="mt-8 text-center">
        <v-pagination
                v-model="data"
                :length="meta.total"
                circle
                @input="changePage">
        </v-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['data', 'meta'],
        data() {
            return {}
        },
        methods: {
            changePage(page) {

            }
        }
    }
</script>

<style scoped>

</style>
