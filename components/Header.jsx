import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderAddress from './HeaderAddress';
import HeaderSearch from './HeaderSearch';

const HEADER_HEIGHT = 140;
const BORDER_RADIUS = 50;

const Header = ({ color = '#159947', setCurrentPage }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          height: HEADER_HEIGHT,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        },
      ]}
    >
      {/* Top Row: Logo + Profile */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>YieldZone</Text>
        <TouchableOpacity onPress={() => setCurrentPage('Profile')}>
          <Image
            source={require('../assets/ProfileIcon.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>

      </View>

      {/* Center Row: Address */}
      <View style={styles.centerContent}>
        <HeaderAddress />
      </View>

      {/* Bottom Row: Search Bar */}
      <View style={styles.searchContainer}>
        <HeaderSearch placeholder="Search for farms, rice..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingTop: 20,
    justifyContent: 'space-between',
    backgroundColor: '#159947',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // for Android shadow
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  centerContent: {
    alignItems: 'center',
    marginVertical: 0,
  },
  searchContainer: {
    marginBottom: 10,
  },
});

export default Header;
export { HEADER_HEIGHT };
