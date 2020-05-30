<template>
  <v-form>
    <v-container class="my-5">
      <h2 class="text-center">Welcome to Login Page</h2>
      <v-form @submit.prevent="login">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
                    v-model="form.email"
                    label="Email Address"
                    type="text"
                    outlined
            ></v-text-field>
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
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-btn color="green" type="submit">
              <v-icon>home</v-icon> Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data(){
      return {
        show: false,
        form: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      login() {
        User.login(this.form);
      }
    }
  }
</script>

<style>
</style>
