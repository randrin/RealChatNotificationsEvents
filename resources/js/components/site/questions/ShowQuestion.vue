<template>
    <div class="forum-questions-wrapper container-fluid my-5">
        <v-card class="mx-auto mb-4">
            <v-list-item>
                <div class="d-flex">
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="forum-questions-title headline">
                            {{question.title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <span class="forum-questions-author">By {{question.user}}</span>,
                            <span class="forum-questions-date">{{question.created_at}}</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </div>
                <v-spacer></v-spacer>
                <v-chip class="ma-2" color="red" text-color="white">
                    <v-avatar left class="grey darken-4">{{question.repliesCount}}</v-avatar>
                    Replies
                </v-chip>
            </v-list-item>
            <v-card-text class="forum-questions-body" v-html="body">
            </v-card-text>
            <div v-if="userIsLogged">
                <v-card-actions v-if="showActions">
                    <v-btn @click="edit" class="ma-2" fab outlined small color="orange">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="destroy" class="ma-2" fab outlined small color="red">
                        <v-icon>mdi-delete-forever</v-icon>
                    </v-btn>
                </v-card-actions>
                <div v-else-if="showReply">
                    <v-btn @click="reply" class="ma-2" fab outlined small color="yellow">
                        <v-icon>mdi-reply-all-outline</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>
        <div class="container-fluid" v-if="!userIsLogged">
            <div class="row">
                <h4 class="my-8">Need to reply this post? </h4>
                <router-link to="/login" class="ml-5 my-6">
                    <v-btn color="red">Login</v-btn>
                </router-link>
            </div>
            <div class="row">
                <v-divider></v-divider>
            </div>
        </div>
        <Replies :question="question" :title="question.title" v-if="showReply"></Replies>
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
                userIsLogged: User.isLogged(),
                showReply: true
            }
        },
        computed: {
            body() {
                return md.parse(this.data.body);
            }
        },
        created() {
            this.loadReplies();
            this.cancelReply();
            this.destroyReply();
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
                    this.question.repliesCount++;
                    this.showReply = true;
                });
                Echo.private('App.User.' + User.getIdUser())
                    .notification((notification) => {
                        this.question.repliesCount++;
                    });
            },
            cancelReply() {
                EventBus.$on('cancelReply', () => {
                    this.showReply = true;
                });
            },
            destroyReply() {
                EventBus.$on('destroyReply', () => {
                    this.question.repliesCount--;
                });
                Echo.channel('DeleteReplyChannel').listen('DeleteReplyEvent', (e) => {
                    this.question.repliesCount--;
                });
            }
        }
    }
</script>

<style scoped>

</style>
