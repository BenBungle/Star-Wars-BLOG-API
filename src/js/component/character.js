import React, { useContext } from "react";
import "../../styles/navbar.css";
import characterImage from "../../img/personajes.png";
import { JumbotronVistas } from "./jumbotronvistas";
import { Context } from "../store/appContext";
import { CardCharacters } from "./card";


export const Character = () => {

    const { store, actions } = useContext(Context)

    return (
        <div>
            <JumbotronVistas
                titulo1="Characters"
                imagen1={characterImage}
            />

            <div className="container mt-3">
                <div className="row">
                    {store.character?.results?.map((character, index) => {
                        return (

                            <div className="col-md-3 mt-5" key={index}>
                                <CardCharacters
                                    title={character.name}
                                    image={`${"https://starwars-visualguide.com/assets/img/characters/"}${index + 1}${".jpg"}`}
                                    character={character}
                                    id={index}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}