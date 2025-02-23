import ClientDeviceInfo from './NativeClientDeviceInfo';

export function getDeviceName(): string {
  return ClientDeviceInfo.getDeviceName();
}

export function getApplicationName(): string {
  return ClientDeviceInfo.getApplicationName();
}
