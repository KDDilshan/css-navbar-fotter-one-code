import React from "react";
import "./homePage.css";
import HomeLeft from "../../Components/HomePageCom/HomeLeft";
import HomeRight from "../../Components/HomePageCom/HomeRight";
import NavBar from "../../Components/NavigationBar/NavBar";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
	return (
		<div>
			<NavBar />
			<div className="pageContainer">
				<HomeLeft />
				<HomeRight />
			</div>
			<Footer />
		</div>
	);
}
