<template>
  <div class="auth-container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <h2>Register</h2>
      <div v-if="error" class="error">{{error}}</div>
      <b-form-group>
        <b-form-input type="email" placeholder="email" v-model="email" required />
      </b-form-group>
      <b-form-group>
        <b-form-input type="password" placeholder="Password" v-model="password" required />
      </b-form-group>
      <b-form-group>
        <b-form-input type="password" placeholder="Confirm Password" v-model="password2" required />
      </b-form-group>
      <b-button type="submit" variant="primary" class="mt-3">Create Account</b-button>
      <div class="mt-4">
        <p>Already Register?</p>
        <b-button type="button" variant="dark" class="mt-1" @click="login">Log In</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      error: ""
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit() {
      if (this.password !== this.password2)
        return (this.error = "Password don't match");
      const data = { email: this.email, password: this.password };
      this.clearData();
      this.registerUser(data);
    },
    login() {
      this.$router.push("/login");
    },
    clearData() {
      this.email = "";
      this.password = "";
      this.password2 = "";
      this.error = "";
    }
  },
  computed: mapGetters(["isAuth"])
};
</script>

<style scoped>
.error {
  margin: 0 auto;
  margin-bottom: 1em;
  padding: 0.5em 0.2em;
  background: rgba(226, 23, 23, 0.8);
  color: white;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 4px;
  width: 40%;
}
</style>