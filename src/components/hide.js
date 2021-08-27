import React, { Component } from "react";

export default class Hide extends Component {
	constructor() {
		super();

		this.state = {
			hidden: false,
		};
	}

	render() {
		return (
			<div className="hide-wrapper">
				<h1 className="hide">Hide Me!</h1>
				<button className="hide-btn">Hide</button>
			</div>
		);
	}
}
