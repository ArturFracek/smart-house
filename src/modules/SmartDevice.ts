import { deviceType, connectionType } from "./types";

export interface SmartDeviceInterface {
  id?: string;
  type: deviceType;
  name: string;
  connectionState: connectionType;
  isTurnedOn?: boolean;
  brightness?: number;
  color?: string;
  temperature?: number;
}

export class SmartDevice implements SmartDeviceInterface {
  id?: string; // BE is responsible for setting ID
  type: deviceType;
  name: string;
  connectionState: connectionType;
  isTurnedOn?: boolean;
  brightness?: number;
  color?: string;
  temperature?: number;

  constructor(device: SmartDeviceInterface) {
    this.type = device.type;
    this.id = device.id;
    this.name = device.name;
    this.connectionState = device.connectionState;
    this.isTurnedOn = device.isTurnedOn;
    this.brightness = device.brightness;
    this.color = device.color;
    this.temperature = device.temperature;
    
  }
}
