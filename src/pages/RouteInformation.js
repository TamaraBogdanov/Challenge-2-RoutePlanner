import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { mockRoutes } from "../mockData";
import { useCart } from "../contexts/CartContext";

function RouteInformationPage() {
	const { routeId } = useParams();
	//extract parameters from routeID
	const navigate = useNavigate();
	//use navugate hook used to navigate through different pages based on ui
	const { addToCart } = useCart();
	//uses custom usecart hook defined in cartcontext.js to access the add to cart function

	const route = mockRoutes.find((route) => route.id === routeId);
	//iterates over routes in mockroutes, returns object when route id matches id.
	//allows the component to access details about the specific route being viewed.

	//added in case route selected is non existant.
	if (!route) {
		return <div>Route not found</div>;
	}

	function handlePurchaseTicket() {
		addToCart(route);
		//adds specific route to cart
		navigate("/ticket-purchase");
		//redirects user to ticket purchase
	}

	return (
		<div>
			<Link to="/">Back</Link>
			{/*Link back to homepage ("/") */}
			<h1>{route.title}</h1>
			<p>Duration: {route.duration}</p>
			<p>Stops: {route.stops}</p>
			<p>Price: ${route.price.toFixed(2)}</p>
			{/*display price with two decimal points, added this in to better resemble pricing points*/}
			<p>{route.description}</p>
			{/*props used to display specific route information*/}
			<button onClick={handlePurchaseTicket}>Purchase Ticket</button>
			{/*On click runs through the handleticket function which adds the selected route to the Ticket Purchase Page as well as redirects the user there.*/}
		</div>
	);
}

export default RouteInformationPage;
