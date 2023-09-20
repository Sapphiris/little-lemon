import React from 'react';
import './Intro.css';
import food1 from '../../images/food1.jpg';

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro-divide">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family-owned Mediterranean restaurant, focused on traditional recipes
					served with a modern twist.
				</p>
				<button>Reserve a Table</button>
			</div>
			<img src={food1} alt="Bread"></img>
		</section>
	);
};

export default Intro;
