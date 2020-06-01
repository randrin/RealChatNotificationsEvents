<template>
    <v-container fluid class="my-5">
        <h2 class="text-center">Any question? Post your request</h2>
        <v-form @submit.prevent="create">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.title"
                            label="Question Title"
                            type="text"
                            outlined
                    ></v-text-field>
                    <span class="text-danger" v-if="errors.title">{{errors.name[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-select
                            v-model="form.category_id"
                            :items="categories"
                            item-text="name"
                            item-value="id"
                            label="Category"
                            outlined
                            autocomplete
                    ></v-select>
                    <span class="text-danger"
                          v-if="errors.category_id">{{errors.category_id[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <vue-simplemde v-model="form.body"></vue-simplemde>
                    <span class="text-danger"
                          v-if="errors.body">{{errors.body[0]}}</span>
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
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';
    export default {
        name: "CreateQuestion",
        components: {
            VueSimplemde
        },
        data() {
            return {
                form: {
                    title: null,
                    body: null,
                    category_id: null
                },
                categories: [],
                errors: []
            }
        },
        created() {
            this.loadCaterories();
        },
        methods: {
            loadCaterories() {
                axios.get('/api/category')
                    .then((response) => this.categories = response.data.data)
                    .catch((error) => this.errors = error.response.data.errors)
            },
            create() {
                axios.post('/api/question', this.form)
                    .then((response) => this.$router.push(response.data.path))
                    .catch((error) => this.errors = error.response.data)
            }
        }
    }
</script>

<style scoped>

</style>
