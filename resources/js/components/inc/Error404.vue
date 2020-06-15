<template>
    <div>
        <p>Error 404</p>
        <p v-if="errorMessage">Message not found</p>
    </div>
</template>

<script>
    export default {
        name: "Error404",
        data() {
            return {
                errorMessage: false
            }
        },
        created() {
            console.log('questionNotFound')
            EventBus.$on('questionNotFound', () => {
                this.errorMessage = true;
            });
        }
    }
</script>

<style scoped>

</style>
