import React from "react";
import { Link } from "react-router-dom";

//Navbar with two links and styling applied.
function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li>
					<Link to="/">Available Routes</Link>
				</li>
				<li>
					<Link to="/ticket-purchase">Ticket Purchase</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
