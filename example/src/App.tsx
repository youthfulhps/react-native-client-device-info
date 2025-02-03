import { Text, View, StyleSheet } from 'react-native';
import { getDeviceName } from 'react-native-client-device-info';

export default function App() {
  const deviceName = getDeviceName();
  return (
    <View style={styles.container}>
      <Text>DeviceName: {deviceName}</Text>
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
