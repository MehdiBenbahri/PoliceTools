import Menu from "./Menu";
import {React} from "react";
import PDPCard from "./PDPCard";

function Intro(){
    return (
        <div>
            <Menu/>
            <div className="row mt-5">
                <div className="col-sm-1 col-md-2"></div>
                <div className="bg-dark text-white col-sm-10 col-md-8 shadow-sm p-3">
                    <h2 className={"text-center text-uppercase my-3"}>Les outils pour facilité la vie <br/> de la police sur Unity-RP</h2>
                    <div className={"opacity-75"}>
                        <div>À l'origine, nous devions faire des rapports à la main sur discord, et ce n'était pas la joie.</div>
                        <div>J'ai donc fait un faits un formulaire pour nous faciliter la tâche. Je me suis permis d'utiliser React, parce que faut que je commence à l'apprendre comme il faut pour le TAF.</div>
                        <div>Pour l'instant, c'est très basique, et y a quelques petites coquilles, mais franchement ça empêchera beaucoup d'erreur.</div>
                        <div>Ce site n'utilise pas de cookie particulier, et ne récolte pour l'instant aucune donnée, c'est juste de la mise en forme de texte en JS.</div>
                    </div>
                    <hr/>
                    <h5>Si vous êtes policier sur Unity-RP, sélectionnez votre PDP, les autres vous pouvez partir, la suite ne sert à rien.</h5>
                    <div className={"d-flex flex-wrap justify-content-evenly align-items-center"}>
                        <PDPCard title={"BCSO"} img={"/img/BCSO_logo.webp"} description={"Je fais partie de l'élite de l'élite. Même le FIB nous envie, et je ne dis pas ça parce que l'auteur de ce site est un BCSO, de toute façon, toutes les polices se valent à moindre mesure..."} link={"/bcso/rapport"} />
                        <PDPCard title={"Vespucci"} img={"/img/LSPD_logo.webp"} description={"Sans nous, la ville serait un véritable ghetto. Si on compte les excès de vitesse, les trafics de drogue en bande organisée et les nombreux vols à main armée, on n'est pas si mal par rapport à ce qu'il se fait ailleurs..."} link={"/vespucci/rapport"} />
                        <PDPCard title={"Mission Row"} img={"/img/MR_logo.webp"} description={"De nombreux SDF traînent dans les rues de Mission Row, surtout la nuit. C'est pourquoi notre présence reste importante pour la sécurité du quartier, malgré le fait qu'ils ne pourront pas payer d'amende."} link={"/mission-row/rapport"} />
                    </div>
                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className={"my-5"}></div>
        </div>
    )
}
export default Intro;