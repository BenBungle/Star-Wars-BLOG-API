import React, { useContext } from "react";
import { Link } from "react-router-dom";
import botonprincipal from "../../img/maytheforce.png";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg mb-4 pe-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img id="logotipostarwars" src={botonprincipal} />
				</span>
			</Link>
			<button className="navbar-toggler text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
				<ul className="navbar-nav me-5">
					<Link to="/" style={{ textDecoration: "none" }}>
						<li className="nav-item ">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Home</p>
						</li>
					</Link>
					<Link to="/characters/all" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Characters</p>
						</li>
					</Link>
					<Link to="/planets/all" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Planets</p>
						</li>
					</Link>
					<Link to="/starships/all" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Starships</p>
						</li>
					</Link>
					<Link to="/games" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Videogames</p>
						</li>
					</Link>
					<Link to="/films/all" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >
							Films&Series
							</p>
						</li>
					</Link>
					<Link to="/philosophy" style={{ textDecoration: "none" }}>
						<li className="nav-item">
							<p className="nav-link active text-secondary" style={{ fontSize: "1.1rem", transition: "background-color 0.3s ease" }} aria-current="page"
								onMouseEnter={(e) => { e.target.style.backgroundColor = "gray" }}
								onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent" }} >Philosophy</p>
						</li>
					</Link>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{"Favorites " + store.favorites.length}</a>
						<ul className="dropdown-menu">
							{store.favorites.length == 0 ? (
								<li className="dropdown-item">Empty</li>
							) :
								(
									store.favorites.map((favorite, i) => {
										return (
											<li className="dropdown-item d-flex justify-content-between text-truncate">
												<span className="d-inline-block text-truncate">{favorite.name}</span>
												<i className="far fa-trash-alt text-black bg-transparent flex-shrink-0" onClick={() => actions.deleteFavorite(i)} />
											</li>

										)
									})
								)
							}
							<li className="dropdown-item"></li>
						</ul>
					</li>
				</ul>
			</div>

		</nav>
	);
};