function uuid () {
  return Math.random()
}

export default [
  //Bulbs
  {
    type: "bulb",
    id: uuid(),
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
    id: uuid(),
    name: "Bulb in attic",
    connectionState: "poorConnection",
    isTurnedOn: true,
    brightness: 96,
    color: "blue",
  },
  {
    //turned off
    id: uuid(),
    name: "Bulb in livingroom",
    connectionState: "connected",
    isTurnedOn: false,
    brightness: 96,
    color: "green",
  },
  //Outlets
  {
    id: uuid(),
    name: "Outlet in kitchen",
    connectionState: "connected",
    isTurnedOn: true,
    powerConsuption: 30
  },
  {
    id: uuid(),
    name: "Outlet in attic",
    connectionState: "connected",
    isTurnedOn: false,
    powerConsuption: 28
  },
  {
    id: "4",
    type: "outlet",
    name: "Outlet in livingroom",
    connectionState: "poorConnection",
    isTurnedOn: true,
    powerConsuption: 25
  },
  //temperature sensors
  {
    id: uuid(),
    name: "Outlet in livingroom",
    connectionState: "connected",
    temperature: 22
  },
  {
    id: uuid(),
    name: "Outlet in attic",
    connectionState: "connected",
    temperature: 25
  },
  {
    id: uuid(),
    name: "Outlet in kitchen",
    connectionState: "poorConnection",
    temperature: 150
  },
]