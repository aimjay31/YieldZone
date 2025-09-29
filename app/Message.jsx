// app/Messages.jsx
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MessageCard from '../components/MessageCard';

const initialMessages = [
  {
    id: '1',
    name: 'Alice Johnson',
    message: 'Hey, are the rice still available?',
    time: '10:24 AM',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Bob Smith',
    message: 'Thanks sa pag deliver!',
    time: 'Yesterday',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Strawberry Hills',
    message: 'Mag restock mi ug rice sir sa friday.',
    time: 'Mon',
    image: 'https://via.placeholder.com/100',
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageCard
            name={item.name}
            message={item.message}
            time={item.time}
            image={item.image}
            onPress={() => console.log('Open chat with', item.name)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export default Messages;
