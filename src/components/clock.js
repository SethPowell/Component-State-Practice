import React, { Component } from "react";

export default class Clock extends Component {
	constructor() {
		super();

		this.state = {
			time: new Date().toLocaleString().substring(10, 21),
			style: {
				display: "block",
			},
		};

		this.toggleClock = this.toggleClock.bind(this);
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.seconds(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	seconds() {
		this.setState({
			time: new Date().toLocaleString().substring(10, 21),
		});
	}

	toggleClock() {
		let toggle = "";
		if (this.state.style.display === "block") {
			toggle = "none";
		} else if (this.state.style.display === "none") {
			toggle = "block";
		}
		this.setState({
			style: {
				display: toggle,
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
