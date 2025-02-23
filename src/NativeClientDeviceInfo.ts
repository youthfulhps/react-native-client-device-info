import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getDeviceName(): string;
  getApplicationName(): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ClientDeviceInfo');
