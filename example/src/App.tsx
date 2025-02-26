import { Text, View, StyleSheet } from 'react-native';
import {
  getDeviceName,
  getApplicationName,
} from 'react-native-client-device-info';

export default function App() {
  const deviceName = getDeviceName();
  const appName = getApplicationName();
  return (
    <View style={styles.container}>
      <Text>DeviceName: {deviceName}</Text>
      <Text>AppName: {appName}</Text>
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
