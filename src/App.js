import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;