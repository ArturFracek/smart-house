<template>
  <div class="device">
    <div class="device__property">{{ capitalizeFirstLetter(device.type) }}</div>
    <div class="device__property">{{ device.name }}</div>
    <div class="device__property">{{ device.connectionState }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    device: {
      type: Object,
      required: false,
    },
  },
  methods: {
    capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style scoped>
.device {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: sandybrown;
  margin: 2%;
}
.device__property {
  background-color: salmon;
}
</style>
