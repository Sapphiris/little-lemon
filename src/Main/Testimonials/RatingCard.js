import React from "react";
import star from "../../images/star.png";

const RatingCard = ({ imageSrc, altText, ratingName, ratingDescription }) => {
	return (
		<article className="rating-cards">
			<img className="rating-stars" src={star} alt="star" />
			<img className="rating-img" src={imageSrc} alt={altText} />
			<h3 className="rating-name">{ratingName}</h3>
			<p className="rating-description">{ratingDescription}</p>
		</article>
	);
};

export default RatingCard;
