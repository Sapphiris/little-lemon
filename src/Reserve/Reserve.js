import React, { useState } from "react";
import "./Reserve.css";
import { Link } from "react-router-dom";

const Reserve = () => {
	// Define state variables for form fields
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Birthday");

	// Define available times as a state variable
	const [availableTimes] = useState([
		"10:00 AM",
		"11:00 AM",
		"12:00 PM",
		"1:00 PM",
		"2:00 PM",
		"3:00 PM",
		"4:00 PM",
		"5:00 PM",
		"6:00 PM",
		"7:00 PM",
		"8:00 PM",
		"9:00 PM",
		"10:00 PM",
	]);

	return (
		<section className="reserve">
			<h1>Reserve</h1>
			<form className="reserve-form">
				<label htmlFor="res-date">Date</label>
				<input
					type="date"
					id="res-date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<label htmlFor="res-time">Time</label>
				<select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
					{availableTimes.map((availableTime) => (
						<option key={availableTime} value={availableTime}>
							{availableTime}
						</option>
					))}
				</select>
				<label htmlFor="guests"># of Guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					value={guests}
					onChange={(e) => setGuests(parseInt(e.target.value))}
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={occasion}
					onChange={(e) => setOccasion(e.target.value)}
				>
					<option value="Birthday">Birthday</option>
					<option value="Anniversary">Anniversary</option>
					<option value="Other">Other</option>
				</select>
				<Link to="/confirm">
					<button type="submit">Submit</button>
				</Link>
			</form>
		</section>
	);
};

export default Reserve;
