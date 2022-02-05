//Interfaces
interface SmartDeviceInterface {
  type: string;
  id: string;
  name: string;
  connectionState: string;
  isTurnedOn?: boolean;
  brightness?: number;
  color?: string;
  powerConsuption?: number;
  temperature?: number;
}

//Classes

class SmartDevice implements SmartDeviceInterface {
  type: string;
  id: string;
  name: string;
  connectionState: string;
  constructor(type: string, id: string, name: string, connectionState: string) {
    this.type = type;
    this.id = id;
    this.name = name;
    this.connectionState = connectionState;
  }
}

class SmartBulb extends SmartDevice {
  isTurnedOn: boolean;
  brightness: number;
  color: string;
  constructor(
    type: string,
    id: string,
    name: string,
    connectionState: string,
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
    type: string,
    id: string,
    name: string,
    connectionState: string,
    isTurnedOn: boolean,
    powerConsuption: number
  ) {
    super(type, id, name, connectionState);
    this.isTurnedOn = isTurnedOn;
    this.powerConsuption = powerConsuption;
  }
}
