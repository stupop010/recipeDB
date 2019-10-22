<template>
  <form class="profile-form" v-on:submit.prevent="onSubmit">
    <div class="form-group">
      <label>name</label>
      <input type="text" placeholder="e.g John Doe" />
    </div>
    <div class="form-group">
      <label>display name</label>
      <input type="text" placeholder="e.g JohnDoe12" />
    </div>
    <div class="form-group">
      <label>email</label>
      <input type="email" :placeholder="user.email" :v-model="email" />
    </div>
    <button type="submit">save</button>
    <!-- <div class="form-group">
      <label>Name:</label>
      <input type="text" />
    </div>-->
  </form>
</template>

<script>
export default {
  name: "ProfileForm",
  props: ["user"],
  data() {
    return {
      name: "",
      displayName: "",
      email: this.user.email
    };
  },
  methods: {
    onSubmit() {
      console.log(this);
    }
  }
};
</script>

<style scoped>
.profile-form {
  border: 1px solid black;
  width: 60%;
}
.form-group {
  margin: 2.5em auto;
  text-align: start;
  display: block;
  width: 15em;
}
.form-group label {
  text-transform: capitalize;
  opacity: 0.8;
  font-size: 1em;
}
.form-group input {
  height: 1.5em;
  /* border: 1px solid black; */
  border: none;
  border-bottom: 2px solid blue;
  font-size: 1em;
  padding: 0;
}
.form-group input:focus {
  outline: none;
}
.form-group input:not(:focus) {
  font-style: italic;
  opacity: 0.6;
}
</style>