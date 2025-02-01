import ClientDeviceInfo from './NativeClientDeviceInfo';
import type { DeviceInfo } from './types';

export function multiply(a: number, b: number): number {
  return ClientDeviceInfo.multiply(a, b);
}

export function getDeviceInfo(): DeviceInfo {
  return ClientDeviceInfo.getDeviceInfo();
}
