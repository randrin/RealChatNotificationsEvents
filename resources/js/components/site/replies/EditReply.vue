<template>
    <div>
        <v-form @submit.prevent="update">
            <vue-simplemde v-model="reply.reply"></vue-simplemde>
            <div>
                <v-btn color="green" type="submit">
                    Update Reply
                </v-btn>
                <v-btn color="yellow" @click="cancel">
                    Cancel
                </v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
    import VueSimplemde from 'vue-simplemde';

    export default {
        name: "EditReply",
        props: ["reply"],
        components: {
            VueSimplemde
        },
        methods: {
            update() {
                axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
                    .then((response) => this.cancel(this.reply.reply))
                    .catch((error) => console.log(error.response.data))
            },
            cancel(reply) {
                EventBus.$emit('cancelSingleReply', reply);
            }
        }
    }
</script>

<style scoped>

</style>
