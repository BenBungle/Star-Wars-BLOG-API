import React from "react";
import "../../styles/homecard.css";

export const Homecard = (props) => {
  return (
    <div id="er"
      className="card position-relative"
      style={{
        width: "100%",
        height: "300px",
        padding: "0",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${props.image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
        }}
      ></div>
      <div className="position-relative top-50 start-100 translate-middle mb-5 w-100 p-5 text-end">
        <h3 className="card-title col-md-5" style={{color: "white"}}>{props.titulo1}</h3>
      </div>
    </div>
  );
};