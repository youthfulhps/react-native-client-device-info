import { Text, View, StyleSheet } from 'react-native';
import {
  getDeviceName,
  getApplicationName,
  getBuildNumber,
} from 'react-native-client-device-info';

export default function App() {
  const deviceName = getDeviceName();
  const appName = getApplicationName();
  const buildNumber = getBuildNumber();
  return (
    <View style={styles.container}>
      <Text>DeviceName: {deviceName}</Text>
      <Text>AppName: {appName}</Text>
      <Text>BuildNumber: {buildNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
