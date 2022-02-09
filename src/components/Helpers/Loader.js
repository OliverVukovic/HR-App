// import React from "react";

// function Loader() {
// 	return (
// 		<div className="loader">
// 			<div className="balls">
// 				<div className="ball1"/>
// 				<div className="ball2"/>
// 				<div className="ball3"/>
// 			</div>
//             <span className="load-text">Loading...</span>
// 		</div>
// 	)
// }

// export default Loader



import React from "react";
import './Spinner.css'

export const Loader = () => {
	return (
		<div className="spinner-container">
			<div className="spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className="loading">Loading...</div>
		</div>
		
	)
}