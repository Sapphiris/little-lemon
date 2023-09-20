import React from "react";
import "./Testimonials.css";
import RatingCard from "./RatingCard.js";

import craig from "../../images/craig.png";
import tina from "../../images/tina.png";
import michael from "../../images/michael.png";
import albert from "../../images/albert.png";
import ruby from "../../images/ruby.png";

const ratingItems = [
	{
		imageSrc: craig,
		altText: "Craig",
		ratingName: "Craig",
		ratingDescription: `"The vibes were perfect!"`,
	},
	{
		imageSrc: tina,
		altText: "Tina",
		ratingName: "Tina",
		ratingDescription: `"Wow. Love the salad."`,
	},
	{
		imageSrc: michael,
		altText: "Michael",
		ratingName: "Michael",
		ratingDescription: `"My family comes here every day."`,
	},
	{
		imageSrc: albert,
		altText: "Albert",
		ratingName: "Albert",
		ratingDescription: `"What exquisite taste!"`,
	},
	{
		imageSrc: ruby,
		altText: "Ruby",
		ratingName: "Ruby",
		ratingDescription: `"The service was very smooth."`,
	},
];

const Testimonials = () => {
	return (
		<section className="testimonials">
			<h1>Testimonials</h1>
			<div className="testimonial-cards">
				{ratingItems.map((rating, index) => (
					<RatingCard
						key={index}
						imageSrc={rating.imageSrc}
						altText={rating.altText}
						ratingName={rating.ratingName}
						ratingDescription={rating.ratingDescription}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
