import React, { useEffect, useState } from "react";
import "./boardingPage.css";
import BoardingLeft from "../../Components/BoardingPageCom/BoardingLeft";
import BoardingRight from "../../Components/BoardingPageCom/BoardingRight";
import NavBar from "../../Components/NavigationBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function BoardingPage() {
	const [ownerNames, setOwnerNames] = useState([]);
	const [useridArray, setUseridArray] = useState([
		{
			Lat: "6.8191577",
			Lon: "79.8728304",
		},
	]);
	const [img, setImg] = useState(
		"https://maps.googleapis.com/maps/api/staticmap?zoom=14&center=NSBM+Green+University&size=1200x600&key=AIzaSyDMqp63TLlCEnN148U6CHAEhmu-U1NZxvw&markers=color:red|6.8237443,80.028401&markers=color:red|6.8253731,80.0241841&markers=color:red|6.8264028,80.0320721&markers=color:red|6.8382089,80.0236421&markers=color:red|6.8233264,80.0263343",
	);
	console.log(img);

	useEffect(() => {
		fetch("http://localhost:4000/owner/api/ownerData")
			.then((response) => response.json())
			.then((data) => {
				setOwnerNames(data.usernamesArray || []);
				setUseridArray(data.useridArray || []);
			})
			.catch((error) => {
				console.error("Error fetching owner names:", error);
			});
	}, []);

	return (
		<div>
			<NavBar />
			<div className="BoardingPaneContainer">
				<BoardingLeft ownerNames={ownerNames} useridArray={useridArray} />
				<BoardingRight img={img} />
			</div>
			<Footer />
		</div>
	);
}
