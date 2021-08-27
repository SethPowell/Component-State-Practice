import React, { Component } from "react";

export default class Hide extends Component {
	constructor() {
		super();

		this.state = {
			hidden: false,
			style: {
				display: "flex",
			},
		};

		this.toggleDisplay = this.toggleDisplay.bind(this);
	}

	toggleDisplay() {
		if (!this.state.hidden) {
			this.setState({
				hidden: true,
				style: {
					display: "none",
				},
			});
		} else if (this.state.hidden) {
			this.setState({
				hidden: false,
				style: {
					display: "flex",
				},
			});
		}
	}

	render() {
		return (
			<div className="hide-wrapper">
				<h1 className="hide" style={this.state.style}>
					Hide Me!
				</h1>
				<button className="hide-btn" onClick={this.toggleDisplay}>
					Hide
				</button>
			</div>
		);
	}
}
