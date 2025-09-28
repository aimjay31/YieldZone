import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import Header from '../components/Header.jsx';
import BannerCarousel from '../components/homeComponents/BannerCarousel.jsx';
import ProductCard from '../components/homeComponents/ProductCard.jsx';

const HEADER_HEIGHT = 180;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_MARGIN = 10;
const CARD_WIDTH = (SCREEN_WIDTH / 2) - (CARD_MARGIN * 3);

const products = [
  { id: '1', name: 'Fresh Apples', description: 'Organic red apples from the farm. Crisp and juicy.', image: require('../assets/icon.png') },
  { id: '2', name: 'Bananas', description: 'Fresh yellow bananas, sweet and soft.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '3', name: 'Carrots', description: 'Organic carrots, fresh from the soil.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '4', name: 'Tomatoes', description: 'Ripe red tomatoes, perfect for salads.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '5', name: 'Oranges', description: 'Juicy oranges full of vitamin C.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '6', name: 'Grapes', description: 'Fresh green grapes, sweet and seedless.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '7', name: 'Pineapples', description: 'Tropical pineapples, fresh and tangy.', image: { uri: 'https://via.placeholder.com/300x150' } },
  { id: '8', name: 'Strawberries', description: 'Red strawberries, perfect for desserts.', image: { uri: 'https://via.placeholder.com/300x150' } },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Header color="gray" cornerRadius={50} title="YieldZone" />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={[styles.listContent, { paddingTop: HEADER_HEIGHT + 20 }]} // start below header
        ListHeaderComponent={
          <>
            <View style={styles.bannerContainer}>
              <BannerCarousel />
            </View>
            <Text style={styles.text}>Welcome to the Home Page!</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard
              image={item.image}
              name={item.name}
              description={item.description}
              width={CARD_WIDTH} // dynamic width for two per row
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535353',
  },
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: 20,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
    margin: CARD_MARGIN,
  },
});

export default Home;
