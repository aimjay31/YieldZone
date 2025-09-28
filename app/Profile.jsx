import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page (No Header)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#444', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 18 },
});

export default Profile;
