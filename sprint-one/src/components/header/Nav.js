import React from "react";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserIcon from "../icons/UserIcon";

const Nav = () => (
  <div className="site-nav">
    <SearchBar />
    <UploadButton />
    <UserIcon className="site-nav__user-icon" />
  </div>
);

export default Nav;
