import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const HeaderSearch = ({ placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#fff',
    elevation: 3, // adds shadow on Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    height: 45,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
  },
});

export default HeaderSearch;
