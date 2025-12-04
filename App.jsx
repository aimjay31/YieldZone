import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Home from './app/Home.jsx';
import Map from './app/Map.jsx';
import Following from './app/Following.jsx';
import Message from './app/Message.jsx';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import { LinearGradient } from 'expo-linear-gradient'; // make sure expo-linear-gradient is installed

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isLoading, setIsLoading] = useState(true);

  // --- Custom Loading Screen Timer ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // --- Simple Page Switcher ---
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home />;
      case 'Map': return <Map />;
      case 'Following': return <Following />;
      case 'Message': return <Message />;
      default: return <Home />;
    }
  };

  // --- Custom Splash Loading Screen ---
  if (isLoading) {
    return (
      <LinearGradient
        colors={['#159947', '#06373A']}
        style={styles.loadingContainer}
      >
        <Image 
          source={require('./assets/logo3.png')} 
          style={styles.loadingLogo}
          resizeMode="contain"
        />
        <Text style={styles.loadingText}>YieldZone</Text>
      </LinearGradient>
    );
  }

  return (
    <View style={styles.container}>
      <Header color="#159947" />

      <View style={styles.pageContent}>
        {renderPage()}
      </View>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageContent: { flex: 1, marginTop: 200 },

  // Loading screen styles
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingLogo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
