import Joi from "joi";
import { connectionType } from "./types";
import { SmartDeviceDetails } from "./SmartDeviceDetails";

export interface SmartBulbInterface {
  id?: string;
  name: string;
  connectionState: connectionType;
  isTurnedOn: boolean;
  brightness: number;
  color: string;
}

const BulbBrigtnessValidator = Joi.number().integer().min(0).max(100)

export class SmartBulb extends SmartDeviceDetails {
  isTurnedOn: boolean;
  brightness: number;
  color: string;
  constructor(bulb: SmartBulbInterface) {
    super({
      type: "bulb",
      id: bulb.id,
      name: bulb.name,
      connectionState: bulb.connectionState,
    });
    this.isTurnedOn = bulb.isTurnedOn;
    this.brightness = Joi.attempt(bulb.brightness, BulbBrigtnessValidator);
    this.color = bulb.color;
  }
}
