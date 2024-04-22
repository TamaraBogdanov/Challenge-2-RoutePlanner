import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AvailableRoutesPage from "./pages/AvailableRoutes";
import RouteInformationPage from "./pages/RouteInformation";
import TicketPurchasePage from "./pages/TicketPurchase";
import ConfirmationPage from "./pages/ConfirmationPage";
import { CartProvider } from "./contexts/CartContext";
//importing components from different modules ive established

//Styles used in this challenge was used for personal preference in better displaying code and its functionalities.

function App() {
	return (
		<Router>
			{/*Router allows for client side routing to switch pages */}
			<CartProvider>
				{/*Added for managing state and actions of shopping cart */}
				<Navbar />
				{/*Navbar component displayed on every page */}
				<Routes>
					<Route path="/" element={<AvailableRoutesPage />} />
					{/*Route to the home page */}
					<Route
						path="/route-information/:routeId"
						element={<RouteInformationPage />}
						//Renders routeInformation based on route selected
					/>

					<Route path="/ticket-purchase" element={<TicketPurchasePage />} />
					{/*Route to ticket purchase page*/}
					<Route path="/confirmation" element={<ConfirmationPage />} />
					{/*Route to confirmation page*/}
				</Routes>
			</CartProvider>
		</Router>
	);
}

export default App;
