<template>
    <v-container fluid class="my-12 forum-forum-wrapper">
        <h2 class="text-center">Welcome to Forum Tech</h2>
        <v-layout row wrap class="forum-forum-container mt-12">
            <v-flex xs8>
                <questions class="forum-questions-wrapper"
                v-for="question in questions"
                :key="question.title"
                :data="question">
                </questions>
                <div v-if="meta.last_page != 1" class="mt-8 text-center">
                    <v-pagination
                            v-model="meta.current_page"
                            :length="meta.last_page"
                            circle
                            @input="changePage">
                    </v-pagination>
                </div>
            </v-flex>
            <v-flex xs4>
                <side-bar></side-bar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Questions from "../questions/Questions";
    import SideBar from "../../inc/SideBar";
    import Pagination from "../pagination/Pagination";
    export default {
        name: "Forum",
        components: {Pagination, SideBar, Questions},
        data() {
            return {
                questions: [],
                errors: [],
                meta: []
            }
        },
         created() {
            this.loadQuestions();
         },
        methods: {
            loadQuestions(page) {
                let url = page ? `/api/question?page=${page}` : '/api/question'
                axios.get(url)
                    .then((response) => {
                        this.questions = response.data.data;
                        this.meta = response.data.meta;
                    })
                    .catch((error) => this.errors = error.response.data.errors)
            },
            changePage(page) {
                this.loadQuestions(page);
            }
        }
    }
</script>

<style scoped>

</style>
