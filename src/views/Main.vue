<template>
  <div class="mainView">
    <div class="mainView__devicesContainer">
      <Device
        v-for="(device, index) in devices"
        :key="index"
        :device="device"
      />
    </div>
  </div>
</template>

<script>
import Device from "@/components/Device.vue";
import { fetchAllDevices } from "@/api/index";

export default {
  data() {
    return {
      devices: [],
    };
  },
  components: {
    Device,
  },
  async beforeMount() {
    const res = await fetchAllDevices();
    this.devices = res;
    console.log(res);
  },
};
</script>

<style scoped>
.mainView {
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
.mainView__devicesContainer {
width: 80vw;
}
</style>
