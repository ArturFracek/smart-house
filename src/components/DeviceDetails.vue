<template>
  <div class="deviceDetails">
    <div class="deviceDetails__Title">
      <div class="device__data device__data--type">
         <i v-if="t[device.type] == 'Bulb'" class="fa-solid fa-lightbulb"></i>
        <i
          v-if="t[device.type] == 'Outlet'"
          class="fa-solid fa-bolt-lightning"
        ></i>
        <i
          v-if="t[device.type] == 'Temperature Sensor'"
          class="fa-solid fa-temperature-half"
        ></i>
        <!--  -->
        {{ t[device.type] }}
        <!--  -->
        <i v-if="t[device.type] == 'Bulb'" class="fa-solid fa-lightbulb"></i>
        <i
          v-if="t[device.type] == 'Outlet'"
          class="fa-solid fa-bolt-lightning"
        ></i>
        <i
          v-if="t[device.type] == 'Temperature Sensor'"
          class="fa-solid fa-temperature-half"
        ></i>
      </div>
    </div>
    <div class="deviceDetails__informations">
      <div class="device__data device__data--name">{{ device.name }}</div>
      <div class="device__data device__data--connectionState">
        {{ device.connectionState }}
      </div>
      <div class="device__data device__data--isTurnedOn">
        {{ device.isTurnedOn }}
      </div>
      <div class="device__data device__data--brightness">
        {{ device.brightness }}
      </div>
      <div class="device__data device__data--color">{{ device.color }}</div>
      <div class="device__data device__data--powerConsumption">
        {{ device.powerConsuption }}
      </div>
      <div class="device__data device__data--temperature">
        {{ device.temperature }}
      </div>
    </div>
  </div>
</template>

<script>
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
.device__data--type {
  justify-self: start;
}
.fa-lightbulb {
  color: yellow;
}
.fa-bolt-lightning {
  color: red;
}
.fa-temperature-half {
  color: blue;
}

.deviceDetails__informations{
  display: flex;
  margin-top: auto;
}
</style>
