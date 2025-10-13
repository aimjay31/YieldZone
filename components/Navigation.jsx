import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const buttons = ['Home', 'Map', 'Following', 'Message'];

  const icons = {
    Home: require('../assets/Home (1).png'),
    Map: require('../assets/Map.png'),
    Following: require('../assets/Following.png'),
    Message: require('../assets/Message.png'),
  };

  return (
    <View style={styles.container}>
      {buttons.map((btn) => (
        <TouchableOpacity
          key={btn}
          style={[
            styles.button,
            currentPage === btn && styles.activeButton,
          ]}
          onPress={() => setCurrentPage(btn)}
        >
          <Image
            source={icons[btn]}
            style={[
              styles.icon,
              currentPage === btn && styles.activeIcon,
            ]}
          />
          <Text
            style={[
              styles.text,
              currentPage === btn && styles.activeText,
            ]}
          >
            {btn}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#159947',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#000000ff',
    marginBottom: 4,
  },
  activeIcon: {
    tintColor: '#64ffa0ff', // color when active
  },
  text: {
    color: '#000000ff',
    fontWeight: 'bold',
  },
  activeButton: {},
  activeText: {
    color: '#64ffa0ff',
    fontWeight: 'bold',
  },
});

export default Navigation;
