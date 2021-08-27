import React, { Component } from "react";

export default class Hide extends Component {
	constructor() {
		super();

		this.state = {
			hidden: false,
			style: {
				display: "flex",
			},
			btn: "Hide",
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
				btn: "Show",
			});
		} else if (this.state.hidden) {
			this.setState({
				hidden: false,
				style: {
					display: "flex",
				},
				btn: "Hide",
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
					{this.state.btn}
				</button>
			</div>
		);
	}
}
