import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { DeviceInfo } from './types';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  getDeviceInfo(): DeviceInfo;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ClientDeviceInfo');
