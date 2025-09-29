// components/MessageCard.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MessageCard = ({ name, message, time, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Avatar */}
      <Image source={{ uri: image }} style={styles.avatar} />

      {/* Name + Message */}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>

      {/* Time */}
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#535353',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#777',
    paddingBottom: 8,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
  time: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 6,
  },
});

export default MessageCard;
