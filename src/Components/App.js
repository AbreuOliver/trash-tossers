import React from "react";
import Header from "./header";
import * as trashie from "../Images/trashie.ico";
import Footer from "./footer";

function App() {
	return (
		<div className="App">
			<Header className="header" />
			<div className="header-area">
				<p>Trash Tossers</p>
				<img className="logo" src={trashie} alt="logo" />
			</div>
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
