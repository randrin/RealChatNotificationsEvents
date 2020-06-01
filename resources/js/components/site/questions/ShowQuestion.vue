<template>
    <v-container fluid class="my-5">
        <v-card class="mx-auto mb-4">
            <v-list-item>
                <div class="d-flex">
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            {{data.title}}
                        </v-list-item-title>
                        <v-list-item-subtitle>By {{data.user}}, <span class="text-danger">{{data.created_at}}</span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="green">5 Replies</v-btn>
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
    </v-container>
</template>

<script>
    export default {
        name: "ShowQuestion",
        props: ['data'],
        data() {
            return {
                showActions: User.isAuthorizedActions(this.data.user_id)
            }
        },
        computed: {
            body() {
                return md.parse(this.data.body);
            }
        },
        methods: {
            destroy() {
                axios.delete(`/api/question/${this.data.slug}`)
                    .then((response) => this.$router.push('/forum'))
                    .catch((error) => console.log(error.response.data))
            },
            edit() {
                EventBus.$emit('startEditing');
            }
        }
    }
</script>

<style scoped>

</style>
