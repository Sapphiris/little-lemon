import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import food1 from "../../images/food1.jpg";

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
				<Link to="/reserve">
					<button>Reserve a Table</button>
				</Link>
			</div>
			<img src={food1} alt="Bread" />
		</section>
	);
};

export default Intro;
