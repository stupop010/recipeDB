<template>
  <div class="auth-container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <h2>Register</h2>
      <div v-if="error" class="error">{{error}}</div>
      <div class="form-group">
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Confirm Password" v-model="password2" />
      </div>
      <button type="submit" class="btn">Create Account</button>
      <div class="register">
        <p>Already Register?</p>
        <button type="button" class="btn" @click="login">Log In</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  }
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
.register > button {
  margin-top: 0.5em;
  background: rgba(79, 248, 107, 0.9);
}
</style>