// app/Messages.jsx
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MessageCard from '../components/MessageCard';

const initialMessages = [
  {
    id: '1',
    name: 'Farm Fresh',
    message: 'Hey, are the rice still available?',
    time: '10:24 AM',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Canoy Store',
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

const Messages = ({ setCurrentPage, setCurrentChat }) => {
  const [messages] = useState(initialMessages);

  const handleOpenChat = (chat) => {
    setCurrentChat(chat);       // store selected chat
    setCurrentPage('UserMessages'); // navigate to UserMessages page
  };

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
            onPress={() => handleOpenChat(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export default Messages;
