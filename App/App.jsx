import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>YieldZone</Text>
      <StatusBar style="auto" />
      <Button name = "Button" link = "https://www.google.com"/>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});