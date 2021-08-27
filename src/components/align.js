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

		this.handleLeftClick = this.handleLeftClick.bind(this);
		this.handleRightClick = this.handleRightClick.bind(this);
		this.handleCenterClick = this.handleCenterClick.bind(this);
	}

	// handleClick(arg) {
	// 	if (arg === "left") {
	// 		this.setState({
	// 			style: {
	// 				display: "flex",
	// 				justifyContent: "flex-start",
	// 			},
	// 		});
	// 	} else if (arg === "center") {
	// 		this.setState({
	// 			style: {
	// 				display: "flex",
	// 				justifyContent: "space-around",
	// 			},
	// 		});
	// 	} else if (arg === "right") {
	// 		this.setState({
	// 			style: {
	// 				display: "flex",
	// 				justifyContent: "flex-end",
	// 			},
	// 		});
	// 	}
	// }

	handleLeftClick() {
		this.setState({
			style: {
				display: "flex",
				justifyContent: "flex-start",
			},
		});
	}

	handleRightClick() {
		this.setState({
			style: {
				display: "flex",
				justifyContent: "flex-end",
			},
		});
	}

	handleCenterClick() {
		this.setState({
			style: {
				display: "flex",
				justifyContent: "space-around",
			},
		});
	}

	render() {
		return (
			<div className="align-wrapper">
				<div className="flex-text-wrapper" style={this.state.style}>
					<h1 className="align-text">Align Me!</h1>
				</div>
				<button className="left-btn" onClick={this.handleLeftClick}>
					Left
				</button>
				<button className="center-btn" onClick={this.handleCenterClick}>
					Center
				</button>
				<button className="right-btn" onClick={this.handleRightClick}>
					Right
				</button>
			</div>
		);
	}
}
