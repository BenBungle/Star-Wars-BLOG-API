import React from "react";

export const JumbotronCharacters = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img
          src={props.imagenjumbotron3}
          alt="jumbotron3 image"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-md-8 text-secondary">
        <h1>{props.titulo3}</h1>
        <p>{props.parrafo3}</p>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
      <div className="row justify-content-between text-secondary">
        <div className="col-md-2 border-right">
          <h4>Name</h4>
          <p>{props.name}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Birth Year</h4>
          <p>{props.birth_year}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Gender</h4>
          <p>{props.gender}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Heigth</h4>
          <p>{props.height}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Skin Color</h4>
          <p>{props.skin_color}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Eye Color</h4>
          <p>{props.eye_color}</p>
        </div>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
    </div>
    </div>
  );
}

export const JumbotronPlanets = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img
          src={props.imagenjumbotron3}
          alt="jumbotron3 image"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-md-8 text-secondary">
        <h1>{props.titulo3}</h1>
        <p>{props.parrafo3}</p>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
      <div className="row justify-content-between text-secondary">
        <div className="col-md-2 border-right">
          <h4>Name</h4>
          <p>{props.name}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Climate</h4>
          <p>{props.climate}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Population</h4>
          <p>{props.population}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Orbital Period</h4>
          <p>{props.orbital_period}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Rotation Period</h4>
          <p>{props.rotation_period}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Diameter</h4>
          <p>{props.diameter}</p>
        </div>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
    </div>
    </div>
  );
}

export const JumbotronStarships = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img
          src={props.imagenjumbotron3}
          alt="jumbotron3 image"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-md-8 text-secondary">
        <h1>{props.titulo3}</h1>
        <p>{props.parrafo3}</p>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
      <div className="row justify-content-between text-secondary">
        <div className="col-md-2 border-right">
          <h4>Name</h4>
          <p>{props.name}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Model</h4>
          <p>{props.model}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Starship Class</h4>
          <p>{props.starship_class}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Manufacturer</h4>
          <p>{props.manufacturer}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Passengers</h4>
          <p>{props.passengers}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Length</h4>
          <p>{props.length}</p>
        </div>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
    </div>
    </div>
  );
}

export const JumbotronFilms = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img
          src={props.imagenjumbotron3}
          alt="jumbotron3 image"
          className="img-fluid w-100"
        />
      </div>
      <div className="col-md-8 text-secondary">
        <h1>{props.titulo3}</h1>
        <p>{props.parrafo3}</p>
      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
      <div className="row justify-content-between text-secondary">
        <div className="col-md-2 border-right">
          <h4>Title</h4>
          <p>{props.title}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Director</h4>
          <p>{props.director}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Producer</h4>
          <p>{props.producer}</p>
        </div>
        <div className="col-md-2 border-right">
          <h4>Release Date</h4>
          <p>{props.release_date}</p>
        </div>

      </div>
      <hr className="col-md-12 my-3" style={{ borderTop: "1px solid #ccc" }} />
    </div>
    </div>
  );
}