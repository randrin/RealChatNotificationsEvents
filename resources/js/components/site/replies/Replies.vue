<template>
    <v-container>
        <h2>All Replies About <span class="text-danger">{{title}}</span></h2>
        <reply v-for="reply in replies" :key="replies.id" :reply="reply" v-if="showReply"></reply>
        <create-reply v-else></create-reply>
    </v-container>
</template>

<script>
    import Reply from "./Reply";
    import CreateReply from "./CreateReply";

    export default {
        name: "Replies",
        props: ["replies", "title"],
        components: {CreateReply, Reply},
        data() {
            return {
                showReply: true
            }
        }
    }
</script>

<style scoped>

</style>
