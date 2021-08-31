import React, { useState } from "react";

export default function font() {
	const [inputVal, setInputVal] = useState(1);
	const [size, setSize] = useState(12);
	const [fontSize, setFontSize] = useState("12px");

	const changeUp = () => {
		setFontSize(`${Number(size) + Number(inputVal)}px`);
		setSize(Number(size) + Number(inputVal));
	};

	const changeDown = () => {
		setFontSize(`${Number(size) - Number(inputVal)}px`);
		setSize(Number(size) - Number(inputVal));
	};

	return (
		<div className="font-wrapper">
			<h3 style={{ fontSize }}>{fontSize}</h3>
			<input
				type="text"
				value={inputVal}
				onChange={(event) => setInputVal(event.target.value)}
			/>
			<button onClick={changeUp}>Increase</button>
			<button onClick={changeDown}>Decrease</button>
		</div>
	);
}
