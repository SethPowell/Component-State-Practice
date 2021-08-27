import React, { Component } from "react";

export default class Font extends Component {
	constructor() {
		super();

		this.state = {
			inputVal: 12,
			size: 12,
			style: {
				fontSize: "12px",
			},
		};
	}

	changeFont(event) {
		const direction = event.target.value;
		if (direction === "+") {
			const sizeUp = Number(this.state.size) + 1;
			this.setState({
				inputVal: sizeUp,
				size: sizeUp,
				style: {
					fontSize: `${sizeUp}px`,
				},
			});
		} else if (direction === "-") {
			const sizeDown = Number(this.state.size) - 1;
			this.setState({
				inputVal: sizeDown,
				size: sizeDown,
				style: {
					fontSize: `${sizeDown}px`,
				},
			});
		}
	}

	handleChange(event) {
		const newVal = event.target.value;
		this.setState({
			inputVal: newVal,
			size: newVal,
			style: {
				fontSize: `${newVal}px`,
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
					className="fontInput"
					value={this.state.inputVal}
					onChange={this.handleChange.bind(this)}
				/>
				<button
					className="font-up-btn"
					onClick={this.changeFont.bind(this)}
					value="+"
				>
					Increase
				</button>
				<button
					className="font-down-btn"
					onClick={this.changeFont.bind(this)}
					value="-"
				>
					Decrease
				</button>
			</div>
		);
	}
}
