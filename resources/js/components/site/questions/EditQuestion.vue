<template>
    <v-container fluid class="my-5">
        <h2 class="text-center">Edit your forum</h2>
        <v-card>
            <div>
                <v-form @submit.prevent="update">
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
                            <vue-simplemde v-model="form.body"></vue-simplemde>
                            <span class="text-danger"
                                  v-if="errors.body">{{errors.body[0]}}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-btn type="submit" class="ma-2" fab dark small color="orange">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn
                                    color="red"
                                    class="ma-2 white--text"
                                    fab dark small
                                    @click="cancel">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
        </v-card>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "EditQuestion",
        props: ['data'],
        components: {
            VueSimplemde
        },
        data() {
            return {
                form: {
                    title: null,
                    body: null
                },
                errors: []
            }
        },
        created() {
            this.form = this.data;
        },
        methods: {
            update() {
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                    .then((response) => this.cancel())
                    .catch((error) => console.log(error.response.data))
            },
            cancel() {
                EventBus.$emit('cancelEditing');
            },
        }
    }
</script>

<style scoped>

</style>
