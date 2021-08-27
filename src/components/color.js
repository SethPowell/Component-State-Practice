import React, { Component } from "react";

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

	render() {
		return (
			<div className="color-wrapper">
				<h1 style={this.state.style}>{this.state.text}</h1>
				<input
					placeholder="Color"
					onChange={this.handleChange.bind(this)}
					value={this.state.colorVal}
				/>
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
