import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderAddress from './HeaderAddress';
import HeaderSearch from './HeaderSearch';

const HEADER_HEIGHT = 200;
const BORDER_RADIUS = 40;

const Header = ({ color = 'gray' }) => {
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
      {/* Logo and Profile row */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.profile}>Profile</Text>
      </View>

      {/* Address in center instead of YieldZone */}
      <View style={styles.centerContent}>
        <HeaderAddress />
      </View>

      {/* Search bar at bottom */}
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
    paddingTop: 15,
    justifyContent: 'space-between',
    backgroundColor: '#159947',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  profile: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  logo: { color: '#fff', 
    fontWeight: 'bold' 
  },

  // address is now in the middle
  centerContent: {
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 0,
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 5,

  },
});

export default Header;
export { HEADER_HEIGHT };
