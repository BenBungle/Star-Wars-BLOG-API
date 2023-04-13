import React, {useContext} from "react";
import { JumbotronVistas } from "./jumbotronvistas";
import navesImage from "../../img/naves.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardStarships } from "./card";


export const Starship = () => {

    const {store,actions} = useContext(Context)

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
        <div>
            <JumbotronVistas
            titulo1="Starships"
            imagen1={navesImage}
            />
            <div className="container mt-3">
                <div className="row">
		
                {store.starships?.results?.map((starships,index)=>{ 
                    return (
                    
                        <div className="col-md-3 mt-2" key={index}>
                            <CardStarships 
                            title={starships.name} 
                            image={imageCard[index]}
                            starships={starships} 
                            id={index} />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}