import React from "react";
import "./Specials.css";
import FoodCard from "./FoodCard.js";
import { Link } from "react-router-dom";

import salad from "../../images/salad.jpg";
import bruschetta from "../../images/bruchetta.jpg";
import cake from "../../images/cake.jpg";
import chicken from "../../images/chicken.png";
import stew from "../../images/stew.png";

const foodItems = [
	{
		imageSrc: salad,
		altText: "Salad",
		foodName: "Greek salad",
		foodPrice: "$12.99",
		foodDescription:
			"The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
	},
	{
		imageSrc: bruschetta,
		altText: "Bruschetta",
		foodName: "Bruschetta",
		foodPrice: "$5.99",
		foodDescription:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
	},
	{
		imageSrc: cake,
		altText: "Cake",
		foodName: "Lemon Dessert",
		foodPrice: "$4.99",
		foodDescription:
			"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
	},
	{
		imageSrc: chicken,
		altText: "Chicken",
		foodName: "Provençal",
		foodPrice: "$14.99",
		foodDescription:
			"With bold sun-kissed flavors, this classic Chicken Provençal is an uncomplicated recipe reminiscing of warm summers in the South of France.",
	},
	{
		imageSrc: stew,
		altText: "Stew",
		foodName: "Fish Stew",
		foodPrice: "$13.99",
		foodDescription:
			"This Portuguese fish stew is a traditional stew consisting of a wide variety of fish and potatoes, along with other ingredients.",
	},
];

const Specials = () => {
	return (
		<section className="specials">
			<div className="specials-heading">
				<h1>Specials</h1>
				<Link to="/">
					<button>Online Menu</button>
				</Link>
			</div>
			<div className="specials-cards">
				{foodItems.map((food, index) => (
					<FoodCard
						key={index}
						imageSrc={food.imageSrc}
						altText={food.altText}
						foodName={food.foodName}
						foodPrice={food.foodPrice}
						foodDescription={food.foodDescription}
					/>
				))}
			</div>
		</section>
	);
};

export default Specials;
