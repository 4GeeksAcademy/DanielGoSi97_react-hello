import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
            <Jumbotron/>
			<Cards/>

		</div>
	);
};

export default Home;