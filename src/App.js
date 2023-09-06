import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="container">
      <div className="header-nav-container">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;