import mocks from "./mocks";
import { SmartDevice } from "@/modules/SmartDevice";
import { SmartDeviceDetails } from "@/modules/SmartDeviceDetails";
import { SmartBulb } from "@/modules/SmartBulb";
import { SmartOutlet } from "@/modules/SmartOutlet";
import { SmartTemperatureSensor } from "@/modules/SmartTemperatureSensor";

export function fetchAllDevices(): Promise<SmartDevice[]> {
  return Promise.resolve(mocks.map((device: any) => new SmartDevice(device)));
}

export function fetchDeviceById(
  id: string
): Promise<SmartDeviceDetails | null> {
  const payload = mocks.find((device: any) => device.id === id);
  return Promise.resolve(_mapPayloadToDevice(payload));
}

function _mapPayloadToDevice(payload: any): SmartDeviceDetails | null {
  if (!payload) return null;
  switch (payload.type) {
    case "bulb":
      return new SmartBulb(payload);
    case "temperatureSensor":
      return new SmartTemperatureSensor(payload);
    case "outlet":
      return new SmartOutlet(payload);
    default:
      throw new Error("Unknown type");
  }
}
