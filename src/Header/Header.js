import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LemonLogo } from '../images/Logo.svg';

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<LemonLogo className="LemonLogo" />
			</Link>
		</header>
	);
};

export default Header;
