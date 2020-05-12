import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "./UserIcon";

export default function Header() {
	return (
		<header className="site-header">
			<Logo />
			<SearchBar />
			<UploadButton />
			<UserIcon />
		</header>
	);
}
