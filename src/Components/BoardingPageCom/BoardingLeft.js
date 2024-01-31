import React from "react";
import "./boardingLeft.css";

export default function BoardingLeft({ ownerNames, useridArray }) {
	return (
		<div className="leftPaneContainer">
			<div className="boardingBox">
				<div className="uniDetails">
					<div className="uniBox">
						<span className="uniName">NSBM</span>
						<img src="./images/nsbm.jpg" alt="NSBM Logo" className="uniImg" />
					</div>
				</div>
				<div className="boardinDetails">
					{ownerNames && ownerNames.length > 0 ? (
						ownerNames.map((ownerName, index) => (
							<a
								key={index}
								href={`/HouseDetails/${useridArray[index]}`}
								className="ownerDetails"
							>
								{ownerName}
							</a>
						))
					) : (
						<p>No owner names found.</p>
					)}
				</div>
			</div>
		</div>
	);
}
