import React from "react";
import "./Footer.css";
import { ReactComponent as Lemon } from "../images/lemon.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-divide-1">
				<Lemon className="lemon" />
			</div>
			<div className="footer-divide-2">
				<h3>Contact</h3>
				<p>(123) 456 - 7890</p>
				<p>123 Lemon Drive</p>
				<p>Lemone, CA 94000</p>
				<p>contact@lemon.com</p>
			</div>
		</footer>
	);
};

export default Footer;
