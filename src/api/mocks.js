// import { v4 as uuidv4 } from 'uuid'; // Cant use it because it vary from id from the path to device after refresh
// So I need to use constant id
export default [
  //Bulbs
  {
    type: "bulb",
    id: "1",
    name: "Xiaomi - Toilet",
    connectionState: "connected",
    isTurnedOn: true,
    brightness: 60,
    color: "white",
  },
  {
    id: "2",
    type: "bulb",
    name: "Nous P3 - Living room",
    connectionState: "disconnected",
    isTurnedOn: true,
    brightness: 80,
    color: "red",
  },
  {
    id: "3",
    type: "bulb",
    name: "Philips Retro - Kitchen",
    connectionState: "poorConnection",
    isTurnedOn: true,
    brightness: 96,
    color: "blue",
  },
  {
    //turned off
    id: "4",
    type: "bulb",
    name: "Yeelight - Garage",
    connectionState: "connected",
    isTurnedOn: false,
    brightness: 96,
    color: "green",
  },
  //Outlets
  {
    id: "5",
    type: "outlet",
    name: "Xiaomi plug - Attic",
    connectionState: "connected",
    isTurnedOn: true,
    powerConsuption: 30,
  },
  {
    id: "6",
    type: "outlet",
    name: "Fibaro Walli - Corridor",
    connectionState: "connected",
    isTurnedOn: false,
    powerConsuption: 28,
  },
  {
    id: "7",
    type: "outlet",
    name: "Philips Hue - Kitchen",
    connectionState: "poorConnection",
    isTurnedOn: true,
    powerConsuption: 25,
  },
  //temperature sensors
  {
    id: "8",
    type: "temperatureSensor",
    name: "Xiaomi - Living room",
    connectionState: "connected",
    temperature: 22,
  },
  {
    id: "9",
    type: "temperatureSensor",
    name: "Aqara - Attic",
    connectionState: "connected",
    temperature: 25,
  },
  {
    id: "10",
    type: "temperatureSensor",
    name: "Xiaomi - Kitchen",
    connectionState: "poorConnection",
    temperature: 150,
  },
];
