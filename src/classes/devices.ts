//Interfaces and types
type deviceType = "bulb" | "outlet" | "temperatureSensor";
type connectionType = "connected" | "disconnected" | "poorConnection";
interface SmartDeviceInterface {
  type: deviceType;
  id: string;
  name: string;
  connectionState: connectionType;
  isTurnedOn?: boolean;
  brightness?: number;
  color?: string;
  powerConsuption?: number;
  temperature?: number;
}

//Classes

class SmartDevice implements SmartDeviceInterface {
  type: deviceType;
  id: string;
  name: string;
  connectionState: connectionType;
  isTurnedOn?: boolean;
  brightness?: number;
  color?: string;
  powerConsuption?: number;
  temperature?: number;

  constructor(
    type: deviceType,
    id: string,
    name: string,
    connectionState: connectionType,
    isTurnedOn?: boolean,
    brightness?: number,
    temperature?: number
  ) {
    this.type = type;
    this.id = id;
    this.name = name;
    this.connectionState = connectionState;
    this.isTurnedOn = isTurnedOn;
    this.brightness = brightness;
    this.temperature = temperature;
  }
}

class SmartBulb extends SmartDevice {
  isTurnedOn: boolean;
  brightness: number;
  color: string;
  constructor(
    type: deviceType,
    id: string,
    name: string,
    connectionState: connectionType,
    isTurnedOn: boolean,
    brightness: number,
    color: string
  ) {
    super(type, id, name, connectionState);
    this.isTurnedOn = isTurnedOn;
    this.brightness = brightness;
    this.color = color;
  }
}

class SmartOutlet extends SmartDevice {
  isTurnedOn: boolean;
  powerConsuption: number;
  constructor(
    type: deviceType,
    id: string,
    name: string,
    connectionState: connectionType,
    isTurnedOn: boolean,
    powerConsuption: number
  ) {
    super(type, id, name, connectionState);
    this.isTurnedOn = isTurnedOn;
    this.powerConsuption = powerConsuption;
  }
}

const bulb1 = new SmartBulb("bulb", Math.ceil(Math.random()*1000000).toString(), "bulb1", "connected", false, 95, "white");
