import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">Menu</Link>
				</li>
				<li>
					<Link to="/">Reserve</Link>
				</li>
				<li>
					<Link to="/">Order Online</Link>
				</li>
				<li>
					<Link to="/">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
