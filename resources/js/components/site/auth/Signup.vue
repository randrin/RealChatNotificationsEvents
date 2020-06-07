<template>
    <v-container class="my-5">
        <h2 class="text-center">Welcome to Sign Up Page</h2>
        <v-form @submit.prevent="signup">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.name"
                            label="Full Name"
                            type="text"
                            outlined
                    ></v-text-field>
                    <span class="text-danger" v-if="errors.name">{{errors.name[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.email"
                            label="Email Address"
                            type="text"
                            outlined
                    ></v-text-field>
                    <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.password"
                            label="Password"
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            outlined
                            @click:append="show = !show"
                    ></v-text-field>
                    <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                            v-model="form.password_confirmation"
                            label="Password Confirmation"
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            outlined
                            @click:append="show = !show"
                    ></v-text-field>
                    <span class="text-danger"
                          v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-btn color="green" type="submit" :disabled="!checkValidation">
                        <v-icon color="white">home</v-icon>
                        Sign Up
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                },
                errors: {}
            }
        },
        computed: {
            checkValidation() {
                return (this.form.name && this.form.email && this.form.password && this.form.password_confirmation) ? true : false;
            }
        },
        created() {
            if (User.isLogged()) {
                this.$router.push({name: 'forum'});
            }
        },
        methods: {
            signup() {
                axios.post('/api/auth/signup', this.form)
                    .then((response) => {
                        User.checkAccessUser(response)
                        this.$router.push({name: 'forum'});
                    })
                    .catch((error) => this.errors = error.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>
