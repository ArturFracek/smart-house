<template>
  <div class="deviceDetails" v-if="device">
    <div class="deviceDetails__Title">
      <div class="device__title device__title--type">
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
      <div v-if="device.name" class="dataTile">
        <div class="device__dataType">Device</div>
        <div class="device__data device__data--name">{{ device.name }}</div>
      </div>
      <div v-if="device.connectionState" class="dataTile">
        <div class="device__dataType">Connection</div>
        <div class="device__data device__data--connectionState">
          {{ t[device.connectionState] }}
          <div
            class="device__data--connectionStateDot"
            :class="{
              connected: device.connectionState === 'connected',
              poorConnection: device.connectionState === 'poorConnection',
              disconnected: device.connectionState === 'disconnected',
            }"
          ></div>
        </div>
      </div>
      <div v-if="device.isTurnedOn" class="dataTile">
        <div class="device__dataType">State</div>
        <div class="device__data device__data--isTurnedOn">
          {{ device.isTurnedOn ? t["on"] : "off" }}
        </div>
      </div>
      <div v-if="device.brightness" class="dataTile">
        <div class="device__dataType">Brightness</div>
        <div class="device__data device__data--brightness">
          {{ device.brightness }}
        </div>
      </div>
      <div v-if="device.color" class="dataTile">
        <div class="device__dataType">Color</div>
        <div class="device__data device__data--color">{{ device.color }}</div>
      </div>
      <div v-if="device.powerConsuption" class="dataTile">
        <div class="device__dataType">Power consumption</div>
        <div class="device__data device__data--powerConsumption">
          {{ device.powerConsuption }} {{ t["wattUnit"] }}
        </div>
      </div>
      <div v-if="device.temperature" class="dataTile">
        <div class="device__dataType">Temperature</div>
        <div class="device__data device__data--temperature">
          {{ device.temperature }}&deg;C
        </div>
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
.deviceDetails {
  width: 100%;
  height: 100%;
}
.device__data--type {
  justify-self: start;
}
.fa-lightbulb,
.fa-bolt-lightning,
.fa-temperature-half {
  color: rgba(182, 178, 178, 0.822);
  font-size: 25px;
  text-shadow: 3px 3px 3px rgba(192, 194, 193, 0.609);
}

.deviceDetails__informations {
  margin-top: 2%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.dataTile {
  width: 28.3%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0% 2%;
  background-color: rgba(255, 255, 255, 0.993);
  box-shadow: 5px 10px 30px rgba(179, 179, 179, 0.438);
  border: 2px solid rgba(226, 226, 226, 0.685);
}
.device__dataType {
  color: rgba(93, 92, 92, 0.411);
  font-size: 16px;
}
.device__data {
  margin-top: 1%;
  font-size: 18px;
}
.device__data--connectionStateDot {
  position: absolute;
  margin-top: 0.4%;
  margin-left: 0.5%;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  justify-content: end;
}
@media ( max-width: 450px) {
.dataTile {
  width: 44%;
  height: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 0% 2%;
  background-color: rgba(255, 255, 255, 0.993);
  box-shadow: 5px 10px 30px rgba(179, 179, 179, 0.438);
  border: 2px solid rgba(226, 226, 226, 0.685);
}
}
</style>
