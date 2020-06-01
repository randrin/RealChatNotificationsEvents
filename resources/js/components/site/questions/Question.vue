<template>
    <div>
        <edit-question
            :data="questions"
            v-if="isEdit">
        </edit-question>
        <div v-else>
            <show-question
                    :data="questions"
                    v-if="questions"></show-question>
        </div>
    </div>
</template>

<script>
    import ShowQuestion from "./ShowQuestion";
    import EditQuestion from "./EditQuestion";

    export default {
        name: "Question",
        components: {EditQuestion, ShowQuestion},
        data() {
            return {
                questions: null,
                isEdit: false
            }
        },
        created() {
            this.getQuestion();
            this.loadEditing();
        },
        methods: {
            getQuestion() {
                const slug = this.$route.params.slug;
                axios.get(`/api/question/${slug}`)
                    .then((response) => this.questions = response.data.data)
                    .catch((error) => error.response.data)
            },
            loadEditing() {
                EventBus.$on('startEditing', () => {
                    this.isEdit = true;
                });
                EventBus.$on('cancelEditing', () => {
                    this.isEdit = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
