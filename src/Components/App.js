import React from "react";
import Header from "./header";
import Footer from "./footer";

function App() {
	return (
		<div className="App">
			<Header />
			<div>
				<h1>Trash Pickup Services</h1>
			</div>
			<h3>Personal Trash Disposal</h3>
			<h4>Get Started for $1!</h4>
			<div className="button-container">
				<button>Learn More</button>
				<button>Schedule Pickup</button>
			</div>
			<Footer />
		</div>
	);
}

export default App;
