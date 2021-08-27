import React, { Component } from "react";

export default class Font extends Component {
	constructor() {
		super();

		this.state = {
			size: 12,
			style: {
				fontSize: "12px",
			},
		};

		this.fontInc = this.fontInc.bind(this);
		this.fontDec = this.fontDec.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	fontInc() {
		const sizeUp = this.state.size + 1;
		const upFontSize = `${sizeUp}px`;
		this.setState({
			size: sizeUp,
			style: {
				fontSize: upFontSize,
			},
		});
	}

	fontDec() {
		const sizeDown = this.state.size - 1;
		const downFontSize = `${sizeDown}px`;
		this.setState({
			size: sizeDown,
			style: {
				fontSize: downFontSize,
			},
		});
	}

	handleKeyPress(event) {
		if (event.key === "Enter") {
			const inputField = this.inputField;
			const inputSize = inputField.value;
			const inputFontSize = `${inputSize}px`;
			this.setState({
				size: inputSize,
				style: {
					fontSize: inputFontSize,
				},
			});
		}
	}

	render() {
		return (
			<div className="font-wrapper">
				<h1 className="font-number" style={this.state.style}>
					{this.state.size}px
				</h1>
				<input
					className="fontInput"
					onKeyPress={this.handleKeyPress}
					ref={(c) => (this.inputField = c)}
					name="inputField"
				/>
				<button className="font-up-btn" onClick={this.fontInc}>
					Increase
				</button>
				<button className="font-down-btn" onClick={this.fontDec}>
					Decrease
				</button>
			</div>
		);
	}
}
