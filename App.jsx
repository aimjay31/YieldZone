import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './app/Home.jsx';
import Map from './app/Map.jsx';
import Following from './app/Following.jsx';
import Message from './app/Message.jsx';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // simple page switcher
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Map':
        return <Map />;
      case 'Following':
        return <Following />;
      case 'Message':
        return <Message />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      <Header color="#159947"/>

      <View style={styles.pageContent}>
        {renderPage()}
      </View>

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageContent: { flex: 1, marginTop: 200,
   }, // space for header
});
