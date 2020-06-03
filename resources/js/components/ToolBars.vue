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
                <v-btn :color="item.color">{{item.title}}</v-btn>
            </router-link>
            <!--<v-chip
                    v-if="isLogged"
                    class="ma-2"
                    color="primary"
                    label
            >
                <v-icon left>person_outline</v-icon>
                {{username}}
            </v-chip>-->
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                isLogged: User.isLogged(),
                username: User.getUsername(),
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Question', to: '/ask/question', show: User.isLogged()},
                    {title: 'Add Category', to: '/create/category', show: User.isLogged() && User.isAuthorized()},
                    {title: 'Login', to: '/login', show: !User.isLogged()},
                    {title: 'Logout', to: '/logout', show: User.isLogged() , color: 'green'},
                    {title: 'Sign Up', to: '/signup', show: !User.isLogged(), color: 'green'}
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
