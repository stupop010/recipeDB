<template>
  <div class="login-container">
    <form class="form">
      <h2>Login</h2>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" />
      </div>
      <button>Login</button>
      <button>Cancel</button>
    </form>
    <button>Register</button>
  </div>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {};
  }
};
</script>

<style scoped>
.login-container {
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
  margin: 0.5em auto;
  font-size: 1.2em;
  font-weight: 500;
}
.form-group > input {
  width: 9.5em;
  border-radius: 2px;
  padding-left: 0.5em;
  font-size: 1em;
}
</style>