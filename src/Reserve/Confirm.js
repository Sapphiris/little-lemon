import React from "react";
import "./Reserve.css";
import { Link } from "react-router-dom";

const Confirm = () => {
	return (
		<section className="reserve">
			<h1>Successfully Reserved!</h1>
			<Link to="/">
				<button>Home</button>
			</Link>
		</section>
	);
};

export default Confirm;
