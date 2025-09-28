import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header.jsx';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header color="gray" cornerRadius={50} title="YieldZone" />
      <View style={styles.content}>
        <Text style={styles.text}>following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535353',
    paddingTop: 120, // space for header
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Home;
