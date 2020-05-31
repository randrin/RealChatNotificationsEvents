<template>
    <v-toolbar>
        <v-toolbar-title>Real Time Forum</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    v-if="item.show"
                    class="ml-3">
                <v-btn>{{item.title}}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    import AppStorage from "../apis/AppStorage";

    export default {
        data() {
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Questions', to: '/questions', show: User.isLogged()},
                    {title: 'Categories', to: '/categories', show: User.isLogged()},
                    {title: 'Login', to: '/login', show: !User.isLogged()},
                    {title: 'Logout', to: '/logout', show: User.isLogged()},
                    {title: 'Sign Up', to: '/signup', show: !User.isLogged()}
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.isLogout();
            })
        }
    }
</script>
<style scoped>
    a:hover {
        text-decoration: none;
    }
</style>
