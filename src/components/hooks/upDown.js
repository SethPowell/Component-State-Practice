import React, { useState } from "react";

export default function upDown() {
	const [number, setNumber] = useState(0);

	// const changeNumber = (arg) => {
	//     (arg ? setNumber(Number(number) + 1) : setNumber(Number(number) - 1))
	// }

	return (
		<div className="upDown-wrapper">
			<button onClick={() => setNumber(Number(number) + 1)}>Up</button>
			<h2>{number}</h2>
			<button onClick={() => setNumber(Number(number) - 1)}>Down</button>
		</div>
	);
}
