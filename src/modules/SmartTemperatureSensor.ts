import { deviceType, connectionType } from "./types";
import { SmartDeviceDetails } from "./SmartDeviceDetails";

export interface SmartTemperatureSensorInterface {
  id?: string;
  type: deviceType;
  name: string;
  connectionState: connectionType;
  temperature: number;
}

export class SmartTemperatureSensor extends SmartDeviceDetails {
  temperature: number
  constructor(temperatureSensor: SmartTemperatureSensorInterface) {
    super({
      type: "temperatureSensor",
      id: temperatureSensor.id,
      name: temperatureSensor.name,
      connectionState: temperatureSensor.connectionState,
    });
    this.temperature = temperatureSensor.temperature;
  }
}
