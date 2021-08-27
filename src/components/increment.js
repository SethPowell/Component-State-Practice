import React, { Component } from "react";

export default class Increment extends Component {
	constructor() {
		super();

		this.state = {
			number: 0,
		};
	}

	render() {
		return (
			<div className="inc-wrapper">
				<button className="up-btn">Up</button>
				<h1 className="inc-number">{this.state.number}</h1>
				<button className="down-btn">Down</button>
			</div>
		);
	}
}
