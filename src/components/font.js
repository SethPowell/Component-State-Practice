import React, { Component } from "react";

export default class Font extends Component {
	constructor() {
		super();

		this.state = {
			size: 12,
		};
	}

	render() {
		return (
			<div className="font-wrapper">
				<h1 className="font-number">{this.state.size}px</h1>
				<input
					className="font-input"
					placeholder={this.state.size}
				></input>
				<button className="font-up-btn">Increase</button>
				<button className="font-down-btn">Decrease</button>
			</div>
		);
	}
}
