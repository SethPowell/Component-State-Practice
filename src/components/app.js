import React, { Component } from "react";
// import Align from "./align";
// import Hide from "./hide";
// import Increment from "./increment";
// import Font from "./font";
// import Color from "./color";
// import Clock from "./clock";

import Alignment from "./hooks/alignment";
import Toggle from "./hooks/toggle";
import Color from "./hooks/color2";
import Font from "./hooks/fontSize";
import Increment from "./hooks/upDown";
import Clock from "./hooks/time";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="content-wrapper">
					<div className="component-wrapper">
						<Alignment />
					</div>

					<div className="component-wrapper">
						<Toggle />
					</div>

					<div className="component-wrapper">
						<Increment />
					</div>

					<div className="component-wrapper">
						<Font />
					</div>

					<div className="component-wrapper">
						<Color />
					</div>

					<div className="component-wrapper">
						<Clock />
					</div>
				</div>
			</div>
		);
	}
}
