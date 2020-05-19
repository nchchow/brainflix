import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../icons/Logo";
import Nav from "./Nav";

const Header = () => (
  <div className="box-shadow">
    <header className="site-header container">
      <NavLink to="/" className="navlink">
        <Logo />
      </NavLink>
      <Nav />
    </header>
  </div>
);

export default Header;
