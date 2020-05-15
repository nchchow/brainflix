import React from "react";
import uploadIcon from "../../assets/icons/SVG/Icon-upload.svg";

const UploadButton = () => (
	<button className="site-nav__upload-button">
		<img className="site-nav__upload-button--icon" src={uploadIcon} alt="" />
		UPLOAD
	</button>
);

export default UploadButton;
