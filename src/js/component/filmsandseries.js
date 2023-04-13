import React, {useContext} from "react";
import "../../styles/navbar.css";
import filmsImage from "../../img/peliculas-series.png";
import { JumbotronVistas } from "./jumbotronvistas";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardFilms } from "./card";


export const FilmAndSerie = () => {

    const {store,actions} = useContext(Context)

    return (
        <div>
            <JumbotronVistas
            titulo1="Films&Series"
            imagen1={filmsImage}
            />
            <div className="container mt-3">
                <div className="row">
		
                {store.films?.results?.map((films,index)=>{
                return (
                    <div className="col-md-3 mt-2" key={index}>
                        <CardFilms 
                        title={films.title} 
                        image={`${"https://starwars-visualguide.com/assets/img/films/"}${index+1}${".jpg"}`} 
                        films={films} 
                        id={index} />
                    </div> 
                )
            })}
            </div>
        </div>
        </div>
    )
}