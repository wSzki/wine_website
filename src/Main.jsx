import React, { Component } from "react";
import "./main.css"
import Banniere from "./Banniere"
import Logo from "./Logo"


class Main extends Component {
	render() {
		return (
			<div class="flex row wrap jcc aic vfill ">
				<Banniere />
				<Logo />
			</div>
		);
	}
}

export default Main;