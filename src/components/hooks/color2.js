import React, { useState, useEffect } from "react";
import { floor, random } from "mathjs";

export default function color() {
	const [color, setColor] = useState("black");
	const [text, setText] = useState("Color Me!");
	const [colorInput, setColorInput] = useState("black");
	const [txtInput, setTxtInput] = useState("Color Me!");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) {
			console.log("Use Effect mounted");
			setMounted(true);
			console.log(mounted);
		} else if (mounted) {
			console.log("else useEffect ran");
			window.onkeypress = (event) => {
				if (event.key === "Enter") {
					handleSubmit();
				}
			};
		}

		return () => (window.onkeypress = null);
	});

	const handleSubmit = () => {
		setColor(colorInput);
		setText(txtInput);
	};

	const randomColor = () => {
		const hex = "0123456789abcdefABCDEF";
		let randomList = "#";
		for (let i = 0; i < 6; i++) {
			let randomHex = "";
			randomHex = hex[floor(random() * hex.length)];
			randomList += randomHex;
		}
		setColor(randomList);
		setColorInput(randomList);
	};

	return (
		<div className="color-wrapper">
			<h3 style={{ color }}>{text}</h3>
			<input
				type="text"
				value={colorInput}
				onChange={(event) => setColorInput(event.target.value)}
			/>
			<button onClick={randomColor}>Random Color</button>
			<input
				type="text"
				value={txtInput}
				onChange={(event) => setTxtInput(event.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
