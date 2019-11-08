<template>
  <div class="auth-container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <h2>Login</h2>
      <b-form-group>
        <b-form-input v-model="email" type="email" required placeholder="Email"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="password" type="password" required placeholder="Password"></b-form-input>
      </b-form-group>
      <b-button variant="primary" type="submit" class="mt-3">Login</b-button>
      <div class="register m-4">
        <p>Not Register?</p>
        <b-button variant="dark" type="button" @click="register">Create New Account</b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password
      });
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style>
.auth-container {
  background: rgba(2, 2, 2, 0.6);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.form {
  width: 30em;
  height: 30em;
  background: rgb(163, 191, 197);
  margin: 5em auto;
  border: 3px solid rgb(3, 3, 3);
  box-shadow: 2px 2px 2px rgba(43, 42, 42, 0.6);
  border-radius: 10px;
  text-align: center;
}
.form > h2 {
  padding: 0.7em 0;
  font-size: 2.4em;
  font-weight: 900;
}
.form-group {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto;
  font-size: 1.2em;
}

@media screen and (max-width: 500px) {
  .form {
    width: 90%;
  }
}
</style>