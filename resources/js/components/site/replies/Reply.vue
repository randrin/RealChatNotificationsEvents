<template>
    <v-container fluid>
        <v-card class="mx-auto mb-4" v-if="!editing">
            <v-list-item>
                <div class="d-flex">
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            {{reply.user}}
                        </v-list-item-title>
                        <v-list-item-subtitle><span class="text-danger">{{reply.created_at}}</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <likes :reply="reply"></likes>
                </div>
                <v-spacer></v-spacer>
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
        </v-card>
        <edit-reply :reply="reply" v-else></edit-reply>
    </v-container>
</template>

<script>
    import EditReply from "./EditReply";
    import Likes from "../likes/Likes";

    export default {
        name: "Reply",
        components: {Likes, EditReply},
        props: ["reply", "index"],
        data() {
            return {
                editing: false,
                editingBodyBefore: this.reply.reply,
                showActions: User.isAuthorizedActions(this.reply.user_id)
            }
        },
        computed: {
            body() {
                return md.parse(this.reply.reply);
            }
        },
        created() {
            this.loadReply();
        },
        methods: {
            edit() {
                this.editing = true;
            },
            destroy() {
                EventBus.$emit('destroyReply', this.index);
            },
            loadReply() {
                EventBus.$on('cancelSingleReply', (reply) => {
                    this.editing = false;
                    // This to fix bug when the user trying to edit the reply, but after click to cancel button
                    if (reply !== this.reply.reply) {
                        this.reply.reply = this.editingBodyBefore;
                        this.editingBodyBefore = '';
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
