import React from "react";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "./UserIcon";

const Nav = () => (
	<div className="site-nav">
		<SearchBar />
		<UploadButton />
		<UserIcon />
	</div>
);

export default Nav;
