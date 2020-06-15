<template>
    <div class="my-2 forum-likes-wrapper">
        <span class="forum-likes-count">{{count}}</span>
        <v-btn icon :class="colorLike" color="white" @click="likeIt">
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
                isLiked: this.reply.isLiked,
                count: this.reply.likes
            }
        },
        computed: {
            colorLike() {
                return this.isLiked ? 'red' : '';
            }
        },
        created() {
            this.checkUserLike();
            Echo.channel('LikeChannel').listen('LikeEvent', (e) => {
                if(this.reply.id === e.id) {
                    e.type == 1 ? this.count++ : this.count--;
                }
            })
        },
        methods: {
            checkUserLike() {
                console.log('User Id: ', User.getIdUser());
                console.log('user_id: ', this.reply.user_id);
                return this.isLiked == (User.getIdUser() === this.reply.user_id) ? 'red' : '';
            },
            likeIt() {
                if(User.isLogged()) {
                    this.isLiked ? this.decrementLike() : this.incrementLike();
                    this.isLiked = !this.isLiked;
                } else {
                    console.log('Open Modal to advise User to Login')
                }
            },
            incrementLike() {
                axios.post(`/api/like/${this.reply.id}`)
                    .then((response) => this.count++)
            },
            decrementLike() {
                axios.delete(`/api/like/${this.reply.id}`)
                    .then((response) => this.count--)
            }
        }
    }
</script>

<style scoped>

</style>
