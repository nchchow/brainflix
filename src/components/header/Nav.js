import React from "react";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "./UserIcon";

export default function Nav() {
	return (
		<div className="site-nav">
			<SearchBar />
			<UploadButton />
			<UserIcon />
		</div>
	);
}
