<template>
  <div class="mainView">
    <Modal v-if="$route.params.deviceId" @close="$router.push({ path: '/' })">
      <DeviceDetails :device="device" />
    </Modal>
    <button class="mainView__smartHouse" @click="$router.push({ path: '/' })">
      <i class="fa-solid fa-house-laptop"></i>
    </button>
    <div class="mainView__devicesContainer">
      <div class="mainView__deviceType mainView__deviceType--bulbs">
        <div class="mainView__header">
          <div class="mainView__header--typeHeader">Bulbs</div>
          <i class="fa-solid fa-lightbulb"></i>
        </div>
        <Device
          v-for="(device, index) in $options.filters.bulbs(devices)"
          :key="'Bulb' + index"
          :device="device"
        />
      </div>
      <div class="mainView__deviceType mainView__deviceType--outlets">
        <div class="mainView__header">
        <div class="mainView__header--typeHeader">Outlets</div> <i class="fa-solid fa-bolt-lightning"></i>
        </div>
        <Device
          v-for="(device, index) in $options.filters.outlets(devices)"
          :key="'Outlet' + index"
          :device="device"
        />
      </div>
      <div
        class="mainView__deviceType mainView__deviceType--temperatureSensors"
      >
      <div class="mainView__header">
        <div class="mainView__header--typeHeader">Temperature Sensors</div> <i class="fa-solid fa-temperature-half"></i>
        </div>
        <Device
          v-for="(device, index) in $options.filters.temperatureSensors(
            devices
          )"
          :key="'temperatureSensor' + index"
          :device="device"
        />
      </div>
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
        await this.loadDeviceById(deviceId);
        this.fetchDeviceInterval = setInterval(
          () => this.loadDeviceById(deviceId),
          3000
        ); // ciało funkcji

        console.log(deviceId);
        console.log(this.device);
      },
    },
  },
  methods: {
    async loadAllDevices() {
      this.devices = await fetchAllDevices();
    },
    async loadDeviceById(id) {
      this.device = await fetchDeviceById(id);
    },
  },
  async mounted() {
    await this.loadAllDevices();
    this.fetchDevicesInterval = setInterval(this.loadAllDevices, 3000);
  },
  beforeDestroy() {
    window.clearInterval(this.fetchDevicesInterval);
    window.clearInterval(this.fetchDeviceInterval);
  },
  filters: {
    bulbs: function (devices) {
      return devices.filter((d) => d.type == "bulb");
    },
    outlets: function (devices) {
      return devices.filter((d) => d.type == "outlet");
    },
    temperatureSensors: function (devices) {
      return devices.filter((d) => d.type == "temperatureSensor");
    },
  },
};
</script>

<style scoped>
.mainView {
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.mainView__devicesContainer {
  margin-top: 4vh;
  width: 80vw;
  display: flex;
  align-items: start;
  justify-content: center;
}
.mainView__smartHouse {
  width: 15vw;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px double black;
  background-color: transparent;
  border-radius: 6px;
}
.fa-house-laptop {
  font-size: 6vh;
  animation: onTrigger 0.5s;
  margin-bottom: 1vh;
}
.fa-house-laptop:hover,
.mainView__smartHouse:hover {
  color: rgb(206, 3, 3);
  border-color: rgb(206, 3, 3);
  cursor: pointer;
}
.mainView__header {
  display: flex;
  justify-content: center;
}
.mainView__header--typeHeader {
  font-size: 24px;
  font-weight: 800;
  padding-right: 6px;
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
    opacity: 0;
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
