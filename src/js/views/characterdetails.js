import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JumbotronCharacters } from "../component/jumbotrom3";
import { Context } from "../store/appContext";


export const CharacterDetails = () => {

    const { store, actions } = useContext(Context)

    const { id } = useParams();



    return (
        <div className="text-center mt-5 text-secondary">
            {store.character?.results?.map((character, index) => {
                if (id == index) {
                    return (
                        <div>
                            <JumbotronCharacters
                                imagenjumbotron3={`${"https://starwars-visualguide.com/assets/img/characters/"}${index + 1}${".jpg"}`}
                                titulo3={character.name}
                                parrafo3='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
                                name={character.name}
                                birth_year={character.birth_year}
                                gender={character.gender}
                                height={character.height}
                                skin_color={character.skin_color}
                                eye_color={character.eye_color}


                            />
                        </div>
                    )
                }
            })}


        </div>
    )
}