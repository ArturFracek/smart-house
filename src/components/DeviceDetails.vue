<template>
  <div class="deviceDetails__draggable">{{ widget }}</div>
</template>

<script>
import interact from "interactjs";
let position = { x: 0, y: 0 };

interact(".deviceDetails__draggable").draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    },
  },
});
export default {
  props: {
    widget: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style>
.deviceDetails__draggable {
  position: absolute;
  width: 25%;
  min-height: 6.5em;
  background-color: #29e;
  color: white;
  border-radius: 0.75em;
  padding: 4%;
  touch-action: none;
  user-select: none;
}
</style>
