/* --- REACT --- */
import React from "react";
/* --- REACT DOM --- */
import ReactDOM from "react-dom";
/* --- BROWSER ROUTER --- */
import { BrowserRouter as Router } from "react-router-dom";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from '../src/Components/CheckoutForm';

/* --- STYLES --- */
import "../src/Styles/index.css";

import App from "./Components/App";

/* --- SERVICE WORKER --- */
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);

serviceWorker.register();
