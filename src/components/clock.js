import React, { Component } from "react";

export default class Clock extends Component {
	constructor() {
		super();

		this.state = {
			time: "why are you getting the time from a website",
		};
	}

	render() {
		return (
			<div className="clock-wrapper">
				<h1 className="current-time">{this.state.time}</h1>
				<button className="toggle-btn">Toggle Clock</button>
			</div>
		);
	}
}
