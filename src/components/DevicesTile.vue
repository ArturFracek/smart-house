<template>
  <div class="tile">
    <Device
      v-for="(device, index) in filteredDevices"
      :key="'temperatureSensor' + index"
      :device="device"
    />
  </div>
</template>

<script>
import Device from "@/components/Device.vue";
export default {
  props: {
    filteredDevices: {
      type: Array,
      required: false,
    },
  },
  components: {
    Device,
  },
};
</script>

<style>

</style>
