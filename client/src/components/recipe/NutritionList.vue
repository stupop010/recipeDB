<template>
  <div>
    <span>
      <button v-if="item.sub" @click="setShow" class="icon">
        <font-awesome-icon icon="angle-down" size="lg" />
      </button>
      {{item.label}}
    </span>
    <span>{{Math.floor(item.total / recipeYield)}}{{item.unit}}</span>
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
  },
  created() {
    console.log(this);
  }
};
</script>

<style scroped>
.sub-list {
  margin: 0.5em 0 0.5em 2em;
  font-size: 0.8em;
  opacity: 0.8;
  width: 20em;
  display: flex;
  justify-content: space-between;
}
.icon {
  border: none;
}
</style>