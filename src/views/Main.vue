<template>
  <div class="mainView">
    321
    <Device />
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
}
</style>
