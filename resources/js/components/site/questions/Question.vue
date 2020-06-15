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
                isEdit: false,
                errors: []
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
                    .catch((error) => {
                        console.log('question not found: ', error.response.data);
                        this.errors = error.response.data;
                        EventBus.$emit('questionNotFound');
                    })
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
