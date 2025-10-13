import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FollowingCard from '../components/FollowingCard';

const initialData = [
  { id: '1', name: 'Farm Fresh', image:'./assets/icon.png' },
  { id: '2', name: 'Canoy Store', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Rice Hills', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Rice Store', image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'Very Good Store', image: 'https://via.placeholder.com/100' },
  { id: '6', name: 'Palay Center', image: 'https://via.placeholder.com/100' },
  { id: '7', name: 'Imagination Store', image: 'https://via.placeholder.com/100' },
];

const Following = () => {
  const [following, setFollowing] = useState(initialData);

  const handleUnfollow = (id) => {
    setFollowing(following.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Following</Text>
      <FlatList
        data={following}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FollowingCard
            name={item.name}
            image={item.image}
            onUnfollow={() => handleUnfollow(item.id)}
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
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Following;
