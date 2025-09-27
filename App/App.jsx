import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Button from '../components/Button.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import { green, darkGreen } from '../constants/Colors.jsx';

export default function App() {
  return (
    <LinearGradient
      colors={[green, darkGreen]}
      style={styles.container}
      start={[0, 0]}
      end={[1, 1]}
    >
      <Text>YieldZone</Text>
      <Text style={styles.signup}>Sign Up</Text>
      <StatusBar style="auto" />
      <Button name="Button1" link="https://www.google.com" />
      <Button name="Button2" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    marginTop: 20,
  }
});