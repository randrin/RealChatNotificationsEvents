<template>
    <div class="container-fluid my-5">
        <v-card class="mx-auto mb-4">
            <v-list-item>
                <div class="d-flex">
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            {{question.title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>By {{question.user}}, <span class="text-danger">{{question.created_at}}</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </div>
                <v-spacer></v-spacer>
                <v-chip class="ma-2" color="green" text-color="white">
                    <v-avatar left class="green darken-4">{{question.repliesCount}}</v-avatar> Replies
                </v-chip>
            </v-list-item>
            <v-card-text v-html="body">
            </v-card-text>
            <v-card-actions v-if="showActions">
                <v-btn @click="edit" class="ma-2" fab outlined small color="orange">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="destroy" class="ma-2" fab outlined small color="red">
                    <v-icon>mdi-delete-forever</v-icon>
                </v-btn>
            </v-card-actions>
            <div v-else>
                <v-btn @click="reply" class="ma-2" fab outlined small color="yellow">
                    <v-icon>mdi-reply-all-outline</v-icon>
                </v-btn>
            </div>
        </v-card>
        <Replies :replies="question.replies" :title="question.title" v-if="showReply"></Replies>
        <create-reply v-else :question="question.slug"></create-reply>
    </div>
</template>

<script>
    import Replies from "../replies/Replies";
    import CreateReply from "../replies/CreateReply";
    export default {
        name: "ShowQuestion",
        components: {CreateReply, Replies},
        props: ['data'],
        data() {
            return {
                question: this.data,
                showActions: User.isAuthorizedActions(this.data.user_id),
                showReply: true
            }
        },
        computed() {
            this.body();
            this.loadReplies()
        },
        methods: {
            destroy() {
                axios.delete(`/api/question/${this.data.slug}`)
                    .then((response) => this.$router.push('/forum'))
                    .catch((error) => console.log(error.response.data))
            },
            edit() {
                EventBus.$emit('startEditing');
            },
            reply() {
                this.showReply = false;
            },
            loadReplies() {
                EventBus.$on('newReply', (reply) => {
                    this.question.unshift(reply);
                })
            },
            body() {
                return md.parse(this.data.body);
            }
        }
    }
</script>

<style scoped>

</style>
