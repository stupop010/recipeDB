<template>
  <transition name="modal" v-if="showModal" @keydown="onEscapeKeyUp" tabindex="0">
    <div class="modal-mask" @click="onEscapeKeyUp">
      <button class="modal-button" @click="onEscapeKeyUp">
        <font-awesome-icon icon="times" />
      </button>
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onEscapeKeyUp(event) {
      if (
        event.which === 27 ||
        (event.which === 1 && event.target.tagName !== "INPUT")
      ) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.$emit("close");
      }
    }
  },
  watch: {
    showModal() {
      if (this.show === false) {
        window.removeEventListener("keyup", this.onEscapeKeyUp);
      } else {
        window.addEventListener("keyup", this.onEscapeKeyUp);
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.99;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
.modal-button {
  position: absolute;
  top: 3em;
  right: 3em;
  border: none;
  color: white;
}
.modal-button > * {
  background: black;
  font-size: 30px;
  vertical-align: middle;
}
.modal-button:focus {
  transform: rotate(360deg);
  transition: transform 1s ease;
  outline: none;
}
</style>