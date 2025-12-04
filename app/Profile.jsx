import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = ({ onLogout }) => {
  // Static user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    location: 'Farmville, USA',
    profilePic: require('../assets/ProfileIcon.png'), // replace with real image if needed
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.avatarContainer}>
        <Image source={user.profilePic} style={styles.avatar} />
      </View>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{user.location}</Text>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff', // white background
    alignItems: 'center',
    paddingTop: 60,
  },
  avatarContainer: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#159947', // lighter green border
    borderRadius: 70,
    padding: 3,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    width: '85%',
    backgroundColor: '#159947', // green card
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#cde6e0',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutText: {
    color: '#159947',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
