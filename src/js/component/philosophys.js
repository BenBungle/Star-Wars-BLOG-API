import React from "react";
import "../../styles/navbar.css";
import philosophyImage from "../../img/filosofia.png";
import { JumbotronVistas } from "./jumbotronvistas";


export const Philosophys = () => {
    return (
        <div>
            <JumbotronVistas
                titulo1="Philosophy"
                imagen1={philosophyImage}
            />

        </div>
    )
}