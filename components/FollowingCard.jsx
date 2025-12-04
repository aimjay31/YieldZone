// components/FollowingCard.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FollowingCard = ({ name, image, onUnfollow }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={onUnfollow}>
          <Text style={styles.buttonText}>Unfollow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#59ce52ff',
    width: '100%',
    padding: 8,
    borderRadius: 20,
    marginBottom: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#005a16ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FollowingCard;
