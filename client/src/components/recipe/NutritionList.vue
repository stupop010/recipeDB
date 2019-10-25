<template>
  <div class="list-container">
    <div class="list">
      <span>
        <button v-if="recipe.sub" @click="setShow" class="icon mr-1" :class="{rotate: show}">
          <font-awesome-icon icon="angle-right" size="1x" />
        </button>
        {{recipe.label}}
      </span>
      <span>{{Math.floor(recipe.total / recipeYield)}}{{recipe.unit}}</span>
    </div>
    <div v-if="recipe.sub && show">
      <ul>
        <li class="sub-list" v-for="(sub, index) in recipe.sub" :key="index">
          <span>{{sub.label}}</span>
          <span>{{Math.floor(sub.total / recipeYield)}}{{sub.unit}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionList",
  props: ["recipe", "recipeYield"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    setShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scroped>
.list-container {
  width: 100%;
}
.list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.sub-list {
  margin: 0.5em 0 0.5em 2em;
  font-size: 0.8em;
  opacity: 0.8;
  width: 20em;
  display: flex;
  justify-content: space-between;
  color: black;
}
.icon {
  border: none;
  background: transparent;
  transition: transform 300ms;
  outline: none;
}
.icon:focus {
  outline: none;
}
.icon:hover {
  cursor: pointer;
}
.rotate {
  transform: rotate(90deg);
}
.nutrition {
  text-align: start;
}
.nutrition > li {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
}

.nutrition > li:nth-child(1) {
  color: red;
}
.nutrition > li:nth-child(2) {
  color: orange;
}
.nutrition > li:nth-child(3) {
  color: green;
}
</style>