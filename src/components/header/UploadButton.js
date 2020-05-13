import React from "react";
import UploadIcon from "../../assets/icons/SVG/Icon-upload.svg";

export default function UploadButton() {
	return (
		<button className="site-nav__upload-button">
			<img className="site-nav__upload-button--icon" src={UploadIcon} alt="" />{" "}
			UPLOAD
		</button>
	);
}
