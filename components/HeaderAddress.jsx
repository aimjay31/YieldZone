import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderAddress = ({ address = "123 Main Street Cagayan de Oro City" }) => {
  // Helper function to truncate text
  const truncateAddress = (text, maxLength = 25) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{truncateAddress(address)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#159947',
    alignItems: 'center',
    justifyContent: 'center',
    MarginTop: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
    opacity: 0.5,
  },
});

export default HeaderAddress;
