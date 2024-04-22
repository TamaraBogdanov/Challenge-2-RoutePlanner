import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
//creates a new context object, alloowing to share values between components.
//CartContext will be used to access the cart context in components that need it.

export const useCart = () => useContext(CartContext);
//exporting to be able to used outside module.
//custom hook of useCart created that allows components to access the value stored in the CartContext  object

export const CartProvider = ({ children }) => {
	//ffunctional component that recieves the prop children, prop represents the nested elements/components passed as children to the CartProvider component

	const [cart, setCart] = useState([]);
	//default state of cart

	function addToCart(route) {
		setCart([...cart, { ...route, quantity: 1 }]);
		//updates carts state by adding an item to it. Using a spread operator, a new array is created for the new item added.
		//one quantity of of this route is added to cart
	}

	function removeFromCart(routeId) {
		//remove the route id from cart
		setCart(cart.filter((item) => item.id !== routeId));
		//updates state by creating new array containing items that do not have the specified routeid
	}

	function updateQuantity(routeId, newQuantity) {
		// updating the quantity of a specific item in the shopping cart based on its routeId
		const validQuantity = Math.max(parseInt(newQuantity), 1);
		//makes sure quantity selected will always be greater or equal to 1, preventing from buying 0 or negative tickets.
		setCart(
			//updates state of shopping cart
			cart.map(
				(item) =>
					//iterates over each item in cart using map function.

					item.id === routeId ? { ...item, quantity: validQuantity } : item
				// openAi assistance with callback function to check if id matches route id, if yes create new object, if not remain unchanged.
			)
		);
	}

	function clearCart() {
		//clears carts contents on remove, returns to original state.
		setCart([]);
	}

	return (
		<CartContext.Provider
			//used as provider for cart related data.
			//OpenAi assistance with using .provider code to assist me in tying it all together.
			value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
			//prop used to define values that context provider will make available to consuming components
		>
			{children}
		</CartContext.Provider>
	);
};
