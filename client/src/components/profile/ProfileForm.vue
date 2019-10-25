<template>
  <form class="profile-form" v-on:submit.prevent="onSubmit">
    <b-form-group label="Name" label-for="name-input">
      <b-form-input id="name-input" type="text" placeholder="e.g John Doe" v-model="name" trim />
    </b-form-group>
    <b-form-group label="Display name" label-for="displayName-input">
      <b-form-input
        id="displayName-input"
        type="text"
        placeholder="e.g JohnDoe12"
        v-model="displayName"
        trim
      />
    </b-form-group>
    <b-form-group label="Email" label-for="email-input">
      <b-form-input id="email-input" type="email" :placeholder="user.email" v-model="email" />
    </b-form-group>
    <b-form-group label="Avatar" label-for="avatar-input">
      <b-form-file @change="onFileSelected" class="mt-3 file-input" plain></b-form-file>
      <div class="mt-3">
        Selected file:
        <span class="file-name">{{ seletedFile ? seletedFile.name : '' }}</span>
      </div>
    </b-form-group>
    <button type="submit" class="profile-btn">save</button>
    <b-button variant="info">Info</b-button>
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
      formData.append("email", this.email);
      formData.append("name", this.name);
      formData.append("displayName", this.displayName);
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
  border: none;
  border-radius: 0;
  border-bottom: 2px solid blue;
  font-size: 1em;
  padding: 0.1em;
}
.form-group input::placeholder {
  font-style: italic;
  opacity: 0.6;
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
.form-group .file-input {
  border: none;
}
.file-name {
  font-size: 0.8em;
}
</style>