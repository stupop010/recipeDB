<template>
  <section>
    <div class="landing">
      <div class="content">
        <Search />
        <p class="showcase-title">Search through thousands of recipes</p>
      </div>
    </div>
  </section>
</template>

<script>
import Search from "../components/search/Search";
export default {
  name: "LandingPage",
  components: {
    Search
  }
};
</script>

<style scoped>
section {
  position: relative;
}
.landing {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(85, 85, 85, 0.2), rgba(138, 138, 137, 0.2)),
    url("/landing.jpg") center no-repeat;
  background-size: cover;
  padding-bottom: 10em;
}
.search {
  position: absolute;
  top: 30%;
  left: 35%;
  color: white;
  width: 30em;
  background: white;
}
.showcase-title {
  color: white;
  font-weight: bolder;
  font-size: 3em;
  margin-top: 2em;
  text-shadow: 2px 2px black;
  margin-bottom: 0;
}
.content {
  padding-top: 18em;
}
@media screen and (max-width: 600px) {
  .showcase-title {
    margin-top: 0.7em;
  }
  .content {
    padding-top: 10em;
  }
}
</style>