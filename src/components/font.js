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

	render() {
		return (
			<div className="font-wrapper">
				<h1 className="font-number" style={this.state.style}>
					{this.state.size}px
				</h1>
				<input
					className="font-input"
					placeholder={this.state.size}
				></input>
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
