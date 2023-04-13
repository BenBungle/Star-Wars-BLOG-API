import React, { useContext } from "react";
import { JumbotronVistas } from "./jumbotronvistas";
import planetsImage from "../../img/planetas.png"
import { CardPlanets } from "./card";
import { Context } from "../store/appContext";

export const Planet = () => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <JumbotronVistas
                titulo1="Planets"
                imagen1={planetsImage}
            />
            <div className="container mt-3">
                <div className="row">

                    {store.planets?.results?.map((planets, index) => {

                        if (index != 0) {
                            return (

                                <div className=" col-md-3 mt-2" key={index}>
                                    <CardPlanets
                                        title={planets.name}
                                        image={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                                        planets={planets}
                                        id={index} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}