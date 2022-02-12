// import { v4 as uuidv4 } from 'uuid'; // Cant use it because it vary from id from the path to device after refresh
// So I need to use constant id
export default [
  //Bulbs
  {
    type: "bulb",
    id: "1",
    name: "Bulb in kitchen",
    connectionState: "connected",
    isTurnedOn: true,
    brightness: 60,
    color: "white",
  },
  {
    id: "2",
    type: "bulb",
    name: "Bulb in toilet",
    connectionState: "disconnected",
    isTurnedOn: true,
    brightness: 80,
    color: "red",
  },
  {
    id: "3",
    type: "bulb",
    name: "Bulb in attic",
    connectionState: "poorConnection",
    isTurnedOn: true,
    brightness: 96,
    color: "blue",
  },
  {
    //turned off
    id: "4",
    type: "bulb",
    name: "Bulb in livingroom",
    connectionState: "connected",
    isTurnedOn: false,
    brightness: 96,
    color: "green",
  },
  //Outlets
  {
    id: "5",
    type: "outlet",
    name: "Outlet in kitchen",
    connectionState: "connected",
    isTurnedOn: true,
    powerConsuption: 30,
  },
  {
    id: "6",
    type: "outlet",
    name: "Outlet in attic",
    connectionState: "connected",
    isTurnedOn: false,
    powerConsuption: 28,
  },
  {
    id: "7",
    type: "outlet",
    name: "Outlet in livingroom",
    connectionState: "poorConnection",
    isTurnedOn: true,
    powerConsuption: 25,
  },
  //temperature sensors
  {
    id: "8",
    type: "temperatureSensor",
    name: "Temperature sensor in livingroom",
    connectionState: "connected",
    temperature: 22,
  },
  {
    id: "9",
    type: "temperatureSensor",
    name: "Temperature sensor in attic",
    connectionState: "connected",
    temperature: 25,
  },
  {
    id: "10",
    type: "temperatureSensor",
    name: "Temperature sensor in kitchen",
    connectionState: "poorConnection",
    temperature: 150,
  },
];
