<template>
  <div class="modal modal__draggable">
    <router-link to="/" class="modal__close">X</router-link>
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
  width: 40vw;
  height: 20vh;
  background-color: rgb(64, 66, 68);
  color: white;
  border-radius: 12px;
  box-shadow: 6px 10px 10px black;
  padding: 4%;
  touch-action: none;
  user-select: none;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  text-decoration: none;
}

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .modal {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    background: none;
    outline: none;
    border-radius: 4px;
    background: rgba(65, 63, 63, 0.856);
    box-shadow: 5px 8px 15px black;
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(53, 55, 56));
    padding: 0;
  }
}

@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .modal {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    transform: translate(-50%, -50%);
    background-color: rgb(100, 100, 100);
    text-align: center;
    width: 80%;
    height: 60%;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    outline: none;
    border: 2px solid rgb(35, 166, 170);
    border-radius: 8px;
    background: rgba(1, 0, 34, 0.76);
    box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(76, 78, 78));
    padding: 0;
  }
}
</style>
