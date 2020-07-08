<template>
    <v-container fluid class="my-12 forum-login-wrapper">
        <h2 class="text-center">Welcome to Login Forum</h2>
        <v-alert v-if="errors" type="error" class="mt-10">
            <span>Votre Email et/ou Mot de Passe est(sont) incorrect(s). Si vous êtes sur le Forum </span>
            <router-link to="signup">
                <v-btn color="green">
                    <v-icon>mdi-account-plus</v-icon>
                    <span class="ml-2">Inscrivez-vous</span>
                </v-btn>
            </router-link>
        </v-alert>
        <v-form @submit.prevent="login">
            <v-container class="forum-login-container my-5">
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex">
                            <v-icon class="icon-form forum-icon-form">mdi-email-check</v-icon>
                            <v-text-field
                                    v-model="form.email"
                                    label="Email Address"
                                    type="text"
                                    outlined
                            ></v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex">
                            <v-icon class="icon-form forum-icon-form">mdi-account-lock-outline</v-icon>
                            <v-text-field
                                    v-model="form.password"
                                    label="Password"
                                    :type="show ? 'text' : 'password'"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    outlined
                                    @click:append="show = !show"
                            ></v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn color="green" type="submit" :disabled="!checkValidation">
                            <v-icon color="white" class="forum-icon-form">mdi-login</v-icon>
                            <span class="forum-login-cta">Login</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <div class="forum-login-footer text-center">
            <hr />
            <p class="mt-5">New user on the forum? <router-link to="/signup">Create my account</router-link></p>
        </div>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                form: {
                    email: null,
                    password: null
                },
                errors: null
            }
        },
        computed: {
            checkValidation() {
                return (this.form.email && this.form.password) ? true : false;
            }
        },
        created() {
            if (User.isLogged()) {
                this.$router.push({name: 'forum'});
            }
        },
        methods: {
            login() {
                axios.post('/api/auth/login', this.form)
                    .then((response) => User.checkAccessUser(response))
                    .catch((error) => {
                        this.errors = error.response.data.error;
                        console.log(this.errors);
                    })
            }
        }
    }
</script>

<style>
</style>
