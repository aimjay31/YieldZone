import React, { useState } from 'react';
import Home from './app/Home.jsx';
import Map from './app/Map.jsx';
import Following from './app/Following.jsx';
import Profile from './app/Profile.jsx';
import Navigation from './components/Navigation.jsx';
import Message from './app/Message.jsx';

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
    <>
      {renderPage()}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}
