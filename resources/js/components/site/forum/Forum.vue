<template>
    <v-container class="my-5">
        <h2 class="text-center">Welcome to Forum Tech</h2>
        <v-layout row wrap>
            <v-flex xs8>
                <questions
                v-for="question in questions"
                :key="question.title"
                :data="question">
                </questions>
            </v-flex>
            <v-flex xs4>
                Sidebar
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Questions from "../questions/Questions";
    export default {
        name: "Forum",
        components: {Questions},
        data() {
            return {
                questions: []
            }
        },
         created() {
            this.loadQuestions();
         },
        methods: {
            loadQuestions() {
                axios.get('/api/question')
                    .then((response) => this.questions = response.data.data)
                    .catch((error) => console.log(error.response.error))
            }
        }
    }
</script>

<style scoped>

</style>
