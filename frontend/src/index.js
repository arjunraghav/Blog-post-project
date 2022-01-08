import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path='/' component={App} />
			</Switch>
			<Footer />
		</React.StrictMode>
	</Router>,
	document.getElementById("root")
);
