<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 lg3>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign In Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field prepend-icon="mdi-email" name="email" label="Email" type="email" v-model="email"
                            :rules="emailRules" required></v-text-field>
              <v-text-field prepend-icon="mdi-lock" name="password" label="Password" type="password" v-model="password"
                            :rules="passwordRules" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-dialog v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                >
                  Forgot Password
                </v-btn>
              </template>
              <ForgotPasswordForm/>
            </v-dialog>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" @click="submit">Sign In</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default {
  name: "SignIn",
  components: {ForgotPasswordForm,},
  data() {
    return {
      dialog: false,
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
            v.length >= 6 ||
            'Password must be greater than 6 characters'
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('userLogin', {
          email: this.email,
          password: this.password
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
