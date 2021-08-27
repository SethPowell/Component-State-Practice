import React, { Component } from "react";

export default class Increment extends Component {
	constructor() {
		super();

		this.state = {
			number: 0,
		};

		this.incUp = this.incUp.bind(this);
		this.incDown = this.incDown.bind(this);
	}

	incUp() {
		const numUp = this.state.number + 1;
		this.setState({
			number: numUp,
		});
	}

	incDown() {
		const numDown = this.state.number - 1;
		this.setState({
			number: numDown,
		});
	}

	render() {
		return (
			<div className="inc-wrapper">
				<button className="up-btn" onClick={this.incUp}>
					Up
				</button>
				<h1 className="inc-number">{this.state.number}</h1>
				<button className="down-btn" onClick={this.incDown}>
					Down
				</button>
			</div>
		);
	}
}
