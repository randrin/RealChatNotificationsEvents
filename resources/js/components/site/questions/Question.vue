<template>
    <show-question
    :data="questions"></show-question>
</template>

<script>
    import ShowQuestion from "./ShowQuestion";
    export default {
        name: "Question",
        components: {ShowQuestion},
        data() {
            return{
                questions: []
            }
        },
        created() {
            const slug = this.$route.params.slug;
            axios.get(`/api/question/${slug}`)
                .then((response) => this.questions = response.data.data)
                .catch((error) => error.response.data)
        }
    }
</script>

<style scoped>

</style>
