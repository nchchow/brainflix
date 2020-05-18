import React from "react";
import SearchBar from "./SearchBar";
import IconButton from "../buttons/IconButton";
import uploadIcon from "../../assets/icons/SVG/Icon-upload.svg";
import UserIcon from "../icons/UserIcon";

const Nav = () => (
  <div className="site-nav">
    <SearchBar />
    <IconButton
      className="site-nav__upload-button"
      icon={uploadIcon}
      iconClassName="site-nav__upload-button--icon"
      value="UPLOAD"
    />
    <UserIcon className="site-nav__user-icon" />
  </div>
);

export default Nav;
