import React, { Component } from "react";

export default class Clock extends Component {
	constructor() {
		super();

		this.state = {
			time: new Date().toLocaleTimeString(),
			style: {
				visibility: "visible",
			},
		};

		this.toggleClock = this.toggleClock.bind(this);
	}

	componentDidMount() {
		this.intervalID = setInterval(
			() => this.setState({ time: new Date().toLocaleTimeString() }),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	toggleClock() {
		let toggle = "";
		if (this.state.style.visibility === "visible") {
			toggle = "hidden";
		} else if (this.state.style.visibility === "hidden") {
			toggle = "visible";
		}
		this.setState({
			style: {
				visibility: toggle,
			},
		});
	}

	render() {
		return (
			<div className="clock-wrapper">
				<h1 className="current-time" style={this.state.style}>
					{this.state.time}
				</h1>
				<button className="toggle-btn" onClick={this.toggleClock}>
					Toggle Clock
				</button>
			</div>
		);
	}
}
