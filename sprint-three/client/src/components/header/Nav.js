import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import IconButton from "../buttons/IconButton";
import uploadIcon from "../../assets/icons/SVG/Icon-upload.svg";
import UserIcon from "../icons/UserIcon";

const Nav = () => (
  <div className="site-nav">
    <SearchBar />
    <NavLink to="/upload" className="navlink">
      <IconButton
        className="site-nav__upload-button"
        icon={uploadIcon}
        iconClassName="site-nav__upload-button--icon"
        value="UPLOAD"
      />
    </NavLink>
    <UserIcon className="site-nav__user-icon" />
  </div>
);

export default Nav;
