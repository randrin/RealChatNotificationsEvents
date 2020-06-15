<template>
    <v-toolbar>
        <v-toolbar-title>
            <router-link to="/" class="forum-toolbar-title">Kazou Forum</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <notifications v-if="isLogged"></notifications>
        <div class="forum-toolbar-links hidden-sm-and-down">
            <router-link
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    v-if="item.show"
                    class="ml-3">
                <v-btn :color="item.color">
                    <v-icon>{{item.icon}}</v-icon>
                    {{item.title}}
                </v-btn>
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
    import Notifications from "../site/notifications/Notifications";

    export default {
        components: {Notifications},
        data() {
            return {
                isLogged: User.isLogged(),
                username: User.getUsername(),
                items: [
                    {title: 'Forum', to: '/forum', show: true, icon: 'mdi-forum'},
                    {title: 'Ask Question', to: '/ask/question', show: User.isLogged()},
                    {title: 'All Categories', to: '/create/category', show: User.isLogged()},
                    {title: 'Login', to: '/login', show: !User.isLogged(), icon: 'mdi-login-variant'},
                    {title: 'Logout', to: '/logout', show: User.isLogged(), color: 'green', icon: 'mdi-logout-variant'},
                    {title: 'Sign Up', to: '/signup', show: !User.isLogged(), color: 'green', icon: 'mdi-account-plus'}
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
