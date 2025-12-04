import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Home from './app/Home.jsx';
import Map from './app/Map.jsx';
import Following from './app/Following.jsx';
import Messages from './app/Messages.jsx';
import UserMessages from './app/UserMessages.jsx';
import Profile from './app/Profile.jsx';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import Login from './app/Login.jsx';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('Home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home />;
      case 'Map': return <Map />;
      case 'Following': return <Following />;
      case 'Message':
        return <Messages setCurrentPage={setCurrentPage} setCurrentChat={setCurrentChat} />;
      case 'UserMessages':
        return <UserMessages chat={currentChat} goBack={() => setCurrentPage('Message')} />;
      case 'Profile': return <Profile onLogout={handleLogout} />;
      default: return <Home />;
    }
  };

  if (isLoading) {
    return (
      <LinearGradient colors={['#159947', '#06373A']} style={styles.loadingContainer}>
        <Image source={require('./assets/logo3.png')} style={styles.loadingLogo} resizeMode="contain" />
        <Text style={styles.loadingText}>YieldZone</Text>
      </LinearGradient>
    );
  }

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <View style={styles.container}>
      <Header color="#159947" setCurrentPage={setCurrentPage} />
      <View style={styles.pageContent}>{renderPage()}</View>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageContent: { flex: 1, marginTop: 140 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingLogo: { width: 180, height: 180, marginBottom: 20 },
  loadingText: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 10 },
});
