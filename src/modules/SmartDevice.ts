import { deviceType, connectionType } from "./types";

export interface SmartDeviceInterface {
  id?: string;
  type: deviceType;
  name: string;
  connectionState: connectionType;
}

export class SmartDevice implements SmartDeviceInterface {
  id?: string; // BE is responsible for setting ID
  type: deviceType;
  name: string;
  connectionState: connectionType;

  constructor(device: SmartDeviceInterface) {
    this.type = device.type;
    this.id = device.id;
    this.name = device.name;
    this.connectionState = device.connectionState; 
  }
}
