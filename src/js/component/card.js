import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const CardCharacters = ({ title, id, image, }) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="col md-1 card" id="shit">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="d-flex justify-content-between">
          <Link to={`/characters/details/${id}`} style={{ textDecoration: "none" }}>
            <p className="card-details">Learn More</p>
          </Link>
          <Link onClick={() => actions.addFavorite(title)}>
            <button className="button" >
              <i className="far fa-heart" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export const CardPlanets = ({ title, id, image }) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="col md-1 card" id="shit">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="d-flex justify-content-between">
          <Link to={`/planets/details/${id}`} style={{ textDecoration: "none" }}>
            <p className="card-details">Learn More</p>
          </Link>
          <Link onClick={() => actions.addFavorite(title)}>
            <button className="button" >
              <i className="far fa-heart" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardStarships = ({ title, id, image }) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="col md-1 card" id="shit">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="d-flex justify-content-between">
          <Link to={`/starships/details/${id}`} style={{ textDecoration: "none" }}>
            <p className="card-details">Learn More</p>
          </Link>
          <Link onClick={() => actions.addFavorite(title)}>
            <button className="button" >
              <i className="far fa-heart" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardFilms = ({ title, id, image }) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="col md-1 card" id="shit">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="d-flex justify-content-between">
          <Link to={`/films/details/${id}`} style={{ textDecoration: "none" }}>
            <p className="card-details">Learn More</p>
          </Link>
          <Link onClick={() => actions.addFavorite(title)}>
            <button className="button" >
              <i className="far fa-heart" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardGames = ({ title, image }) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="col md-1 card" id="shit">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title mt-5 ms-4">{title}</h2>
      </div>
      <Link onClick={() => actions.addFavorite(title)}>
        <button className="button" >
          <i className="far fa-heart" />
        </button>
      </Link>
    </div>
  );
};