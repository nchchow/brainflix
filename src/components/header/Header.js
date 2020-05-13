import React, { Component } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export default class Header extends Component {
	render() {
		return (
			<header className="site-header container">
				<Logo />
				<Nav />
			</header>
		);
	}
}
