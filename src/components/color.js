import React, { Component } from "react";
import { floor, random } from "mathjs";

export default class Color extends Component {
	constructor() {
		super();

		this.state = {
			colorVal: "red",
			textVal: "Color Me!",
			style: {
				color: "red",
			},
			text: "Color Me!",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		this.setState({
			text: `${this.state.textVal}`,
			style: {
				color: `${this.state.colorVal}`,
			},
		});
	}

	handleChange(event) {
		if (event.target.placeholder === "Color") {
			this.setState({
				colorVal: event.target.value,
			});
		} else if (event.target.placeholder === "Text") {
			this.setState({
				textVal: event.target.value,
			});
		}
	}

	randomColor() {
		const hex = "0123456789abcdefABCDEF";
		let randomList = "#";
		for (let i = 0; i < 6; i++) {
			let randomHex = "";
			randomHex = hex[floor(random() * hex.length)];
			randomList += randomHex;
		}
		this.setState({
			style: {
				color: `${randomList}`,
			},
		});
	}

	render() {
		return (
			<div className="color-wrapper">
				<h1 style={this.state.style}>{this.state.text}</h1>
				<input
					placeholder="Color"
					onChange={this.handleChange.bind(this)}
					value={this.state.colorVal}
				/>
				<button type="button" onClick={this.randomColor.bind(this)}>
					Random Color
				</button>
				<input
					placeholder="Text"
					onChange={this.handleChange.bind(this)}
					value={this.state.textVal}
				/>
				<button type="button" onClick={this.handleSubmit}>
					Submit
				</button>
			</div>
		);
	}
}
