import React from "react";
import { Link } from "react-router-dom";
import { mockRoutes } from "../mockData";

//AvailableRoutes page
function AvailableRoutesPage() {
	return (
		<div>
			<h1>Available Routes</h1>
			<ul className="list">
				{mockRoutes.map((route) => (
					//mapping over each route within mockroutes
					<li key={route.id}>
						{/*individual key to distinguish infividual items in array*/}
						<Link to={`/route-information/${route.id}`}>{route.title}</Link>
						{/*creates links for every route, to the route information. The route titles are the only links displayed in this list*/}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AvailableRoutesPage;
