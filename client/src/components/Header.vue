<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="info" class="nav">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <form v-on:submit.prevent="onSubmit">
        <div class="search">
          <input type="text" v-model="search" />
          <button type="button" class="clear-btn" @click="clearData">clear</button>
          <button type="submit" class="search-btn">search</button>
        </div>
      </form>
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" class="clear-flex" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!isAuth" to="/login">login</b-nav-item>
          <b-nav-item v-if="!isAuth" to="/register">register</b-nav-item>
          <b-nav-item v-if="isAuth" @click="signOut">logout</b-nav-item>
          <b-nav-item v-if="isAuth" to="/profile">profile</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  },
  props: ["user"],
  methods: {
    onSubmit() {
      this.$store.dispatch("fetchRecipes", {
        search: this.search,
        searchTo: 20
      });
      this.$router.push({ path: `/search/${this.search}` });
    },
    signOut() {
      this.$store.dispatch("logOut");
    },
    clearData() {
      this.search = "";
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to bottom, #f7f7f7 0%, #e3e3e3 100%);
  box-shadow: 0 1px rgba(107, 106, 106, 0.8);
}

h1 {
  margin: 0;
}

form {
  height: 38px;
}
.search {
  height: 100%;
  position: relative;
  padding-left: 20px;
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  background: white;
}
.search > * {
  height: 100%;
}
.search input {
  border: none;
  padding: 0;
  font-size: 1.5em;
  line-height: 35px;
}
.search input:focus {
  outline: none;
}
.search-btn {
  border: none;
  border-left: 1px solid black;
  border-radius: 0 30px 30px 0;
  background: linear-gradient(
    to bottom,
    rgba(44, 243, 18, 0.8) 0%,
    rgba(13, 100, 13, 0.8) 100%
  );
}
.search button:hover {
  cursor: pointer;
}
.clear-btn {
  border: none;
}
.clear-btn:active {
  background: rgba(107, 106, 106, 0.8);
  color: white;
  outline: none;
}
button {
  padding: 1px 7px 2px;
}
.clear-flex {
  flex-grow: 0;
}
</style>
