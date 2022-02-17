<template>
  <div class="mainView">
    <Navigation />
    <Modal v-if="$route.params.deviceId" @close="$router.push({ path: '/' })">
      <DeviceDetails :device="device" />
    </Modal>
    <div class="mainView__devicesContainer">
      <div class="mainView__deviceType mainView__deviceType--bulbs">
        <div class="tile__header">
          <div class="tile__header--typeHeader">Bulbs</div>
          <i class="header-icon fa-solid fa-lightbulb"></i>
        </div>
        <DevicesTile :filteredDevices="$options.filters.bulbs(devices)" />
      </div>
      <div class="mainView__deviceType mainView__deviceType--outlets">
        <div class="tile__header">
          <div class="tile__header--typeHeader">Outlets</div>
          <i class="header-icon fa-solid fa-bolt-lightning"></i>
        </div>
        <DevicesTile :filteredDevices="$options.filters.outlets(devices)" />
      </div>
      <div
        class="mainView__deviceType mainView__deviceType--temperatureSensors"
      >
        <div class="tile__header">
          <div class="tile__header--typeHeader">Temperature Sensors</div>
          <i class="header-icon fa-solid fa-temperature-half"></i>
        </div>
        <DevicesTile
          :filteredDevices="$options.filters.temperatureSensors(devices)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import DevicesTile from "@/components/DevicesTile";
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
    Modal,
    DeviceDetails,
    DevicesTile,
    Navigation,
  },
  watch: {
    "$route.params.deviceId": {
      immediate: true,
      async handler(deviceId) {
        if (!deviceId) return;
        await this.loadDeviceById(deviceId);
        this.fetchDeviceInterval = setInterval(
          () => this.loadDeviceById(deviceId),
          3000
        );
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
    bulbs(devices) {
      return devices.filter((d) => d.type === "bulb");
    },
    outlets(devices) {
      return devices.filter((d) => d.type === "outlet");
    },
    temperatureSensors(devices) {
      return devices.filter((d) => d.type === "temperatureSensor");
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
.tile__header {
  display: flex;
  justify-content: start;
  padding: 0vh 2.5vh;
  position: relative;
}
.tile__header--typeHeader {
  font-size: 24px;
  font-weight: 800;
  padding-right: 6px;
}
.header-icon {
  position: absolute;
  right: 3vw;
}

@media (max-width: 850px) {
  .mainView__devicesContainer {
    flex-flow: column;
    align-items: center;
    margin-top: 15%;
  }
  .tile__header--typeHeader {
    font-size: 20px;
    font-weight: 800;
    padding-right: 6px;
  }
  .mainView__deviceType {
    margin-top: 2%;
  }
}
@media (max-width: 450px) {
  .mainView__devicesContainer {
    margin-top: 35%;
  }
}
</style>
