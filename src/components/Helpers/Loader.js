import React from "react";

function Loader() {
	return (
		<div className="loader">
			<div className="balls">
				<div className="ball1"/>
				<div className="ball2"/>
				<div className="ball3"/>
			</div>
            <span className="load-text">Loading...</span>
		</div>
	)
}

export default Loader