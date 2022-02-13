<template>
  <router-link :to="{ path: `/devices/${device.id}` }" class="device">
    <div class="device__property">{{ t[device.type] }}</div>
    <div class="device__property">{{ device.name }}</div>
    <div class="device__property">{{ device.connectionState }}</div>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    device: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.device {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: sandybrown;
  margin: 1%;
  align-items: center;
  width: 70vw;
  height: 5vh;
}
.device__property {
  background-color: salmon;
  white-space: nowrap;
}
</style>
