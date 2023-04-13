import React from "react";
import "../../styles/home.css";
import Personaje from "../../img/personajes.png";
import Naves from "../../img/naves.png";
import Planetas from "../../img/planetas.png";
import Videojuegos from "../../img/videojuegos.png";
import Filosofia from "../../img/filosofia.png";
import PeliculasSeries from "../../img/peliculas-series.png";
import jumbotromHomeImage from "../../img/home.png";
import { Homecard } from "../component/homecard";
import { Jumbotron } from "../component/jumbotronhome";
import { Link } from "react-router-dom";



export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Jumbotron
				titulohome="Bienvenido, "
				titulohome1="Joven Padawan"
				parrafohome="Lorem ipsum is simply dummy text of the printing and typesetting industry."
				imagenhome={jumbotromHomeImage}
			/>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-3">
						<Link to="/characters/all" style={{ textDecoration: "none" }}>
							<Homecard
								image1={Personaje}
								titulo1="Characters"
							/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
						<Link to="/starships/all" style={{ textDecoration: "none" }} >
							<Homecard
								image1={Naves}
								titulo1="Starships"
							/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
						<Link to="/planets/all" style={{ textDecoration: "none" }} >
							<Homecard
								image1={Planetas}
								titulo1="Planets"
							/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
						<Link to="/games" style={{ textDecoration: "none" }}>
							<Homecard
								image1={Videojuegos}
								titulo1="Videogames"
							/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
						<Link to="/philosophy" style={{ textDecoration: "none" }}>

							<Homecard
								image1={Filosofia}
								titulo1="Philosophy"
							/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
						<Link to="/films/all" style={{ textDecoration: "none" }}>

							<Homecard
								image1={PeliculasSeries}
								titulo1="Movies&Films"
							/>
						</Link>
					</div>
				</div>

			</div>
		</div>
	);

}
