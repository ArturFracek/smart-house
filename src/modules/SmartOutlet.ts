import { deviceType, connectionType } from "./types";
import { SmartDeviceDetails } from "./SmartDeviceDetails";

export interface SmartOutletInterface {
  id?: string;
  type: deviceType;
  name: string;
  connectionState: connectionType;
  isTurnedOn: boolean;
  color: string;
  powerConsuption: number;
}

export class SmartOutlet extends SmartDeviceDetails {
  isTurnedOn: boolean;
  powerConsuption: number;
  constructor(outlet: SmartOutletInterface) {
    super({
      type: "outlet",
      id: outlet.id,
      name: outlet.name,
      connectionState: outlet.connectionState,
    });
    this.isTurnedOn = outlet.isTurnedOn;
    this.powerConsuption = outlet.powerConsuption;
  }
}
