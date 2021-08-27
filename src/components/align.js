import React, { Component } from "react";

export default class Align extends Component {
	constructor() {
		super();

		this.state = {
			style: null,
		};
	}

	render() {
		return (
			<div className="align-wrapper">
				<h1 className="align-text">Align Me!</h1>
				<button className="left-btn">Left</button>
				<button className="center-btn">Center</button>
				<button className="right-btn">Right</button>
			</div>
		);
	}
}
