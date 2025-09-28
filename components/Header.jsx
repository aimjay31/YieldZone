import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderAddress from './HeaderAddress';
import HeaderSearch from './HeaderSearch';

const Header = ({ color = 'gray' }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      
      {/* HeaderAddress at the top */}
      <View style={styles.addressContainer}>
        <HeaderAddress />
      </View>

      {/* Profile and Logo row */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.profile}>Profile</Text>
      </View>

      {/* Search bar at the bottom */}
      <View style={styles.searchContainer}>
        <HeaderSearch placeholder="Search for farms, products, rice..." />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  addressContainer: {
    position: 'absolute',
    top: 40,
    width: '100%',
    alignItems: 'center',
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40, // space below address
    paddingHorizontal: 15,
  },
  profile: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default Header;
