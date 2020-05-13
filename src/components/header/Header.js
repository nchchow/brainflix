import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="site-header container">
			<Logo />
			<Nav />
		</header>
	);
}
