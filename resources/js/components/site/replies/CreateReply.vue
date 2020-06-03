<template>
    <v-container class="mt-6">
        <v-form @submit.prevent="submit">
            <vue-simplemde v-model="body"></vue-simplemde>
            <v-col cols="12" sm="6">
                <v-btn color="green" type="submit">
                    Submit Reply
                </v-btn>
            </v-col>
        </v-form>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "CreateReply",
        props: ["question"],
        components: {
            VueSimplemde
        },
        data() {
            return {
                body: null
            }
        },
        methods: {
            submit() {
                axios.post(`/api/question/${this.question}/reply`, {body: this.body})
                    .then((response) =>
                        this.body == '',
                        EventBus.$emit('newReply', response.data.reply)
                    )
                    .catch((error) => console.log(error.response.data))
            }
        }
    }
</script>

<style scoped>

</style>
