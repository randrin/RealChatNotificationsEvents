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
            <v-card-text>
                {{data.body}}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ShowQuestion",
        props: ['data']
    }
</script>

<style scoped>

</style>
