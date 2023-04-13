import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.css";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Starships } from "./views/starships";
import { FilmsAndSeries } from "./views/filmsandseries";
import { Games } from "./views/games";
import { Philosophy } from "./views/philosophys"
import { PlanetsDetails } from "./views/planetsdetails";
import { CharacterDetails } from "./views/characterdetails";
import { StarshipsDetails } from "./views/starshipsdetails";
import { FilmsDetails } from "./views/filmsdetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="er">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:id" element={<Single />} />
						<Route path="/starships/all" element={<Starships />} />
						<Route path="/starships/details/:id" element={<StarshipsDetails />} />
						<Route path="/planets/all" element={<Planets />} />
						<Route path="/planets/details/:id" element={<PlanetsDetails />} />
						<Route path="/characters/all" element={<Characters />} />
						<Route path="/characters/details/:id" element={<CharacterDetails />} />
						<Route path="/films/all" element={<FilmsAndSeries />} />
						<Route path="/films/details/:id" element={<FilmsDetails/> } /> 
						<Route path="/philosophy" element={<Philosophy/>}/>
						<Route path="/games" element={<Games />}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
