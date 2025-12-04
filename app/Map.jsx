import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

const Map = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ScrollView
        maximumZoomScale={3}
        minimumZoomScale={1}
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pinchGestureEnabled={true}
      >
        <Image
          source={require('../assets/staticMap.png')} // replace with your map image
          style={{ width: width * 2, height: height * 2 }} // make it larger for panning
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Map;
