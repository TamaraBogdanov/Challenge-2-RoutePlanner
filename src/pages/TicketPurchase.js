import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function TicketPurchasePage() {
	const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
	//It destructures the returned object to obtain the cart array containing items in the cart, as well as functions like removeFromCart, updateQuantity, and clearCart.

	const navigate = useNavigate();
	//used to navigate between pages

	const [error, setError] = useState("");
	//default state defined to update error messages

	const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
	//calculates the total quantity of items in the shopping cart by summing up the quantities of all items using the reduce method.
	//claude.ai assistance in formatting this code

	const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	//calculates the total cost of all items in the shopping cart by summing up the product of each item's price and quantity using the reduce method.
	//claude.ai assistance in formatting this code

	function handleCheckout() {
		if (totalQuantity === 0) {
			setError("Please select at least one ticket to purchase.");
			//added a function to display error when zero tickets are selected to purchase, However this was never implemented as i have set the value of ticket quanitity to greater or equal to 1 in the CartContext page.
		} else {
			setTimeout(() =>
				//set delay to confirmation page by two seconds
				{
					navigate("/confirmation");
					clearCart(); // Clear the cart after successful purchase
				}, 2000);
		}
	}

	return (
		<div>
			<h1>Ticket Purchase</h1>
			{/*if error state is truthy, render error message in red */}
			{error && <div style={{ color: "red" }}>{error}</div>}
			{/*if cart length is empty, display paragraph, if not then render cart components. Decided to display this error message instead of if (totalQuantity === 0) */}
			{cart.length === 0 ? (
				<p>No tickets selected for purchase</p>
			) : (
				<div>
					<ul>
						{/*maps over item in cart and generates an <li> element for it, displaying items title, price and remove.*/}
						{cart.map((item) => (
							<li key={item.id}>
								{item.title} - ${item.price.toFixed(2)}
								<input
									// input field added to modify quantity of each item in cart. triggers the updateQuantity function when its value changes. Code assisted with claude.ai
									type="number"
									value={item.quantity}
									onChange={(e) => updateQuantity(item.id, e.target.value)}
								/>
								<button onClick={() => removeFromCart(item.id)}>Remove</button>
								{/*On click triggers remove cart function which passes the id of the item to be removed as an argument.*/}
							</li>
						))}
					</ul>
					<p>Total Amount: ${totalAmount.toFixed(2)}</p>
					{/*Total amount displayed based on how many routes have been selected. Price has two decimal points*/}
					<button onClick={handleCheckout}>Checkout</button>
					{/*On click, runs handlecheckout function. If there are routes being purchased, then runs function and  proceedes to checkout after two seconds*/}
				</div>
			)}
		</div>
	);
}

export default TicketPurchasePage;
