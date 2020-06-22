import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import CheckoutForm from '../src/Components/CheckoutForm';

import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import "../src/Styles/index.css";


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);

serviceWorker.register();
