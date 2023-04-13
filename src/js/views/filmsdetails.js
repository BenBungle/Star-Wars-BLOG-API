import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { JumbotronFilms } from "../component/jumbotrom3";
import { Context } from "../store/appContext";


export const FilmsDetails = () => {

    const {store,actions} = useContext(Context)    
    
    const {id} = useParams();
    

        
    return (
    <div className="text-center mt-5 text-secondary">
        {store.films?.results?.map((films,index)=>{
            if(id == index) {
                return (
                    <div>
                        <JumbotronFilms
                        imagenjumbotron3={`${"https://starwars-visualguide.com/assets/img/films/"}${index+1}${".jpg"}`}
                        titulo3={films.title}
                        parrafo3='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
                        title={films.title}
                        director={films.director}
                        producer={films.producer}
                        release_date={films.release_date}

                        />
                    </div>                
                )
            }
        })}  
                
    
    </div>
    )
}