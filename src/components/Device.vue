import { fetchAllDevices } from '@/api';
<template>
  <router-link :to="{ path: `/devices/${device.id}` }" class="device">
    <div class="device__property device__property--name">{{ device.name }}</div>
    <div
      class="device__property device__property--connectionStateDot"
      :class="{
        connected: device.connectionState == 'connected',
        poorConnection: device.connectionState == 'poorConnection',
        disconnected: device.connectionState == 'disconnected',
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

<style scoped>
.device {
  display: flex;
  justify-content: space-around;
  background-color: rgb(245, 245, 245);
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.342);
  margin: 1vh 2.5vh 2.5vh;
  align-items: center;
  width: 25vw;
  height: 5vh;
  padding: 3%;
  min-width: fit-content;
  background: none;
  backdrop-filter: blur(10px)
    drop-shadow(0px 0px 5px rgba(165, 164, 164, 0.993));
  text-decoration: none;
}
.device__property {
  color: black;
}
.device__property--name {
  justify-self: center;
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
</style>
