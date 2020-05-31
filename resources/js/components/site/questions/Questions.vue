<template>
    <v-card class="mx-auto mb-4">
        <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="headline">
                    <router-link :to="data.path">{{data.title}}</router-link>
                </v-list-item-title>
                <v-list-item-subtitle>By {{data.user}}, <span class="text-danger">{{data.created_at}}</span></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text>
            {{data.body}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Questions",
        props: ['data']
    }
</script>

<style scoped>

</style>
