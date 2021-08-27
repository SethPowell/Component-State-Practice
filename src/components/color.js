import React, { Component } from "react";

export default class Color extends Component {
	constructor() {
		super();

		this.state = {
			style: "black",
			text: "Color Me!",
		};
	}

	render() {
		return (
			<div className="color-wrapper">
				<h1 className="color-text">{this.state.text}</h1>
				<input
					className="color-input"
					placeholder={this.state.style}
				></input>
				<input
					className="color-text-input"
					placeholder={this.state.text}
				></input>
				<button className="color-btn">Submit</button>
			</div>
		);
	}
}
