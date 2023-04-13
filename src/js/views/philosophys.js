import React from "react";
import { Philosophys } from "../component/philosophys";
import { Philosophylore1 } from "../component/philosophyLORE";
import { Philosophylore2 } from "../component/philosophyLORE";
import { Philosophylore3 } from "../component/philosophyLORE";
import { Philosophylore4 } from "../component/philosophyLORE";
import PhilosophyloreImage from "../../img/stbgv2.png"
import PhilosophyloreImage1 from "../../img/clonetrooper.jpg"
import PhilosophyloreImage2 from "../../img/darthvader.png"
import PhilosophyloreImage3 from "../../img/deathstar.jpg"


export const Philosophy = () => (
    <div className="text-center mt-5">
        <Philosophys
        />
        <div className="text-center mt-5">
            <Philosophylore1
            image4={PhilosophyloreImage}
            pphilosophy1="asfasfasfasfasfasfasf"
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore2
            image4={PhilosophyloreImage1}
            pphilosophy1="asfasfasfasfasfasfasf"
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore3
            image4={PhilosophyloreImage2}
            pphilosophy1="asfasfasfasfasfasfasf"
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore4
            image4={PhilosophyloreImage3}
            pphilosophy1="asfasfasfasfasfasfasf"
            />
        </div>
    </div >
    


)