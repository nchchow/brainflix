import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "./UserIcon";

export default class Header extends React.Component {
	render() {
		return (
			<header className="site-header">
				<Logo />
				<SearchBar />
				<UploadButton />
				<UserIcon />
			</header>
		);
	}
}
