import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const buttons = ['Home', 'Map', 'Following', 'Message'];

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
    backgroundColor: '#333',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    padding: 10,
  },
  text: {
    color: '#aaa',
  },
  activeButton: {},
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Navigation;
