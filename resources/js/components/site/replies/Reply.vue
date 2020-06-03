<template>
    <v-container fluid>
        <v-card class="mx-auto mb-4">
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
                </div>
                <v-spacer></v-spacer>
            </v-list-item>
            <v-card-text v-html="reply.reply">
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
    </v-container>
</template>

<script>
    export default {
        name: "Reply",
        props: ["reply"],
        data() {
            return {
                showActions: User.isAuthorizedActions(this.reply.user_id)
            }
        },
        created() {
        },
        methods: {
            edit() {

            },
            destroy() {

            }
        }
    }
</script>

<style scoped>

</style>
