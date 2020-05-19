import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../icons/Logo";
import Nav from "./Nav";

const Header = () => (
  <header className="site-header container">
    <NavLink to="/" className="navlink">
      <Logo />
    </NavLink>
    <Nav />
  </header>
);

export default Header;
