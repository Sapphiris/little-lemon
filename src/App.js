import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Main from './Main/Main.js';
import Reserve from './Reserve/Reserve';
import Confirm from './Reserve/Confirm';
import Footer from './Footer/Footer.js';

function App() {
	return (
		<div className="container">
			<div className="header-nav-container">
				<Header />
				<Nav />
			</div>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/reserve" element={<Reserve />} />
				<Route path="/confirm" element={<Confirm />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
