<template>
    <div class="forum-notifications-wrapper text-center mr-5">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon color="red">mdi-bell</v-icon>
                    <span v-if="unreadCount > 0" class="forum-notifications-count">{{unreadCount}}</span>
                </v-btn>
            </template>
            <v-list>
                <div v-if="unreadCount > 0">
                    <v-list-item
                            v-for="(item, index) in unread"
                            :key="index"
                            @click="">
                        <router-link :to="item.path">
                            <v-list-item-title @click="readNotification(item)">{{ item.question }}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </div>
                <div v-else class="forum-notifications-empty">No Notifications Unreaded</div>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    import Exception from "../../../apis/Exception";

    export default {
        name: "Notifications",
        data() {
            return {
                read: {},
                unread: {},
                unreadCount: 0
            }
        },
        created() {
            if (User.isLogged()) {
                this.getNotifications();
            }
            Echo.private('App.User.' + User.getIdUser())
                .notification((notification) => {
                    this.unread.unshift(notification);
                    this.unreadCount++;
                });
        },
        methods: {
            getNotifications() {
                axios.post('/api/notifications')
                    .then((response) => {
                        this.read = response.data.read;
                        this.unread = response.data.unread;
                        this.unreadCount = response.data.unread.length;
                    })
                    .catch((error) => Exception.handleError(error))
            },
            readNotification(notification) {
                axios.post('/api/markAsRead', {id: notification.id})
                    .then((response) => {
                        this.unread.splice(notification, 1);
                        this.read.push(notification);
                        this.unreadCount--;
                    })
                    .catch((error) => console.log(error.response.data))
            }
        }
    }
</script>

<style scoped>

</style>
