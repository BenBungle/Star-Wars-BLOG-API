import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { JumbotronStarships } from "../component/jumbotrom3";
import { Context } from "../store/appContext";


export const StarshipsDetails = () => {

    const {store,actions} = useContext(Context)    
    
    const {id} = useParams();

    const imageCard =["https://www.blockbrickworld.com/wp-content/uploads/2020/10/mortesv-cr-90-corellian-corvette-blockade-runner-tantive-iv-4.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800",
    "https://starwars-visualguide.com/assets/img/starships/5.jpg",
    "https://starwars-visualguide.com/assets/img/starships/9.jpg",
    "https://starwars-visualguide.com/assets/img/starships/10.jpg",
    "https://starwars-visualguide.com/assets/img/starships/11.jpg",
    "https://starwars-visualguide.com/assets/img/starships/12.jpg",
    "https://starwars-visualguide.com/assets/img/starships/13.jpg",
    "https://starwars-visualguide.com/assets/img/starships/15.jpg",
    "https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12"
    ]
    

        
    return (
    <div className="text-center mt-5 text-secondary">
        {store.starships?.results?.map((starships,index)=>{
            if(id == index) {
                return (
                    <div>
                        <JumbotronStarships
                        imagenjumbotron3={imageCard[index]}
                        titulo3={starships.name}
                        parrafo3='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
                        name={starships.name}
                        model={starships.model}
                        starship_class={starships.starship_class}
                        manufacturer={starships.manufacturer}
                        passengers={starships.passengers}
                        length={starships.length}
                        />
                    </div>                
                )
            }
        })}  
                
    
    </div>
    )
}