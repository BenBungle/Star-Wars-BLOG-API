import React from "react";
import "../../styles/navbar.css";
import gamesImage from "../../img/videojuegos.png";
import { JumbotronVistas } from "./jumbotronvistas";
import { CardGames } from "./card";
import { Link } from "react-router-dom";


export const Game = () => {
    
    const games = [ {title:"Star Wars Rogue Squadron",image:"https://assets-prd.ignimgs.com/2022/01/07/star-wars-rogue-squadron-1641582049459.jpg"},
                    {title:"Star Wars Battlefront II",image:"https://image.api.playstation.com/vulcan/img/rnd/202005/1908/REtp963wSMPqrbE8ugiKaGKA.png"},
                    {title:"Star Wars The Old Republic", image:"https://upload.wikimedia.org/wikipedia/en/3/3c/Star_Wars-_The_Old_Republic_cover.jpg"},
                    {title:"Star Wars Episode 1: Racer",image:"http://www.retroplace.com/pics/n64/packshots/50067--star-wars-episode-i-racer.png"},
                    {title:"Star Wars The Force Unleashed",image:"https://media.titanbooks.com/catalog/products/5202/forceunleashed2.jpg"},
                    {title:"Star Wars Bounty Hunter",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOElHxmi-2tDUpMqmyPNFqppqnZuA63_WG7jhRk1SPcivwdWNQrH_y8hccrGxP76xIVFI&usqp=CAU"},
                    {title:"Star Wars  Jedi The Fallen Order",image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81FX0UWkn7L._SY445_.jpg"},
                    {title:"Star Wars  Jedi Survivor",image:"https://image.api.playstation.com/vulcan/ap/rnd/202212/2214/0wqNqxCpXvst4dEaEgz7njSD.png"}
                ];
    

    return (
        <div>
            <JumbotronVistas
            titulo1="Videogames"
            imagen1={gamesImage}
            />
            <div className="container mt-3">
                <div className="row">
                    {games.map((games,index)=>{
			        return (
                        
                            <div className="col-md-3 mt-4" key={index}>
                                <CardGames 
                                title={games.title} 
                                image={games.image}
                                />
                            </div>  
                    )
		            })}
                </div>
            </div>
        </div> 
    )
}