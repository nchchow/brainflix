import React, { Component } from "react";
import UserIconJPG from "../../assets/images/Mohan-muruge.jpg";

export default class UserIcon extends Component {
	render() {
		return <img src={UserIconJPG} alt="user" className="site-nav__user-icon" />;
	}
}
