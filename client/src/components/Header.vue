<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="info" class="nav">
      <!-- Search button to drop modal -->
      <button @click="showModal = true">
        Search
        <font-awesome-icon icon="search" size="1x" />
      </button>

      <b-navbar-brand href="/">RecipeDB</b-navbar-brand>

      <!-- Modal -->
      <Modal :showModal="showModal" @close="showModal = false">
        <Search />
      </Modal>

      <!-- Collapse section on smaller screen size -->
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" class="clear-flex" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!isAuth" to="/login">login</b-nav-item>
          <b-nav-item v-if="!isAuth" to="/register">register</b-nav-item>
          <b-nav-item v-if="isAuth" to="/favourites">favourites</b-nav-item>
          <b-nav-item v-if="isAuth" to="/profile">profile</b-nav-item>
          <b-nav-item v-if="isAuth" @click="signOut">logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import Modal from "./Modal";
import Search from "./search/Search";

export default {
  name: "Header",
  props: ["user"],
  components: {
    Modal,
    Search
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("logOut");
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
  position: fixed;
  width: 100vw;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  background: linear-gradient(to bottom, #f7f7f7 0%, #e3e3e3 100%);
  box-shadow: 0 2px rgba(82, 81, 81, 0.6);
}
.navbar-brand {
  font-size: 2em;
  font-weight: bold;
}
button {
  padding: 1px 7px 2px;
}
.clear-flex {
  flex-grow: 0;
}
#nav-text-collapse a {
  text-transform: capitalize;
}

@media only screen and (max-width: 600px) {
  .navbar-brand {
    font-size: 1.4em;
  }
}
</style>
