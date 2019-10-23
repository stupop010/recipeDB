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
    <div class="form-group">
      <label>avatar</label>
      <input type="file" class="file-input" @change="onFileSelected" />
    </div>
    <button type="submit" class="profile-btn">save</button>
  </form>
</template>

<script>
import formData from "form-data";
export default {
  name: "ProfileForm",
  props: ["user"],
  data() {
    return {
      name: "",
      displayName: "",
      email: this.user.email,
      seletedFile: null
    };
  },
  methods: {
    onSubmit() {
      let formData = new FormData();
      formData.append("seletedFile", this.seletedFile);
      // formData.append("email", this.email);
      // formData.append("name", this.name);
      // formData.append("displayName", this.displyName);

      // const data = {
      //   name: this.name,
      //   displayName: this.displayName,
      //   email: this.email,
      //   seletedFile: this.seletedFile
      // };
      this.$store.dispatch("patchProfile", formData);
    },
    onFileSelected(event) {
      this.seletedFile = event.target.files[0];
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
  margin: 1.5em auto;
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
  border-bottom: 3px solid blue;
}
.form-group input::placeholder {
  font-style: italic;
  opacity: 0.6;
}
.form-group .file-input {
  border: none;
}
.profile-btn {
  padding: 0.5em 1.5em;
  background-color: rgba(36, 47, 207, 0.6);
  border-radius: 2px;
  font-size: 1em;
  transition: transform 300ms;
}
.profile-btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: white;
}
</style>