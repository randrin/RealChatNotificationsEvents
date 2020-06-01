<template>
    <v-container fluid class="my-5">
        <h2 class="text-center">Add New Category</h2>
        <v-form @submit.prevent="create">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.name"
                            label="Category Name"
                            type="text"
                            outlined
                    ></v-text-field>
                    <span class="text-danger" v-if="errors.name">{{errors.name[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-btn color="green" type="submit">
                        Create
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
        <hr class="mt-5 pb-5"/>
        <v-card class="mx-auto mt-5">
            <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>All Forum Categories</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-list>
                <div v-for="(category, index) in categories"
                     :key="category.id">
                    <v-list-item
                            @click="">
                        <v-list-item-icon v-if="false">
                            <v-icon v-if="category.icon" color="pink">mdi-star</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="category.name"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-tile-action>
                            <v-btn @click="edit" class="ma-2" fab outlined small color="orange">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn @click="destroy(category.slug, index)" class="ma-2" fab outlined small color="red">
                                <v-icon>mdi-delete-forever</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-item-avatar v-if="false">
                            <v-img :src="category.avatar"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "CreateCategory",
        data() {
            return {
                form: {
                    name: null,
                },
                categories: [],
                errors: []
            }
        },
        methods: {
            create() {
                axios.post('/api/category', this.form)
                    .then((response) => {
                        this.categories.unshift(response.data);
                        this.form.name = null;
                    })
                    .catch((error) => this.errors = error.response.data)
            },
            loadCatgories() {
                axios.get('/api/category')
                    .then((response) => this.categories = response.data.data)
                    .catch((error) => this.errors = error.response.data.errors)
            },
            edit() {

            },
            destroy(slug, index) {
                axios.delete(`/api/category/${slug}`)
                    .then((response) => this.categories.splice(index, 1))
                    .catch((error) => console.log(error.response.data))
            }

        },
        created() {
            this.loadCatgories();
        }
    }
</script>

<style scoped>

</style>
