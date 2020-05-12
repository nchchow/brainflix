import React from "react";
import Header from "./components/header/Header";
import SiteVideo from "./components/main/SiteVideo";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<SiteVideo />
			</div>
		);
	}
}
