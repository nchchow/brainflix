import React, { Component } from "react";

export default class SearchBar extends Component {
	render() {
		return (
			<input
				type="text"
				className="site-nav__search-bar"
				placeholder="Search"
			/>
		);
	}
}
