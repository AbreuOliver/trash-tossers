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
			<h4>Each Bag $1</h4>
			<div className="button-container">
				<button>Tell Me More</button>
				<button className="payment">Take My Trash!</button>
			</div>
			<Footer />
		</div>
	);
}

export default App;
