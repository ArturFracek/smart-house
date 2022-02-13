<template>
  <div class="mainView">
    <Modal v-if="$route.params.deviceId" @close="$router.push({ path: '/' })">
      <DeviceDetails :device="device" />
    </Modal>
    <div class="mainView__devicesContainer">
      <div class="smartHouse" @click="$router.push({ path: '/' })">
        <i class="fa-solid fa-house-laptop"></i>
      </div>
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
      fetchDevicesInterval: null,
      fetchDeviceInterval: null,
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
        this.fetchDeviceInterval = setInterval(
          (this.device = await fetchDeviceById(deviceId)),
          3000
        ); // ciało funkcji

        console.log(deviceId);
        console.log(this.device);
      },
    },
  },
  async mounted() {
    this.fetchDevicesInterval = setInterval(
      (this.devices = await fetchAllDevices()),
      3000
    );
  },
  beforeDestroy() {
    window.clearInterval(this.fetchDevicesInterval);
    window.clearInterval(this.fetchDeviceInterval);
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
.fa-house-laptop{
  font-size: 6vh;
  animation: onTrigger 0.5s;
}
.fa-house-laptop:hover{
  color: rgb(206, 3, 3);
}

@keyframes onTrigger {
  0% {
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 9.6px 0px 12.8px turquoise, -9.6px 0px 12.8px turquoise,
      0px 9.6px 12.8px turquoise, 0px -9.6px 12.8px turquoise;
    filter: hue-rotate(0deg);
  }
  20% {
    opacity: 0.;
    filter: hue-rotate(0deg);
  }
  70% {
    opacity: 1;
    text-shadow: 4.8px 0px 12.8px turquoise, -4.8px 0px 12.8px turquoise,
      0px 4.8px 12.8px turquoise, 0px -4.8px 12.8px turquoise;
    filter: hue-rotate(120deg);
  }
  80% {
    opacity: 1;
    text-shadow: 3.2px 0px 22.4px turquoise, -3.2px 0px 22.4px turquoise,
      0px 3.2px 1.4em turquoise, 0px -3.2px 22.4px turquoise;
    filter: hue-rotate(120deg);
  }
  100% {
    opacity: 1;
    text-shadow: 3.2px 0px 3.2px turquoise;
    filter: hue-rotate(0deg);
  }
}

</style>
