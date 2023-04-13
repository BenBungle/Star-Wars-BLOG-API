import React from "react";
import "../../styles/jumbotrom.css";

export const Jumbotron = (props) => {
    return (
      <div className="container">
      <div className="col-md-12 g-0">
        <div className="position-relative w-100">
          <div className="position-absolute top-50 start-50 translate-middle mb-5 w-100 p-5 ">
            <h1 className="display-5 col-md-5 fw-normal fs-3 opacity-80 bg-transparent text-white text-end" >{props.titulohome}<br></br><span className="fw-bold">{props.titulohome1}</span></h1>
            <p className="col-md-5 fs-5 opacity-80 bg-transparent text-white text-end">{props.parrafohome}</p>
          </div>
          <img
            src={props.imagenhome}
            className="card-img-top w-100"
            style={{ objectFit: "cover", height: "400px", borderRadius:"15px"}}
            alt="..."
          />
        </div>
      </div>
      </div>
    );
  }
  