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
                pphilosophy1="The Jedi-Sith philosophy is a complex and nuanced belief system that is based on the balance of power in the Force. The Jedi and the Sith have very different views on how to use the Force, with the Jedi advocating for the greater good and the Sith seeking personal power and domination."
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore2
                image4={PhilosophyloreImage1}
                pphilosophy2="The Jedi-Sith philosophy is centered around the idea of light and dark, with the Jedi embodying the light side of the Force and the Sith embracing the dark side. Both groups believe in the importance of discipline and control, but they approach it in very different ways."
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore3
                image4={PhilosophyloreImage2}
                pphilosophy3="The Jedi-Sith philosophy represents a struggle between two opposing views of the world. The Jedi believe in compassion and selflessness, while the Sith value domination and self-interest. Both groups recognize the power of the Force, but they see it as a means to very different ends."
            />
        </div>
        <div className="text-center mt-5">
            <Philosophylore4
                image4={PhilosophyloreImage3}
                pphilosophy4="Ultimately, the Jedi-Sith philosophy is a reflection of the choices we make in life. We can choose to follow the path of the Jedi, which emphasizes the greater good and the needs of others, or we can choose the path of the Sith, which is focused on personal power and control. In the end, the choice is up to us, and it will have a profound impact on the kind of person we become.
                The Jedi-Sith philosophy is a rich and complex belief system that has captivated audiences for decades. It represents a struggle between light and dark, good and evil, and the choices we make in life. Whether we choose to follow the path of the Jedi or the Sith, we must remember that our decisions have consequences and will ultimately shape the kind of person we become."
            />
        </div>
    </div >



)