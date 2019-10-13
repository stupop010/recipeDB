<template>
  <div class="auth-container">
    <form class="form" v-on:submit.prevent="onSubmit">
      <h2>Login</h2>
      <div class="form-group">
        <input type="email" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register">
        <p>Not Register?</p>
        <button type="button" class="btn" @click="register">Create New Account</button>
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
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: 500;
}
.form-group > input {
  width: 100%;
  border-radius: 2px;
  padding: 5px 8px;
  font-size: 1em;
}
.btn {
  padding: 0.2em 3em;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 1.3em;
  background: rgba(63, 113, 252, 0.9);
}
.btn:hover {
  cursor: pointer;
}
.register {
  padding-top: 2em;
}
.register > button {
  margin-top: 0.5em;
  background: rgba(79, 248, 107, 0.9);
}
</style>