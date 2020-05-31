<template>
    
</template>

<script>
    export default {
        data() {
            return{

            }
        },
        created() {
            EventBus.$emit('logout');
        }
    }
</script>

