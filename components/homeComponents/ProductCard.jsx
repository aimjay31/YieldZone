import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ image, name, description, width = 185 }) => {
  return (
    <View style={[styles.card, { width }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        {/* ⭐ Tiny star at the top-right corner */}
        <View style={styles.starContainer}>
          <Text style={styles.star}>★</Text>
        </View>

        {/* Name overlay */}
        <View style={styles.nameOverlay}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>

      {/* Description below image */}
      <View style={styles.textContainer}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: '#333',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    height: 120,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },

  /* ⭐ STAR STYLE */
  starContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 6,
  },
  star: {
    color: '#FFD700', // bright yellow
    fontSize: 14,
    fontWeight: 'bold',
  },

  nameOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 8,
    alignItems: 'center',
  },
  nameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textContainer: {
    padding: 10,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProductCard;
