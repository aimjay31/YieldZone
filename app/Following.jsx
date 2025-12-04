import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FollowingCard from '../components/FollowingCard';

// Load all local images
const images = {
  grapes: require('../assets/grapes.png'),
  strawberry: require('../assets/strawberry.png'),
  pineapple: require('../assets/pineapple.png'),
  tomatoes: require('../assets/tomatoes.png'),
};

// Your data now references actual local images
const initialData = [
  { id: '1', name: 'Farm Fresh', image: images.grapes },
  { id: '2', name: 'Canoy Store', image: images.strawberry },
  { id: '3', name: 'Rice Hills', image: images.pineapple },
  { id: '4', name: 'Rice Store', image: images.tomatoes },
  { id: '5', name: 'Very Good Store', image: images.grapes },
  { id: '6', name: 'Palay Center', image: images.strawberry },
  { id: '7', name: 'Imagination Store', image: images.tomatoes },
];

const Following = () => {
  const [following, setFollowing] = useState(initialData);

  const handleUnfollow = (id) => {
    setFollowing(following.filter(item => item.id !== id));
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
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    color: '#159947',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Following;
