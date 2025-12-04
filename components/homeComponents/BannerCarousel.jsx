import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const SLIDE_WIDTH = width * 0.8;
const SIDE_PADDING = (width - SLIDE_WIDTH) / 2;

const BannerCarousel = () => {
  
  const slides = [
    { id: 1, image: require('../../assets/Banner1.jpg') },
    { id: 2, image: require('../../assets/Banner2.jpg') },
    { id: 3, image: require('../../assets/Banner3.jpg') },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: SLIDE_WIDTH + 20, animated: false });
    }
  }, []);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (SLIDE_WIDTH + 20));
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SLIDE_WIDTH + 20}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Image source={slide.image} style={styles.bannerImage} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
  },
  slide: {
    width: SLIDE_WIDTH,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
    overflow: 'hidden', // IMPORTANT to round image corners
    backgroundColor: '#e0e0e0',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#00ff1aff',
  },
});

export default BannerCarousel;
