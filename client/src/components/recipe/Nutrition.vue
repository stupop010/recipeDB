<template>
  <div>
    <h2 class="section-title">Nutrition</h2>
    <div class="serving">
      <div class="cell">
        {{Math.floor(recipe.calories / recipe.yield)}}
        <span>CALORIES / SERVING</span>
      </div>
      <div class="cell">
        {{recipe.yield}}
        <span>SERVING</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nutrition",
  props: ["recipe"]
};
</script>

<style scoped>
.serving {
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
  border-bottom: 1px solid black;
}
.cell {
  font-size: 0.9em;
}
.cell > span {
  display: block;
}
</style>