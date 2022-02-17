<template>
  <div class="modal modal__draggable">
    <button class="modal__close" @click="close">x</button>
    <slot />
  </div>
</template>

<script>
import interact from "interactjs";
import Store from "@/store";

export default {
  methods: {
    onMove(event) {
      Store.modalPosition.x += event.dx;
      Store.modalPosition.y += event.dy;
      this.updatePosition(Store.modalPosition);
    },
    updatePosition(position) {
      document.getElementsByClassName(
        "modal__draggable"
      )[0].style.transform = `translate(${position.x}px, ${position.y}px)`;
    },
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    this.updatePosition(Store.modalPosition);
    interact(".modal__draggable").draggable({
      listeners: {
        move: this.onMove,
      },
    });
  },
};
</script>

<style>
.modal {
  position: absolute;
  width: 45vw;
  height: 30vh;
  background-color: white;
  color: black;
  border-radius: 12px;
  box-shadow: 15px 15px 46px -15px rgba(0, 0, 0, 0.28);
  padding: 1%;
  touch-action: none;
  user-select: none;
  z-index: 1;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(71, 69, 69);
  text-decoration: none;
  background: transparent;
  border: none;
  font-size: 25px;
  transition: 0.2s;
  font-family: "Acme", sans-serif;
  cursor: pointer;
}
.modal__close:hover {
  font-size: 30px;
}

@media (max-width: 850px) {
  .modal {
    width: 85vw;
    min-height: 40vh;
  }
}
</style>
