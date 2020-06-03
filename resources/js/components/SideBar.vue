<template>
    <v-card class="mx-auto ml-4">
        <v-toolbar color="indigo" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>All Forum Categories</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-list v-if="categories.length > 0">
            <v-list-item
                    v-for="category in categories"
                    :key="category.id"
                    @click="">
                <v-list-item-icon v-if="false">
                    <v-icon v-if="category.icon" color="pink">mdi-star</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="text-right">
                    <v-list-item-title v-text="category.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar v-if="false">
                    <v-img :src="category.avatar"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>
        <v-list v-else>
            <div class="text-center">Ouff !!!! No data avalaible in this moment. </div>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                categories: []
            }
        },
        methods: {
            loadCatgories() {
                axios.get('/api/category')
                    .then((response) => this.categories = response.data.data)
                    .catch((error) => this.errors = error.response.data.errors)
            },
        },
         created() {
            this.loadCatgories();
         }
    }
</script>

<style scoped>

</style>
