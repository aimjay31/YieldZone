import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');
const SLIDE_WIDTH = width * 0.8; // smaller than screen width
const SIDE_PADDING = (width - SLIDE_WIDTH) / 2; // padding to center slides

const BannerCarousel = () => {
  const slides = [
    { id: 1, text: 'Slide 1' },
    { id: 2, text: 'Slide 2' },
    { id: 3, text: 'Slide 3' },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // start with Slide 2

  useEffect(() => {
    // Scroll to the second slide on mount
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: SLIDE_WIDTH + 20, animated: false }); 
      // +20 to account for marginHorizontal
    }
  }, []);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (SLIDE_WIDTH + 20)); // calculate current slide
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SLIDE_WIDTH + 20} // width + margin
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Text style={styles.slideText}>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
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
    height: 220, // increased a little for dots
  },
  slide: {
    width: SLIDE_WIDTH,
    height: 200,
    backgroundColor: '#b2b2b2ff', // keep your color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  slideText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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
