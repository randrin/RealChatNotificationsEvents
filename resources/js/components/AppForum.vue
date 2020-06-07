<template>
    <div class="forum-home-wrapper">
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="700">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-4 forum-home-title mb-5">Kazou Forum</h1>
                    <h4 class="forum-home-subtitle headline pb-8">Rencontrez les experts en innovation technologique et posez vos questions !!</h4>
                    <div class="mt-8">
                        <router-link to="/forum">
                            <v-btn color="green">Let Go</v-btn>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </v-parallax>
    </div>
</template>

<script>
    export default {
        name: "AppForum"
    }
</script>

<style>

</style>
