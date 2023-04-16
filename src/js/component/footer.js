import React, { Component } from "react";
import "../../styles/footer.css";
import Logofooter from "../../img/maytheforcenegativo.png";
import Fondofooter from "../../img/footerv3.png";

export const Footer = () => (
	<footer className="footer mt-4" style={{backgroundImage: `url(${Fondofooter})`}}>
		<div className="Linea"></div>
		<div className="Tag">
				<p>Hecho por <b>Dayana, SebAguayo y BenBungle</b></p>
				<p>Powered by StarWars Swapi<link rel= "https://swapi.dev/"></link></p>
		</div>
		<div className="logomaytheforcenegativo" >
			<img src={Logofooter}></img>
		</div>

	</footer>
);

