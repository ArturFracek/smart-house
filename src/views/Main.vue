<template>
  <div class="mainView">
    <div class="mainView__devicesContainer">
      <Device
        v-for="(device, index) in devices"
        :key="index"
        :device="device"
      />
      <DeviceDetails :widget="widget" v-if="$route.params.deviceId" />
    </div>
  </div>
</template>

<script>
import Device from "@/components/Device.vue";
import DeviceDetails from "@/components/DeviceDetails.vue";
import { fetchAllDevices, fetchDeviceById } from "@/api/index";

export default {
  data() {
    return {
      devices: [],
      widget: null,
    };
  },
  components: {
    Device,
    DeviceDetails,
  },
  watch: {
    "$route.params.deviceId": {
      // co mam obserwować
      // "" dlatego że klucz z kropkami jest błędnym zapisem - vue ogarnia wtedy jak damy ""
      immediate: true, // true jezeli ma sie odpalic odrazu na mouted
      async handler(deviceId) {
        // handler to funcka która odpali się kiedy obserwowana wartosc sie zmieni ( wszystko z this., z $route, z vuexa) a lineId to Nowa wartosc po zmianie
        if (!deviceId) return;
        this.widget = await fetchDeviceById(deviceId); // ciało funkcji
        console.log(deviceId);
        console.log(this.widget);
      },
    },
  },
  async beforeMount() {
    const res = await fetchAllDevices();
    this.devices = res;
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
