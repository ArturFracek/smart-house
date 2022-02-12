<template>
  <div class="mainView">
    <Modal v-if="$route.params.deviceId" @close="$router.push({ path: '/' })">
      <DeviceDetails :device="device"/>
    </Modal>
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
import Modal from "@/components/Modal.vue";
import DeviceDetails from "@/components/DeviceDetails.vue";
import { fetchAllDevices, fetchDeviceById } from "@/api/index";

export default {
  data() {
    return {
      devices: [],
      device: null,
    };
  },
  components: {
    Device,
    Modal,
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
        this.device = await fetchDeviceById(deviceId); // ciało funkcji
        console.log(deviceId);
        console.log(this.device);
      },
    },
  },
  async mounted() {
    this.devices = await fetchAllDevices();
  },
};
</script>

<style scoped>
.mainView {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainView__devicesContainer {
  width: 80vw;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
