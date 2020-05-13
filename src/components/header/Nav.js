import React, { Component } from "react";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "./UserIcon";

export default class Nav extends Component {
	render() {
		return (
			<div className="site-nav">
				<SearchBar />
				<UploadButton />
				<UserIcon />
			</div>
		);
	}
}
