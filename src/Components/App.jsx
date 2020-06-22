import React from "react";
import Header from "./header";
import Footer from "./footer";

function App() {
	return (
		<div className="App">
			<Header className="header" />
			<div className="header-area">
				<h1 id="main-heading">Trash Tossers</h1>
			</div>
			<h3>Personal Trash Disposal</h3>
			<div className="button-container">
				<button>Learn More</button>
				<button className="payment">Request Pickup</button>
			</div>
			<Footer />
		</div>
	);
}

export default App;
