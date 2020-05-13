import React, { Component } from "react";
import LogoSVG from "../../assets/logo/Logo-brainflix.svg";

export default class Logo extends Component {
	render() {
		return <img src={LogoSVG} alt="logo" className="site-header__logo" />;
	}
}
