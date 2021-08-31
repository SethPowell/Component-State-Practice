import React, { useEffect, useState } from "react";

export default function time() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [visibility, setVisibility] = useState("visible");
	const [mounted, setMounted] = useState(false);

	// useEffect(() => {
	// 	if (mounted === false) {
	// 		const interval = setInterval(
	// 			() => this.setState({ time: new Date().toLocaleTimeString() }),
	// 			1000
	// 		);
	// 		interval;
	// 		setMounted(true);
	// 	} else if (mounted === true) {
	// 	}
	// });

	const toggleClock = () => {
		visibility === "visible"
			? setVisibility("hidden")
			: setVisibility("visible");
	};

	return (
		<div className="time-wrapper">
			<h1 style={{ visibility }}>{time}</h1>
			<button onClick={toggleClock}>Toggle Clock</button>
		</div>
	);
}
