import React, { Component } from "react";

export default class Align extends Component {
	constructor() {
		super();

		this.state = {
			style: {
				display: "flex",
				justifyContent: "flex-start",
			},
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(arg) {
		let dispVal = "";
		if (arg === "left") {
			dispVal = "flex-start";
		} else if (arg === "center") {
			dispVal = "space-around";
		} else if (arg === "right") {
			dispVal = "flex-end";
		}
		this.setState({
			style: {
				display: "flex",
				justifyContent: dispVal,
			},
		});
	}

	// handleLeftClick() {
	// 	this.setState({
	// 		style: {
	// 			display: "flex",
	// 			justifyContent: "flex-start",
	// 		},
	// 	});
	// }

	// handleRightClick() {
	// 	this.setState({
	// 		style: {
	// 			display: "flex",
	// 			justifyContent: "flex-end",
	// 		},
	// 	});
	// }

	// handleCenterClick() {
	// 	this.setState({
	// 		style: {
	// 			display: "flex",
	// 			justifyContent: "space-around",
	// 		},
	// 	});
	// }

	render() {
		return (
			<div className="align-wrapper">
				<div className="flex-text-wrapper" style={this.state.style}>
					<h1 className="align-text">Align Me!</h1>
				</div>
				<button
					className="left-btn"
					onClick={() => this.handleClick("left")}
				>
					Left
				</button>
				<button
					className="center-btn"
					onClick={() => this.handleClick("center")}
				>
					Center
				</button>
				<button
					className="right-btn"
					onClick={() => this.handleClick("right")}
				>
					Right
				</button>
			</div>
		);
	}
}
