import { fetchAllDevices } from '@/api';
<template>
  <router-link :to="{ path: `/devices/${device.id}` }" class="device">
    <div class="device__property device__property--name">{{ device.name }}</div>
    <div
      class="device__property device__property--connectionStateDot"
      :class="{
        connected: device.connectionState === 'connected',
        poorConnection: device.connectionState === 'poorConnection',
        disconnected: device.connectionState === 'disconnected',
      }"
    ></div>
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

<style>
.device {
  display: flex;
  justify-content: space-between;
  background-color: rgb(245, 245, 245);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1vh 2.5vh 2.5vh;
  align-items: center;
  width: 25vw;
  height: 5vh;
  padding: 8px 16px;
  border-radius: 8px;
  min-width: fit-content;
  background: white;
  text-decoration: none;
  position: relative;
  transition: all 250ms ease;
  font-size: 20px;
  font-weight: 500;
}
.device:hover {
  transform: scale(1.05)
}
.device__property {
  color: black;
}
.device__property--name {
  justify-self: start;
}
.device__property--connectionStateDot {
  position: absolute;
  right: 5%;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  justify-content: end;
}
.connected {
  background-color: rgb(108, 221, 108);
}
.poorConnection {
  background-color: rgb(235, 235, 18);
}
.disconnected {
  background-color: rgb(250, 16, 16);
}

@media ( max-width: 850px) {
  .device {
   margin: 1vh;
   font-size: 16px;
  width: 60vw;
  }
}
</style>
