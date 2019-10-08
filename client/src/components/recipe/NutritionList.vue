<template>
  <div class="list-container">
    <div class="list">
      <span>
        <button v-if="item.sub" @click="setShow" class="icon" :class="{rotate: show}">
          <font-awesome-icon icon="angle-right" size="2x" />
        </button>
        {{item.label}}
      </span>
      <span>{{Math.floor(item.total / recipeYield)}}{{item.unit}}</span>
    </div>
    <div v-if="item.sub && show">
      <ul>
        <li class="sub-list" v-for="(sub, index) in item.sub" :key="index">
          <span>{{sub.label}}</span>
          <span>{{Math.floor(sub.total /recipeYield)}}{{sub.unit}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NutritionList",
  props: ["item", "recipeYield"],
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
  transition: transform 300ms;
  outline: none;
}
.icon:hover{
  cursor: pointer;
}
.rotate {
  transform: rotate(90deg);
}
</style>