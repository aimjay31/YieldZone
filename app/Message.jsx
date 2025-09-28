import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#444', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 18 },
});

export default Message;
