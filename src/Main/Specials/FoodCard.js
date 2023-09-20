import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ imageSrc, altText, foodName, foodPrice, foodDescription }) => {
	return (
		<article className="food-cards">
			<img src={imageSrc} alt={altText} />
			<div className="food-description">
				<div className="food-name-price">
					<h3 className="food-name">{foodName}</h3>
					<h3 className="food-price">{foodPrice}</h3>
				</div>
				<p className="food-description-text">{foodDescription}</p>
				<Link to="/">
					<p className="order-delivery">Order a delivery →</p>
				</Link>
			</div>
		</article>
	);
};

export default FoodCard;
