<template>
    <div class="my-2 forum-likes-wrapper">
        <span class="forum-likes-count">{{count}}</span>
        <v-btn icon :color="colorLike" @click="likeIt">
            <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "Likes",
        props: ["reply"],
        data() {
            return {
                isLiked: this.reply.likes.isLiked,
                count: this.reply.likes
            }
        },
        computed: {
            colorLike() {
                return this.isLiked ? 'deep-orange' : 'deep-orange lighten-4';
            }
        },
        methods: {
            likeIt() {
                this.isLiked ? this.decrementLike() : this.incrementLike();
                this.isLiked != this.isLiked;
            },
            incrementLike() {
                axios.post(`/api/like/${this.reply.id}`)
                    .then((reponse) => this.count++)
            },
            decrementLike() {
                axios.delete(`/api/like/${this.reply.id}`)
                    .then((reponse) => this.count--)
            }
        }
    }
</script>

<style scoped>

</style>
