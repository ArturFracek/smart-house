<template>
  <div class="deviceDetails">
    <div class="deviceDetails__Title">
      <div class="device__data device__data--type">{{ t[device.type] }}</div>
      <i v-if="t[device.type] == 'Bulb'" class="fa-solid fa-lightbulb"></i>
      <i class="fa-duotone fa-temperature-quarter"></i>
      <font-awesome-icon icon="fa-thin fa-sensor-on" />
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
.fa-lightbulb {
  color: yellow;
}
.fa-temperature-quarter{
  color: red;
  font-size: 15px;
}
</style>
